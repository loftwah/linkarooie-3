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

export interface RelatedWork {
  title: string;
  url: string;
  description: string;
}

export interface Citation {
  title?: string;
  url: string;
}

export interface Tag {
  name: string;
  description?: string;
  citation?: Citation;
  related_work?: RelatedWork[];
}

// Changed the type definition to enforce Tag objects only, not strings
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
  tags: Tag[]; // Only allow Tag objects, not strings
  isPublic: boolean;
  showInDirectory: boolean;
  socialLinks: SocialLink[];
  links: Link[];
  achievements: Achievement[];
}