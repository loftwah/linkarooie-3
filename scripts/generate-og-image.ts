// scripts/generate-og-image.ts
import { join, dirname } from 'path';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import type { Profile } from '../src/types';

// Dynamically import the profile
async function getProfile(): Promise<Profile> {
  const { loftwah } = await import('../src/data/profiles/loftwah.js');
  return loftwah;
}

// Load font files
async function loadFont(name: string, weight: number, url: string) {
  const fontFile = Bun.file(url);
  const fontData = await fontFile.arrayBuffer();
  return {
    name,
    data: fontData,
    weight,
    style: 'normal',
  };
}

// Generate SVG with satori
async function generateOGImage(profile: Profile): Promise<Buffer> {
  // Process avatar URL and convert to data URL
  let avatarSrc: string;
  let avatarDataUrl: string;
  
  try {
    if (typeof profile.avatarUrl === 'string') {
      avatarSrc = profile.avatarUrl;
    } else {
      // For ImageMetadata from Astro
      avatarSrc = profile.avatarUrl.src;
    }
    
    // Read the image file
    const imageFile = Bun.file(avatarSrc);
    const imageBuffer = await imageFile.arrayBuffer();
    
    // Convert to base64 data URL
    const base64 = Buffer.from(imageBuffer).toString('base64');
    const mimeType = avatarSrc.endsWith('.jpg') || avatarSrc.endsWith('.jpeg') 
      ? 'image/jpeg' 
      : avatarSrc.endsWith('.png') 
        ? 'image/png' 
        : 'image/jpeg';
    
    avatarDataUrl = `data:${mimeType};base64,${base64}`;
    console.log('Successfully converted avatar to data URL');
  } catch (error) {
    console.error('Error processing avatar image:', error);
    // Fallback to a placeholder
    avatarDataUrl = 'data:image/png;base64,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';
  }

  // Load TTF fonts
  let fonts = [];
  try {
    const interRegular = await loadFont(
      'Inter',
      400,
      './public/fonts/Inter-Regular.ttf'
    );
    
    const interBold = await loadFont(
      'Inter',
      700,
      './public/fonts/Inter-Bold.ttf'
    );
    
    fonts = [interRegular, interBold];
    console.log('Successfully loaded TTF fonts');
  } catch (error) {
    console.error('Error loading TTF fonts:', error);
    console.log('Will use system fonts as fallback');
  }

  // Generate SVG with satori
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: '#0f172a',
          padding: '40px',
          fontFamily: fonts.length > 0 ? 'Inter' : 'system-ui, sans-serif',
          color: 'white',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '32px',
              },
              children: [
                {
                  type: 'img',
                  props: {
                    src: avatarDataUrl,
                    width: 96,
                    height: 96,
                    style: {
                      borderRadius: '48px',
                      marginRight: '24px',
                    },
                    alt: `${profile.name}'s avatar`,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                    },
                    children: [
                      {
                        type: 'h1',
                        props: {
                          style: {
                            fontSize: '36px',
                            fontWeight: 700,
                            margin: 0,
                            padding: 0,
                          },
                          children: profile.name,
                        },
                      },
                      {
                        type: 'p',
                        props: {
                          style: {
                            fontSize: '24px',
                            margin: '8px 0 0 0',
                            padding: 0,
                            color: '#94a3b8',
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
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexWrap: 'wrap',
                marginBottom: '24px',
              },
              children: profile.tags.slice(0, 8).map((tag) => ({
                type: 'div',
                props: {
                  style: {
                    backgroundColor: '#1e40af',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '16px',
                    margin: '0 8px 8px 0',
                    fontSize: '16px',
                  },
                  children: tag,
                },
              })),
            },
          },
          {
            type: 'div',
            props: {
              style: {
                marginTop: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                width: '100%',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '20px',
                      color: '#94a3b8',
                    },
                    children: profile.bio,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '20px',
                      fontWeight: 700,
                    },
                    children: `@${profile.username}`,
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
      fonts: fonts,
    }
  );

  // Convert SVG to PNG using resvg
  const resvg = new Resvg(svg, {
    background: 'rgba(15, 23, 42, 1)',
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  });
  
  return Buffer.from(resvg.render().asPng());
}

// Main function
async function main() {
  try {
    console.log('Generating OG image...');
    const profile = await getProfile();
    
    const imageBuffer = await generateOGImage(profile);
    
    // Determine the output path
    let outputPath: string;
    if (typeof profile.ogImageUrl === 'string') {
      outputPath = profile.ogImageUrl;
    } else {
      // Handle ImageMetadata from Astro
      outputPath = `./public/og/${profile.username}_og.png`;
    }
    
    // Ensure directory exists
    const outputDir = dirname(outputPath);
    if (!existsSync(outputDir)) {
      await mkdir(outputDir, { recursive: true });
    }
    
    // Write the file
    await writeFile(outputPath, imageBuffer);
    console.log(`OG image for ${profile.username} saved to ${outputPath}`);
  } catch (error) {
    console.error('Error generating OG image:', error);
  }
}

// Run the main function
main();