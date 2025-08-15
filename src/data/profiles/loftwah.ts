import type { Profile, Tag, RelatedWork, Citation } from '../../types';
import avatarImage from '../../assets/images/loftwah_avatar.jpg';
import bannerImage from '../../assets/images/loftwah_banner.jpg';
import ogImage from '../../assets/images/loftwah_og.jpg';

// No interfaces needed - we'll just use the objects directly

export const loftwah: Profile = {
  name: "Dean Lofts",
  username: "loftwah",
  description: "I like building things and making them work.",
  avatarUrl: avatarImage,
  bannerUrl: bannerImage,
  ogImageUrl: ogImage,
  ogTitle: "Dean Lofts (Loftwah) - Single Dad and Senior DevOps Engineer",
  ogDescription:
    "I create, ship, and connect ideas. DevOps engineer, product builder, and music maker. All my projects and links in one place.",
  bio:
    "Creator of Linkarooie, Senior DevOps Engineer, and part-time beat maker. Always building, always learning.",
  tags: [
    {
      name: "AI/ML",
      description:
        "Using AI to build tools, solve problems, and automate boring stuff. ML helps the models get better by learning from data.",
      citation: {
        title: "What is Artificial Intelligence?",
        url: "https://www.ibm.com/topics/artificial-intelligence"
      },
      related_work: [
        {
          title:
            "Build a Powerful Product Catalog Explorer with LangChain, Ollama, and Gradio",
          url: "https://blog.deanlofts.xyz/blog/rag-product-catalog/",
          description: "A product catalog explorer powered by AI search and RAG."
        },
        {
          title: "Auto Jira",
          url: "https://github.com/loftwah/auto-jira",
          description: "Automating Jira tasks with AI helpers."
        },
        {
          title: "Unlocking the Power of GGUF Models Locally with Ollama",
          url: "https://blog.deanlofts.xyz/blog/ollama/",
          description: "Run local language models with Ollama and GGUF."
        },
        {
          title: "English-Chinese Translator for Markdown",
          url: "https://github.com/loftwah/eng-cn-translate",
          description: "Translate Markdown between English and Simplified Chinese."
        },
        {
          title: "Fantasy Basketball Tools",
          url: "https://github.com/loftwah/langchain-csv/tree/main/nba",
          description: "AI assisted fantasy basketball analysis."
        },
        {
          title: "Hoops Hustler",
          url: "https://github.com/loftwah/hoops-hustler",
          description:
            "NBA team comparison with live stats and AI generated insights."
        }
      ]
    },
    {
      name: "Astro",
      description:
        "Fast sites with minimal client JavaScript. Great for content and works well with React or Vue when needed.",
      citation: {
        title: "Astro: Build Faster Websites",
        url: "https://astro.build/"
      },
      related_work: [
        {
          title: "Linkarooie",
          url: "https://linkarooie.com/",
          description: "Open source link in bio built with Astro."
        },
        {
          title: "My Blog",
          url: "https://blog.deanlofts.xyz/",
          description: "Personal blog powered by Astro."
        },
        {
          title: "Building an Astro 5 App with Cloudflare Pages and D1",
          url: "https://blog.deanlofts.xyz/guides/astro-cloudflare/",
          description: "Guide to shipping Astro on Cloudflare Pages with D1."
        }
      ]
    },
    {
      name: "AWS",
      description:
        "My main cloud for hosting, scaling, storage, and data. I use it to run apps, queues, and automation at scale.",
      citation: {
        title: "What is AWS?",
        url: "https://aws.amazon.com/what-is-aws/"
      },
      related_work: [
        {
          title:
            "Loftwah's Guide to Managing Terraform for AWS ECS Fargate Deployments with HTTPS",
          url: "https://blog.deanlofts.xyz/guides/managing-terraform-ecs/",
          description: "My process for deploying to ECS with Terraform and HTTPS."
        }
      ]
    },
    {
      name: "DevOps",
      description:
        "Build, test, ship, and observe. I automate releases and keep systems reliable so teams can move faster.",
      citation: {
        title: "What is DevOps?",
        url: "https://aws.amazon.com/devops/what-is-devops/"
      },
      related_work: [
        {
          title:
            "Deploying FastAPI with UV, Nginx, and AWS ECS: A Step-by-Step Guide",
          url: "https://blog.deanlofts.xyz/guides/uv-fastapi-ecs/",
          description: "Deploying Python apps on AWS with a clean pipeline."
        }
      ]
    },
    {
      name: "Docker",
      description:
        "Portable containers so apps run the same everywhere. My default for local dev and production services.",
      citation: {
        title: "What is Docker?",
        url: "https://www.docker.com/what-is-docker/"
      },
      related_work: [
        {
          title:
            "Mastering UV with Python and Docker: A Comprehensive Guide to Modern Python Development",
          url: "https://blog.deanlofts.xyz/guides/uv-python-docker/",
          description: "Modern Python workflow with Docker and UV."
        }
      ]
    },
    {
      name: "GitHub",
      description:
        "Code, issues, pull requests, and automation with Actions. Home base for my open source work.",
      citation: {
        title: "About GitHub",
        url: "https://github.com/about"
      },
      related_work: [
        {
          title: "My GitHub profile",
          url: "https://github.com/loftwah",
          description: "All my repos in one place."
        }
      ]
    },
    {
      name: "Linux",
      description:
        "Daily driver for development and servers. Stable, secure, and customizable.",
      citation: {
        title: "What is Linux?",
        url: "https://www.linux.org/pages/what-is-linux/"
      },
      related_work: [
        {
          title: "Linux for Pirates!",
          url: "https://loftwah.github.io/linux-for-pirates/",
          description: "A fun way to learn Linux basics and beyond."
        }
      ]
    },
    {
      name: "Postgres",
      description:
        "Solid relational database with great performance and features. My default choice for app data.",
      citation: {
        title: "About PostgreSQL",
        url: "https://www.postgresql.org/about/"
      }
    },
    {
      name: "Python (uv)",
      description:
        "Python for scripts and backends. UV is a fast package manager that speeds up installs and builds.",
      citation: {
        title: "uv: Python Package Management",
        url: "https://astral.sh/uv"
      },
      related_work: [
        {
          title:
            "Deploying FastAPI with UV, Nginx, and AWS ECS: A Step-by-Step Guide",
          url: "https://blog.deanlofts.xyz/guides/uv-fastapi-ecs/",
          description: "Using UV to speed up Python deployments."
        }
      ]
    },
    {
      name: "Ruby on Rails",
      description:
        "Framework that lets me build features fast. Strong conventions and a clean ecosystem.",
      citation: {
        title: "Ruby on Rails: A Web Framework",
        url: "https://rubyonrails.org/"
      },
      related_work: [
        {
          title: "Linux for Pirates! 2 Ruby on Whales",
          url: "https://linuxforpirates.deanlofts.xyz/ruby-on-whales/",
          description: "Running Rails with Docker in a simple setup."
        }
      ]
    },
    {
      name: "Terraform",
      description:
        "Infrastructure as code so cloud resources live in version control and are easy to repeat.",
      citation: {
        title: "Introduction to Terraform",
        url: "https://www.terraform.io/intro"
      },
      related_work: [
        {
          title:
            "A demo repo of using UV and FastAPI with Docker on AWS ECS",
          url: "https://github.com/loftwah/uv-fastapi-ecs",
          description: "Example Terraform for a FastAPI app on AWS."
        }
      ]
    },
    {
      name: "TypeScript",
      description:
        "JavaScript with types. Safer refactors and better tooling for bigger projects.",
      citation: {
        title: "TypeScript: JavaScript with Syntax for Types",
        url: "https://www.typescriptlang.org/"
      },
      related_work: [
        {
          title:
            "🏴‍☠️ Buccaneer's Training Manual: TypeScript & Bun Exercises",
          url: "https://blog.deanlofts.xyz/guides/typescript-exercises/",
          description: "Hands on TypeScript practice using Bun."
        }
      ]
    }
  ],
  isPublic: true,
  showInDirectory: true,
  socialLinks: [
    { platform: "github", url: "https://github.com/loftwah" },
    { platform: "x-twitter", url: "https://twitter.com/loftwah" },
    { platform: "bluesky", url: "https://bsky.app/profile/loftwah.bsky.social" },
    { platform: "linkedin", url: "https://linkedin.com/in/deanlofts" }
  ],
  links: [
    {
      id: "blog",
      title: "My Blog",
      description: "Posts, guides, and notes on what I am building.",
      url: "https://blog.deanlofts.xyz",
      icon: "fa-solid fa-blog"
    },
    {
      id: "lfp",
      title: "Linux for Pirates! 1 & 2",
      description: "Home of Linux for Pirates and Ruby on Whales.",
      url: "https://linuxforpirates.deanlofts.xyz",
      icon: "fa-solid fa-terminal"
    },
    {
      id: "techdeck",
      title: "TechDeck",
      description:
        "AI generated trading cards for tech profiles with stats and moves.",
      url: "https://techdeck.life",
      icon: "fa-solid fa-id-card"
    },
    {
      id: "downscope",
      title: "Downscope",
      description:
        "A short story about a chaotic couple of days at a SaaS company.",
      url: "https://downscope.deanlofts.xyz",
      icon: "fa-solid fa-book"
    },
    {
      id: "beats",
      title: "Loftwah The Beatsmiff Beats",
      description: "A big playlist of beats I have made over the years.",
      url: "https://www.youtube.com/playlist?list=PLKBAUoCO_FtlACntcZqTOD4hckJ8IAWZ3",
      icon: "fa-solid fa-music"
    },
    {
      id: "produced",
      title: "Produced by Loftwah The Beatsmiff",
      description: "Music I produced for other artists and projects.",
      url: "https://www.youtube.com/playlist?list=PLKBAUoCO_FtkHiwRzyGzfhauIhNMBFw66",
      icon: "fa-solid fa-music"
    },
    {
      id: "loftwahfm",
      title: "LoftwahFM",
      description:
        "My music hub. Originals, remixes, playlists, and AI experiments in one place.",
      url: "https://fm.loftwah.com",
      icon: "fa-solid fa-headphones"
    },
    {
      id: "grabit",
      title: "GRABIT.SH",
      description:
        "CLI that pulls key info from repos so you can summarise and prompt faster.",
      url: "https://grabit.sh",
      icon: "fa-solid fa-magnifying-glass"
    },
    {
      id: "must-haves",
      title: "Must haves in DevOps and the road to AI",
      description:
        "My running list of tools, practices, and AI ideas for modern DevOps.",
      url: "https://www.makethelist.io/d/devops-must-haves",
      icon: "fa-solid fa-list"
    },
    {
      id: "linux-pirates",
      title: "Linux for Pirates! My daily.dev squad",
      description: "Join the squad and learn Linux together on daily.dev.",
      url: "https://dly.to/3R9tSuu9oHB",
      icon: "fa-solid fa-code"
    },
    {
      id: "bogan-hustler",
      title: "Bogan Hustler",
      description: "Dope Wars reimagined for Straya.",
      url: "https://boganhustler.deanlofts.xyz",
      icon: "fa-solid fa-people-robbery"
    },
    // Hidden links
    {
      id: "cv",
      title: "My CV/Resume",
      description:
        "Full work history, skills, and achievements.",
      url: "https://gist.github.com/loftwah/43d0d27be586ebe2c95df99657121a8b",
      icon: "fa-solid fa-file-alt",
      hidden: true
    },
    {
      id: "wikipedia",
      title: "I'm in Wikipedia lol",
      description:
        "I once ran in a state election in WA. They handled the logistics and I learned a lot. Now I am listed on the candidates page.",
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
        "Quoted in a roundup on the CrowdStrike outage. A moment of internet chaos and memes.",
      date: "19 Jul 2024",
      url: "https://mashable.com/article/crowdstrike-outage-reactions",
      icon: "fa-solid fa-lock",
      showFullDate: false
    },
    {
      id: "terraform",
      title: "HashiCorp Certified: Terraform Associate (003)",
      description:
        "Understands Terraform basics, workflows, and when to choose Enterprise for bigger teams.",
      date: "18 Apr 2024",
      url: "https://www.credly.com/badges/0e437888-1deb-4a2d-8b82-cefb6b87b35d/public_url",
      icon: "fa-solid fa-cloud"
    },
    {
      id: "github-followers",
      title: "Crossed 1K followers on GitHub",
      description: "Hit 1000 followers on GitHub.",
      date: "12 Jul 2023",
      url: "https://github.com/loftwah?tab=achievements",
      icon: "fa-brands fa-github"
    },
    {
      id: "aws-certified",
      title: "AWS Certified Solutions Architect – Professional",
      description:
        "Designs complex systems across services and providers and knows the trade offs that matter.",
      date: "12 Jul 2023",
      url: "https://www.credly.com/badges/c97a35fc-ba6b-427a-b521-19b9ab28cfdb/facebook",
      icon: "fa-brands fa-aws"
    }
  ]
};
