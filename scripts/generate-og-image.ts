import { join, dirname } from 'path';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { loftwah } from '../src/data/profiles/loftwah'; // Import your real profile

// Load fonts with Bun
async function loadFont(name, weight, path) {
  const fontFile = Bun.file(path);
  if (!(await fontFile.exists())) {
    throw new Error(`Font file not found at: ${path}`);
  }
  const fontData = await fontFile.arrayBuffer();
  return { name, data: fontData, weight, style: 'normal' };
}

// Generate the OG image
async function generateOGImage(profile) {
  // Load avatar and convert to data URL
  const imageFile = Bun.file(profile.avatarUrl);
  if (!(await imageFile.exists())) {
    throw new Error(`Avatar file not found at: ${profile.avatarUrl}`);
  }
  const imageBuffer = await imageFile.arrayBuffer();
  const base64 = Buffer.from(imageBuffer).toString('base64');
  const mimeType = profile.avatarUrl.endsWith('.png') ? 'image/png' : 'image/jpeg';
  const avatarDataUrl = `data:${mimeType};base64,${base64}`;
  console.log('Avatar loaded successfully');

  // Load fonts
  const fontPathRegular = './public/fonts/Inter-Regular.ttf';
  const fontPathBold = './public/fonts/Inter-Bold.ttf';
  if (!await Bun.file(fontPathRegular).exists()) {
    throw new Error(`Font file not found: ${fontPathRegular}`);
  }
  if (!await Bun.file(fontPathBold).exists()) {
    throw new Error(`Font file not found: ${fontPathBold}`);
  }
  const interRegular = await loadFont('Inter', 400, fontPathRegular);
  const interBold = await loadFont('Inter', 700, fontPathBold);
  const fonts = [interRegular, interBold];
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
          backgroundColor: '#1b1d2d',
          color: 'white',
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
                            border: '4px solid #a5fd0e',
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
                                  fontSize: '60px',
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
                                  fontSize: '32px',
                                  fontWeight: 400,
                                  margin: 0,
                                  color: '#a5fd0e',
                                },
                                children: `@${profile.username}`,
                              },
                            },
                            {
                              type: 'p',
                              props: {
                                style: {
                                  display: 'flex',
                                  fontSize: '24px',
                                  fontWeight: 500,
                                  margin: 0,
                                  color: '#e0e0e0',
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
                      fontSize: '22px',
                      lineHeight: 1.6,
                      color: '#bdc3c7',
                      maxWidth: '800px',
                      margin: '20px 0 0 0',
                    },
                    children: profile.bio,
                  },
                },
                // Tags
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px',
                      marginTop: '30px',
                    },
                    children: profile.tags.slice(0, 8).map((tag) => ({
                      type: 'div',
                      props: {
                        style: {
                          display: 'flex',
                          backgroundColor: '#2a3b0f',
                          color: '#a5fd0e',
                          padding: '10px 20px',
                          borderRadius: '30px',
                          fontSize: '18px',
                          fontWeight: 500,
                        },
                        children: tag,
                      },
                    })),
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
                            fontSize: '20px',
                            color: '#a5fd0e',
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
                background: 'linear-gradient(135deg, rgba(165, 253, 14, 0.15) 0%, rgba(27, 29, 45, 0) 60%)',
                pointerEvents: 'none',
              },
            },
          },
        ],
      },
    },
    { width: 1200, height: 630, fonts }
  );

  // Convert SVG to PNG
  const resvg = new Resvg(svg, {
    background: 'rgba(27, 29, 45, 1)',
    fitTo: { mode: 'width', value: 1200 },
  });
  return Buffer.from(resvg.render().asPng());
}

// Main execution
async function main() {
  try {
    console.log('Generating OG image...');
    const profile = loftwah; // Use the imported profile directly
    const imageBuffer = await generateOGImage(profile);

    const outputDir = dirname(profile.ogImageUrl);
    if (!existsSync(outputDir)) await mkdir(outputDir, { recursive: true });

    await writeFile(profile.ogImageUrl, imageBuffer);
    console.log(`OG image saved to ${profile.ogImageUrl}`);
  } catch (error) {
    console.error('Error generating OG image:', error);
    process.exit(1); // Exit with error code
  }
}

main();