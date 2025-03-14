import { Profile } from '../../types';
import avatarImage from '../../assets/images/loftwah_avatar.jpg';
import bannerImage from '../../assets/images/loftwah_banner.jpg';

export const loftwah: Profile = {
  name: "Dean Lofts",
  username: "loftwah",
  description: "Only the vibe coder remains.",
  avatarUrl: avatarImage,
  bannerUrl: bannerImage,
  ogImageUrl: '/images/loftwah_og.jpg',
  ogTitle: "Dean Lofts (Loftwah) - Single Dad and Senior DevOps Engineer",
  ogDescription: "Connect with Dean Lofts, a developer, creator, and tech enthusiast. Explore my projects, content, and social links all in one place.",
  bio: "Creator of Linkarooie, DevOps Engineer. Hit me up on Twitter (@loftwah).",
  tags: [
    "AWS",
    "DevOps",
    "Docker",
    "GitHub",
    "Linux",
    "Open Source",
    "Ruby",
    "Ruby on Rails",
    "Terraform"
  ],
  isPublic: true,
  showInDirectory: true,
  socialLinks: [
    { platform: "github", url: "https://github.com/loftwah" },
    { platform: "twitter", url: "https://twitter.com/loftwah" },
    { platform: "bluesky", url: "https://bsky.app/profile/loftwah.bsky.social" },
    { platform: "linkedin", url: "https://linkedin.com/in/deanlofts" }
  ],
  links: [
    {
      id: "blog",
      title: "My Blog",
      description: "My blog where I write about stuff.",
      url: "https://blog.deanlofts.xyz",
      icon: "fa-solid fa-blog"
    },
    {
      id: "beats",
      title: "Loftwah The Beatsmiff Beats",
      description: "Lots of beats I have made over the years.",
      url: "https://www.youtube.com/playlist?list=PLKBAUoCO_FtlACntcZqTOD4hckJ8IAWZ3",
      icon: "fa-solid fa-music"
    },
    {
      id: "produced",
      title: "Produced by Loftwah The Beatsmiff",
      description: "A bunch of music that I produced.",
      url: "https://www.youtube.com/playlist?list=PLKBAUoCO_FtkHiwRzyGzfhauIhNMBFw66",
      icon: "fa-solid fa-music"
    },
    {
      id: "grabit",
      title: "GRABIT.SH",
      description:
        "A powerful CLI tool for gathering and summarising key information from Git repositories, enhancing developer productivity through automation and streamlined analysis.",
      url: "https://grabit.sh",
      icon: "fa-solid fa-magnifying-glass"
    },
    {
      id: "must-haves",
      title: "Must haves in DevOps and the road to AI",
      description:
        "A curated list of must-have DevOps tools, practices, and AI-driven innovations that streamline development, enhance automation, and optimise system reliability.",
      url: "https://www.makethelist.io/d/devops-must-haves",
      icon: "fa-solid fa-list"
    },
    {
      id: "linux-pirates",
      title: "Linux for Pirates! My daily.dev squad",
      description: "A squad where we learn Linux as Pirates! on daily.dev",
      url: "https://dly.to/3R9tSuu9oHB",
      icon: "fa-solid fa-code"
    },
    {
      id: "bogan-hustler",
      title: "Bogan Hustler",
      description: "A remake of Dope Wars but Straya",
      url: "https://boganhustler.deanlofts.xyz",
      icon: "fa-solid fa-people-robbery"
    },
    // Hidden links
    {
      id: "cv",
      title: "My CV/Resume",
      description:
        "A detailed overview of my professional experience, skills, and accomplishments.",
      url: "https://gist.github.com/loftwah/43d0d27be586ebe2c95df99657121a8b",
      icon: "fa-solid fa-file-alt",
      hidden: true
    },
    {
      id: "wikipedia",
      title: "I'm in Wikipedia lol",
      description:
        "One day at work, I received an unexpected call from an unknown number, which turned out to be the Liberal Democratic Party of Western Australia. They offered me the opportunity to run as their candidate in Rockingham, Western Australia, assuring me that they would cover all expenses and handle the campaign logistics. I accepted the offer, and as a result, I had the chance to be part of the political process. Now, I'm even mentioned in Wikipedia for my involvement.",
      url: "https://en.wikipedia.org/wiki/Candidates_of_the_2021_Western_Australian_state_election",
      icon: "fa-solid fa-landmark",
      hidden: true
    }
  ],
  achievements: [
    {
      id: "mashable",
      title: "Featured in Mashable",
      description:
        "X users react to the CrowdStrike outage with glee and disappointment. Raise your hand if you were scared.",
      date: "19 Jul 2024",
      url: "https://mashable.com/article/crowdstrike-outage-reactions",
      icon: "fa-solid fa-lock",
      showFullDate: false
    },
    {
      id: "terraform",
      title: "HashiCorp Certified: Terraform Associate (003)",
      description:
        "Earners of the HashiCorp Certified: Terraform Associate certification know the basic concepts, skills, and use cases associated with open source HashiCorp Terraform. They understand and can utilise Terraform according to the certification objectives. Additionally, they understand why enterprises choose to extend Terraform Open Source with Terraform Enterprise to solve business critical objectives.",
      date: "18 Apr 2024",
      url: "https://www.credly.com/badges/0e437888-1deb-4a2d-8b82-cefb6b87b35d/public_url",
      icon: "fa-solid fa-cloud"
    },
    {
      id: "github-followers",
      title: "Crossed 1K followers on GitHub",
      description: "I have reached 1000 followers on GitHub.",
      date: "12 Jul 2023",
      url: "https://github.com/loftwah?tab=achievements",
      icon: "fa-brands fa-github"
    },
    {
      id: "aws-certified",
      title: "AWS Certified Solutions Architect – Professional",
      description:
        "Earners of this certification have an extensive understanding of designing technical strategies to accomplish specific business goals. They demonstrated the ability to balance best practices and trade-offs based on business context. Badge owners are able to design solutions across multiple platforms and providers.",
      date: "12 Jul 2023",
      url: "https://www.credly.com/badges/c97a35fc-ba6b-427a-b521-19b9ab28cfdb/facebook",
      icon: "fa-brands fa-aws"
    }
  ]
};
