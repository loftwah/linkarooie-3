import type { Profile, Tag, RelatedWork, Citation } from '../../types';
import avatarImage from '../../assets/images/loftwah_avatar.jpg';
import bannerImage from '../../assets/images/loftwah_banner.jpg';
import ogImage from '../../assets/images/loftwah_og.jpg';

// No interfaces needed - we'll just use the objects directly

export const loftwah: Profile = {
  name: "Dean Lofts",
  username: "loftwah",
  description: "Only the vibe coder remains.",
  avatarUrl: avatarImage,
  bannerUrl: bannerImage,
  ogImageUrl: ogImage,
  ogTitle: "Dean Lofts (Loftwah) - Single Dad and Senior DevOps Engineer",
  ogDescription: "Connect with Dean Lofts, a developer, CTO, creator, and tech enthusiast. Explore my projects, content, and social links all in one place.",
  bio: "Creator of Linkarooie, DevOps Engineer. Hit me up on Twitter/X.",
  tags: [
    {
      name: "AI/ML",
      description: "AI systems mimic human intelligence, while Machine Learning enables computers to learn from data without explicit programming. Together, they power predictive analytics, NLP, and autonomous systems.",
      citation: {
        title: "What is Artificial Intelligence?",
        url: "https://www.ibm.com/topics/artificial-intelligence"
      },
      related_work: [
        {
          title: "Build a Powerful Product Catalog Explorer with LangChain, Ollama, and Gradio",
          url: "https://blog.deanlofts.xyz/blog/rag-product-catalog/",
          description: "A guide on building a product catalog explorer using AI technologies."
        },
        {
          title: "Auto Jira",
          url: "https://github.com/loftwah/auto-jira",
          description: "Automation tool for Jira using AI/ML techniques."
        },
        {
          title: "Unlocking the Power of GGUF Models Locally with Ollama",
          url: "https://blog.deanlofts.xyz/blog/ollama/",
          description: "Tutorial on working with local language models."
        },
        {
          title: "English-Chinese Translator for Markdown",
          url: "https://github.com/loftwah/eng-cn-translate",
          description: "A tool to translate between English and Simplified Chinese for Markdown."
        },
        {
          title: "Fantasy Basketball Tools",
          url: "https://github.com/loftwah/langchain-csv/tree/main/nba",
          description: "Tools for fantasy basketball analysis using language models."
        },
        {
          title: "Hoops Hustler",
          url: "https://github.com/loftwah/hoops-hustler",
          description: "A comprehensive NBA team comparison tool built with real-time stats from the NBA API and AI-generated insights, powered by Streamlit."
        }
      ]
    },
    {
      name: "Astro",
      description: "Astro is an open-source web framework designed for building fast, content-driven websites. It emphasizes performance by defaulting to static site generation, supports modern JavaScript, and allows developers to use their preferred UI frameworks like React or Vue with a minimal client-side runtime.",
      citation: {
        title: "Astro: Build Faster Websites",
        url: "https://astro.build/"
      },
      related_work: [
        {
          title: "Linkarooie",
          url: "https://linkarooie.com/",
          description: "A link sharing platform built with Astro."
        },
        {
          title: "My Blog",
          url: "https://blog.deanlofts.xyz/",
          description: "Personal blog built with Astro framework."
        },
        {
          title: "Building an Astro 5 App with Cloudflare Pages and D1",
          url: "https://blog.deanlofts.xyz/guides/astro-cloudflare/",
          description: "A guide on building an Astro 5 app with Cloudflare Pages and D1."
        }
      ]
    },
    {
      name: "AWS",
      description: "AWS is a comprehensive cloud computing platform offering services like computing power (EC2), storage (S3), databases (RDS), and machine learning tools. It enables scalable, cost-effective infrastructure management for businesses and developers worldwide.",
      citation: {
        title: "What is AWS?",
        url: "https://aws.amazon.com/what-is-aws/"
      },
      related_work: [
        {
          title: "Loftwah's Guide to Managing Terraform for AWS ECS Fargate Deployments with HTTPS",
          url: "https://blog.deanlofts.xyz/guides/managing-terraform-ecs/",
          description: "A comprehensive guide for AWS ECS Fargate deployments using Terraform."
        }
      ]
    },
    {
      name: "DevOps",
      description: "DevOps is a set of practices combining software development (Dev) and IT operations (Ops) to shorten development cycles, increase deployment frequency, and improve collaboration. It leverages automation tools and cultural philosophies like CI/CD to enhance software delivery.",
      citation: {
        title: "What is DevOps?",
        url: "https://aws.amazon.com/devops/what-is-devops/"
      },
      related_work: [
        {
          title: "Deploying FastAPI with UV, Nginx, and AWS ECS: A Step-by-Step Guide",
          url: "https://blog.deanlofts.xyz/guides/uv-fastapi-ecs/",
          description: "A comprehensive guide for deploying FastAPI applications using DevOps practices."
        }
      ]
    },
    {
      name: "Docker",
      description: "Docker is an open-source platform that automates the deployment of applications inside lightweight, portable containers. These containers package code and dependencies together, ensuring consistency across development, testing, and production environments.",
      citation: {
        title: "What is Docker?",
        url: "https://www.docker.com/what-is-docker/"
      },
      related_work: [
        {
          title: "Mastering UV with Python and Docker: A Comprehensive Guide to Modern Python Development",
          url: "https://blog.deanlofts.xyz/guides/uv-python-docker/",
          description: "A guide for Python development with Docker and UV."
        }
      ]
    },
    {
      name: "GitHub",
      description: "GitHub is a platform for version control and collaborative software development using Git. It hosts repositories, facilitates code reviews via pull requests, and provides tools like GitHub Actions for CI/CD automation, serving millions of developers globally.",
      citation: {
        title: "About GitHub",
        url: "https://github.com/about"
      },
      related_work: [
        {
          title: "My GitHub profile",
          url: "https://github.com/loftwah",
          description: "Dean Lofts' GitHub profile with various open source projects."
        }
      ]
    },
    {
      name: "Linux",
      description: "Linux is an open-source, Unix-like operating system kernel that powers a wide range of devices, from servers to smartphones. Known for its stability, security, and flexibility, it's a cornerstone of modern computing and DevOps workflows.",
      citation: {
        title: "What is Linux?",
        url: "https://www.linux.org/pages/what-is-linux/"
      },
      related_work: [
        {
          title: "Linux for Pirates!",
          url: "https://loftwah.github.io/linux-for-pirates/",
          description: "A fun and comprehensive guide to learning Linux."
        }
      ]
    },
    {
      name: "Postgres",
      description: "PostgreSQL is a powerful, open-source relational database management system known for its robustness, extensibility, and standards compliance. It supports advanced data types and is widely used in web applications and data-driven systems.",
      citation: {
        title: "About PostgreSQL",
        url: "https://www.postgresql.org/about/"
      }
    },
    {
      name: "Python (uv)",
      description: "Python is a versatile, high-level programming language known for its readability and extensive libraries. \"uv\" refers to a modern, ultrafast Python package manager and resolver (introduced by Astral in 2024), enhancing dependency management and build performance.",
      citation: {
        title: "uv: Python Package Management",
        url: "https://astral.sh/uv"
      },
      related_work: [
        {
          title: "Deploying FastAPI with UV, Nginx, and AWS ECS: A Step-by-Step Guide",
          url: "https://blog.deanlofts.xyz/guides/uv-fastapi-ecs/",
          description: "A comprehensive guide for deploying Python applications with UV."
        }
      ]
    },
    {
      name: "Ruby on Rails",
      description: "Ruby on Rails (often just \"Rails\") is an open-source web application framework written in Ruby. It follows the MVC (Model-View-Controller) pattern, emphasizing convention over configuration and rapid development for building scalable web apps.",
      citation: {
        title: "Ruby on Rails: A Web Framework",
        url: "https://rubyonrails.org/"
      },
      related_work: [
        {
          title: "Linux for Pirates! 2 Ruby on Whales",
          url: "https://linuxforpirates.deanlofts.xyz/ruby-on-whales/",
          description: "A guide for using Ruby on Rails with Docker."
        }
      ]
    },
    {
      name: "Terraform",
      description: "Terraform is an open-source Infrastructure as Code (IaC) tool by HashiCorp that allows users to define and manage cloud infrastructure using declarative configuration files. It supports multiple providers like AWS, Azure, and Google Cloud.",
      citation: {
        title: "Introduction to Terraform",
        url: "https://www.terraform.io/intro"
      },
      related_work: [
        {
          title: "A demo repo of using UV and FastAPI with Docker on AWS ECS",
          url: "https://github.com/loftwah/uv-fastapi-ecs",
          description: "Repository demonstrating Terraform infrastructure for deploying FastAPI applications."
        }
      ]
    },
    {
      name: "TypeScript",
      description: "TypeScript is an open-source superset of JavaScript that adds static typing to enhance code reliability and scalability. Widely adopted in modern web development, it compiles to plain JavaScript and integrates seamlessly with frameworks like React.",
      citation: {
        title: "TypeScript: JavaScript with Syntax for Types",
        url: "https://www.typescriptlang.org/"
      },
      related_work: [
        {
          title: "🏴‍☠️ Buccaneer's Training Manual: TypeScript & Bun Exercises",
          url: "https://blog.deanlofts.xyz/guides/typescript-exercises/",
          description: "A collection of exercises for learning TypeScript with Bun."
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
      description: "My blog where I write about stuff.",
      url: "https://blog.deanlofts.xyz",
      icon: "fa-solid fa-blog"
    },
    {
      id: "lfp",
      title: "Linux for Pirates! 1 & 2",
      description: "The home of my Linux for Pirates! and Ruby on Whales.",
      url: "https://linuxforpirates.deanlofts.xyz",
      icon: "fa-solid fa-terminal"
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