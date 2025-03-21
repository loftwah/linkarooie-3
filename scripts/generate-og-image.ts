import { join, dirname } from 'path';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { loftwah } from '../src/data/profiles/loftwah'; // Import your real profile
import type { ImageMetadata } from 'astro';

// Define types for our script
interface Citation {
  title?: string;
  url: string;
}

interface RelatedWork {
  title: string;
  url: string;
  description: string;
}

interface Tag {
  name: string;
  description?: string;
  citation?: Citation;
  related_work?: RelatedWork[];
}

interface Profile {
  name: string;
  username: string;
  description: string;
  bio: string;
  tags: Tag[];
  avatarUrl: string | ImageMetadata;
  ogImageUrl: string | ImageMetadata;
  // Other properties exist but not used in this script
}

interface ThemeColors {
  background: string;
  text: string;
  accent: string;
  secondaryText: string;
  headerText: string;
  tagBackground: string;
  tagText: string;
  gradientStart: string;
  gradientEnd: string;
}

interface ThemeOptions {
  theme?: 'dark' | 'light';
}

interface Font {
  name: string;
  data: ArrayBuffer;
  weight: number;
  style: 'normal';
}

// @ts-ignore - Bun types may not be available in regular TypeScript
// Load fonts with Bun
async function loadFont(name: string, weight: number, path: string): Promise<Font> {
  // @ts-ignore - Using Bun API
  const fontFile = Bun.file(path);
  // @ts-ignore - Using Bun API
  if (!(await fontFile.exists())) {
    throw new Error(`Font file not found at: ${path}`);
  }
  // @ts-ignore - Using Bun API
  const fontData = await fontFile.arrayBuffer();
  return { name, data: fontData, weight, style: 'normal' };
}

