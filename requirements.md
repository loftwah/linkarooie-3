# Linkarooie Project Requirements

## 1. Project Overview

Linkarooie is a Linktree-style application that displays user profiles with links and achievements. It's built as a static site using modern web technologies and hosted on GitHub Pages.

- There should be a home page
- There should be a directory component that is displayed on the homepage
- There should be a nav bar and footer as part of a layout
- There should be a profile page for each user we have a profile for
- We should capture and display analytics for the profile pages using posthog
- I should be able to get to the analytics page for the profile from the profile page
- I should be able to get back to the profile page from the analytics page
- This might not be in the profile example but a user should be able to enable or disable being part of the directory and also having their analytics tracked/displayed
- Must have dark mode and light mode out of the box with a toggle that works

- Must be deployable to GitHub Pages
- Must work with the domain linkarooie.deanlofts.xyz
- Must be completely static (no server-side processing) [Astro]
- Must use Tailwind with only default classes (no custom css)
- Root (`/`): Landing page with directory of profiles
- `/:username`: Individual profile page (e.g., `/loftwah`)
- `/:username/analytics`: Analytics for a specific profile
- All profile data stored in TypeScript files
- No database or dynamic user creation
- A user exists if and only if there is a corresponding data file
- Updates require code changes and redeployment

### Landing Page

- Displays Linkarooie branding/logo
- Shows profile cards for users with `showInDirectory: true` that works on both mobile, desktop and when there is only one user
- Each card shows avatar, name, description, and tags
- Clicking a card navigates to the full profile

### Profile Page

- Banner image (3:1 ratio)
- Avatar image (square displayed as circle using CSS)
- Name and handle
- Description text
- Social media icons (GitHub, Twitter/X, Bluesky, LinkedIn)
- Tags displayed with distinct styling
- Links section with clickable cards
- Achievements section with clickable cards and dates
- Link to analytics page
- Hidden content visible only in browser console

### 4.3 Analytics Page

- Shows analytics for a specific profile
- Displays total page views
- Displays unique visitors
- Displays everything Posthog will allow us to
- Shows browser breakdown
- Shows geographic location breakdown
- Displays link click statistics
- Filters out bots and search engines

### 4.4 Hidden Content Feature

- Links and achievements can be marked with `hidden: true`
- Hidden items do not appear on the profile page
- Hidden items are visible only in the browser console
- Console output is styled with colors and emojis
- Hidden links are tracked in analytics when clicked

## Profile

Not 100% on the imports but this is what I would expect a profile to look like. This is the loftwah profile I want to build around.

```typescript
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
  ogDescription: "Connect with Dean Lofts, a developer, CTO, creator, and tech enthusiast. Explore my projects, content, and social links all in one place.",
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
```

## 6. Analytics Implementation

### 6.1 PostHog Integration

- PostHog account is required
- PostHog environment variables must be configured:
  ```
  POSTHOG_KEY=your-posthog-key
  POSTHOG_HOST=https://us.i.posthog.com
  ```

This is the web snippet from the site:

```
<script>
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_BrmIHTxcm8cDyDjAGkWAimepYqJhSaXiXIVDBeMOHUM', {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    })
</script>
```

https://posthog.com/docs/libraries/astro
https://docs.astro.build/en/guides/deploy/github/
https://tailwindcss.com/docs/dark-mode

Using posthog with astro

### 6.2 Events to Track

- Page views with timestamps
- Unique visitors
- Link clicks (regular and hidden)
- Achievement clicks (regular and hidden)

### 6.3 Properties to Capture

- Browser information
- Geographic location
- Link/achievement ID for click events
- Whether the clicked item was hidden

### 6.4 Bot Filtering

- Must implement logic to filter out bots and search engines

## 7. Visual Design Requirements

### 7.1 Profile Layout

- Banner spans full width at top
- Avatar positioned partially over banner
- Name and handle prominent below avatar
- Description text below name
- Social icons in a row
- Tags in a wrapped row with distinct styling
- Links and achievements as cards with proper spacing
- All styling implemented using default Tailwind CSS classes

### 7.2 Link and Achievement Cards

- Distinct visual styling between links and achievements
- Achievements have date display with configurable format
- Font Awesome icons included on cards
- Hover effects for interactive feedback
- Responsive designs using Tailwind's breakpoint utilities

### 7.3 Console Display for Hidden Content

- Styled console output with colors
- Emojis to distinguish links vs achievements
- Clear message indicating hidden content was found

My env example is here:

POSTHOG_KEY=your-posthog-key
POSTHOG_HOST=https://us.i.posthog.com
BASE_URL=https://linkarooie.deanlofts.xyz

## Open Graph and SEO

If it isn't already mentioned on build we will need a script that dynamically builds open graph images for the users. The main page will need open graph details too but that will be a static image I provide