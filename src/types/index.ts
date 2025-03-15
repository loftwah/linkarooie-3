// Import ImageMetadata type from Astro
import type { ImageMetadata } from 'astro';

export interface SocialLink {
    platform: 'github' | 'twitter' | 'x-twitter' | 'bluesky' | 'linkedin';
    url: string;
  }
  
  export interface Link {
    id: string;
    title: string;
    description: string;
    url: string;
    icon: string;
    hidden?: boolean;
  }
  
  export interface Achievement {
    id: string;
    title: string;
    description: string;
    date: string;
    url: string;
    icon: string;
    showFullDate?: boolean;
    hidden?: boolean;
  }
  
  export interface Profile {
    name: string;
    username: string;
    description: string;
    avatarUrl: string | ImageMetadata;
    bannerUrl: string | ImageMetadata;
    ogImageUrl: string | ImageMetadata;
    ogTitle: string;
    ogDescription: string;
    bio: string;
    tags: string[];
    isPublic: boolean;
    showInDirectory: boolean;
    socialLinks: SocialLink[];
    links: Link[];
    achievements: Achievement[];
  }