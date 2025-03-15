import { writeFile } from 'fs/promises';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import sharp from 'sharp';

// Hardcoded data for the main OG image
const linkarooieImagePath = './src/assets/images/linkarooie.jpg';
const outputPath = './src/assets/images/linkarooie_og.jpg';
const title = 'Linkarooie';
const subtitle = 'Simplify your online presence';
const description = 'A Linktree-style app to showcase your profile, links, and achievements';
const url = 'linkarooie.com';

// Interface for theme options
interface ThemeOptions {
  theme: 'dark' | 'light';
}

// Theme color configurations
const themeColors = {
  dark: {
    accent: '#a5fd0e',
    text: 'white',
    secondaryText: '#e0e0e0',
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    textShadow: 'rgba(0, 0, 0, 0.5)'
  },
  light: {
    accent: '#9233ea', // Purple accent color
    text: '#333333',
    secondaryText: '#555555',
    overlayColor: 'rgba(255, 255, 255, 0.85)',
    textShadow: 'rgba(0, 0, 0, 0.2)'
  }
};

// Load fonts using Bun
async function loadFont(name: string, weight: number, path: string) {
  const fontFile = Bun.file(path);
  if (!(await fontFile.exists())) {
    throw new Error(`Font file not found at: ${path}`);
  }
  const fontData = await fontFile.arrayBuffer();
  return { name, data: fontData, weight, style: 'normal' as const };
}

// Generate the OG image
async function generateOGImage(options: ThemeOptions = { theme: 'dark' }) {
  const isDark = options.theme === 'dark';
  const colors = themeColors[options.theme];
  
  // Load the background image and convert to data URL
  const imageFile = Bun.file(linkarooieImagePath);
  if (!(await imageFile.exists())) {
    throw new Error(`Image file not found at: ${linkarooieImagePath}`);
  }
  const imageBuffer = await imageFile.arrayBuffer();
  const base64 = Buffer.from(imageBuffer).toString('base64');
  const mimeType = 'image/jpeg';
  const linkarooieDataUrl = `data:${mimeType};base64,${base64}`;
  console.log('Background image loaded successfully');

  // Load Inter fonts
  const fonts = await Promise.all([
    loadFont('Inter', 400, './public/fonts/Inter-Regular.ttf'),
    loadFont('Inter', 700, './public/fonts/Inter-Bold.ttf'),
  ]);
  console.log('Fonts loaded successfully');

  // Generate SVG with Satori
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          width: '100%',
          height: '100%',
          position: 'relative',
        },
        children: [
          // Background image
          {
            type: 'img',
            props: {
              src: linkarooieDataUrl,
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: isDark ? 'none' : 'brightness(0.9)', // Slightly dim in light mode for better contrast
              },
            },
          },
          // Overlay with text
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: colors.overlayColor,
                padding: '60px',
                position: 'relative',
                zIndex: 1,
              },
              children: [
                // Title
                {
                  type: 'h1',
                  props: {
                    style: {
                      fontSize: '80px',
                      fontWeight: 700,
                      color: colors.accent,
                      textShadow: `0 4px 8px ${colors.textShadow}`,
                      margin: '0',
                    },
                    children: title,
                  },
                },
                // Subtitle
                {
                  type: 'p',
                  props: {
                    style: {
                      fontSize: '40px',
                      fontWeight: 600,
                      color: colors.text,
                      textShadow: `0 2px 4px ${colors.textShadow}`,
                      margin: '20px 0 0 0',
                    },
                    children: subtitle,
                  },
                },
                // Description
                {
                  type: 'p',
                  props: {
                    style: {
                      fontSize: '28px',
                      fontWeight: 400,
                      color: colors.secondaryText,
                      textShadow: `0 1px 2px ${colors.textShadow}`,
                      margin: '30px 0 0 0',
                      textAlign: 'center',
                      maxWidth: '800px',
                    },
                    children: description,
                  },
                },
                // URL
                {
                  type: 'p',
                  props: {
                    style: {
                      fontSize: '32px',
                      fontWeight: 700,
                      color: colors.accent,
                      textShadow: `0 2px 4px ${colors.textShadow}`,
                      margin: '40px 0 0 0',
                    },
                    children: url,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts,
    }
  );

  // Convert SVG to PNG
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  });
  const pngBuffer = Buffer.from(resvg.render().asPng());

  // Convert PNG to JPEG
  const jpegBuffer = await sharp(pngBuffer).jpeg({ quality: 90 }).toBuffer();
  return jpegBuffer;
}

// Main execution
async function main() {
  try {
    // Parse command line arguments
    const args = process.argv.slice(2);
    const themeArg = args.find(arg => arg.startsWith('--theme='));
    const theme = themeArg ? (themeArg.split('=')[1] as 'dark' | 'light') : 'dark';
    
    // Generate OG image with the specified theme
    console.log(`Generating ${theme} OG image...`);
    const imageBuffer = await generateOGImage({ theme });
    
    // Always write to the same output path
    await writeFile(outputPath, imageBuffer);
    console.log(`OG image saved to ${outputPath}`);
  } catch (error) {
    console.error('Error generating OG image:', error);
    process.exit(1);
  }
}

// Run the script
main();