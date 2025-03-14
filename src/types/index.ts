export interface SocialLink {
    platform: 'github' | 'twitter' | 'bluesky' | 'linkedin';
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
    avatarUrl: string;
    bannerUrl: string;
    ogImageUrl: string;
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