// Generate the OG image
async function generateOGImage(profile: Profile, options: ThemeOptions = {}): Promise<Buffer> {
  // Default theme settings
  const theme = options.theme || 'dark';
  const isDarkTheme = theme === 'dark';
  
  // Theme colors
  const colors: Record<'dark' | 'light', ThemeColors> = {
    dark: {
      background: '#1b1d2d',
      text: 'white',
      accent: '#a5fd0e',
      secondaryText: '#bdc3c7',
      headerText: '#e0e0e0',
      tagBackground: '#2a3b0f',
      tagText: '#a5fd0e',
      gradientStart: 'rgba(165, 253, 14, 0.15)',
      gradientEnd: 'rgba(27, 29, 45, 0)'
    },
    light: {
      background: '#ffffff',
      text: '#333333',
      accent: '#9233ea',
      secondaryText: '#555555',
      headerText: '#444444',
      tagBackground: '#f0e6fa',
      tagText: '#9233ea',
      gradientStart: 'rgba(146, 51, 234, 0.15)',
      gradientEnd: 'rgba(255, 255, 255, 0)'
    }
  };
  
  // Set current theme colors
  const currentTheme = colors[isDarkTheme ? 'dark' : 'light'];
  // Load avatar and convert to data URL
  // @ts-ignore - Using Bun API
  const imageFile = Bun.file(profile.avatarUrl);
  // @ts-ignore - Using Bun API
  if (!(await imageFile.exists())) {
    throw new Error(`Avatar file not found at: ${profile.avatarUrl}`);
  }
  // @ts-ignore - Using Bun API
  const imageBuffer = await imageFile.arrayBuffer();
  const base64 = Buffer.from(imageBuffer).toString('base64');
  const mimeType = profile.avatarUrl.toString().endsWith('.png') ? 'image/png' : 'image/jpeg';
  const avatarDataUrl = `data:${mimeType};base64,${base64}`;
  console.log('Avatar loaded successfully');

  // Load fonts
  const fontPathRegular = './public/fonts/Inter-Regular.ttf';
  const fontPathBold = './public/fonts/Inter-Bold.ttf';
  // @ts-ignore - Using Bun API
  if (!await Bun.file(fontPathRegular).exists()) {
    throw new Error(`Font file not found: ${fontPathRegular}`);
  }
  // @ts-ignore - Using Bun API
  if (!await Bun.file(fontPathBold).exists()) {
    throw new Error(`Font file not found: ${fontPathBold}`);
  }
  const interRegular = await loadFont('Inter', 400, fontPathRegular);
  const interBold = await loadFont('Inter', 700, fontPathBold);
  const fonts = [interRegular, interBold];
  console.log('Fonts loaded successfully');

  // Take up to 16 tags instead of 8 to display in two rows if available
  // Extract tag names from Tag objects
  const tagsToDisplay = profile.tags.slice(0, 16).map(tag => tag.name);
  
  // Generate SVG with Satori
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: currentTheme.background,
          color: currentTheme.text,
          fontFamily: 'Inter',
        },
        children: [
          // Main content
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                padding: '60px',
                gap: '20px',
              },
              children: [
                // Header with avatar and name
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '40px',
                    },
                    children: [
                      // Avatar
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            width: '180px',
                            height: '180px',
                            borderRadius: '90px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                            border: `4px solid ${currentTheme.accent}`,
                          },
                          children: [
                            {
                              type: 'img',
                              props: {
                                src: avatarDataUrl,
                                style: { width: '100%', height: '100%', objectFit: 'cover' },
                              },
                            },
                          ],
                        },
                      },
                      // Name and details
                      {
                        type: 'div',
                        props: {
                          style: { display: 'flex', flexDirection: 'column', gap: '12px' },
                          children: [
                            {
                              type: 'h1',
                              props: {
                                style: {
                                  display: 'flex',
                                  fontSize: '62px',
                                  fontWeight: 700,
                                  margin: 0,
                                  lineHeight: 1.1,
                                },
                                children: profile.name,
                              },
                            },
                            {
                              type: 'p',
                              props: {
                                style: {
                                  display: 'flex',
                                  fontSize: '34px',
                                  fontWeight: 400,
                                  margin: 0,
                                  color: currentTheme.accent,
                                },
                                children: `@${profile.username}`,
                              },
                            },
                            {
                              type: 'p',
                              props: {
                                style: {
                                  display: 'flex',
                                  fontSize: '26px',
                                  fontWeight: 500,
                                  margin: 0,
                                  color: currentTheme.headerText,
                                },
                                children: profile.description,
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                // Bio
                {
                  type: 'p',
                  props: {
                    style: {
                      display: 'flex',
                      fontSize: '24px',
                      lineHeight: 1.6,
                      color: currentTheme.secondaryText,
                      maxWidth: '800px',
                      margin: '20px 0 0 0',
                    },
                    children: profile.bio,
                  },
                },
                // Tags container
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      marginTop: '30px',
                    },
                    children: [
                      // Tags are now organized to better fit the available space
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '12px',
                            width: '100%',
                          },
                          children: tagsToDisplay.map((tagName: string) => ({
                            type: 'div',
                            props: {
                              style: {
                                display: 'flex',
                                backgroundColor: currentTheme.tagBackground,
                                color: currentTheme.tagText,
                                padding: '10px 20px',
                                borderRadius: '30px',
                                fontSize: '20px',
                                fontWeight: 500,
                                marginBottom: '6px',
                              },
                              children: tagName,
                            },
                          })),
                        },
                      },
                    ],
                  },
                },
                // Footer
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      marginTop: 'auto',
                      justifyContent: 'flex-end',
                      width: '100%',
                    },
                    children: [
                      {
                        type: 'p',
                        props: {
                          style: {
                            display: 'flex',
                            fontSize: '22px',
                            color: currentTheme.accent,
                            fontWeight: 700,
                          },
                          children: 'linkarooie.com',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          // Gradient overlay
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(135deg, ${currentTheme.gradientStart} 0%, ${currentTheme.gradientEnd} 60%)`,
                pointerEvents: 'none',
              },
            },
          },
        ],
      },
    },
    // @ts-ignore - Adding type ignore to avoid issues with font format
    { width: 1200, height: 630, fonts }
  );

  // Convert SVG to PNG
  const resvg = new Resvg(svg, {
    background: isDarkTheme ? 'rgba(27, 29, 45, 1)' : 'rgba(255, 255, 255, 1)',
    fitTo: { mode: 'width', value: 1200 },
  });
  return Buffer.from(resvg.render().asPng());
}

// Main execution
async function main() {
  try {
    console.log('Generating OG image...');
    const profile = loftwah; // The imported profile should match our Profile interface
    
    // Check if theme parameter was passed via command line
    const args = process.argv.slice(2);
    const themeArg = args.find(arg => arg.startsWith('--theme='));
    const theme = themeArg ? themeArg.split('=')[1] as 'dark' | 'light' : 'dark';
    
    console.log(`Generating OG image with ${theme} theme...`);
    const imageBuffer = await generateOGImage(profile, { theme });

    // @ts-ignore - ogImageUrl is a string at runtime
    const outputDir = dirname(profile.ogImageUrl);
    if (!existsSync(outputDir)) await mkdir(outputDir, { recursive: true });

    // @ts-ignore - ogImageUrl is a string at runtime
    await writeFile(profile.ogImageUrl, imageBuffer);
    console.log(`OG image saved to ${profile.ogImageUrl}`);
  } catch (error) {
    console.error('Error generating OG image:', error);
    process.exit(1); // Exit with error code
  }
}

main();