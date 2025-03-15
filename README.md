# 🔗 Linkarooie

G'day! Welcome to **Linkarooie** - my Linktree alternative built with Astro and Tailwind CSS. It's a blazingly fast, fully customisable way to showcase your online presence with your own links and achievements.

![Linkarooie Screenshot](src/assets/images/linkarooie_og.jpg)

## 🚀 Features

- **Profile Showcase**: Display your name, bio, avatar, and social media links
- **Custom Links**: Add your important websites, projects, and resources
- **Achievements**: Show off certifications, milestones, and accomplishments
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Mobile-Friendly**: Fully responsive design for all devices
- **SEO Optimised**: Custom metadata and OG images for better sharing
- **Hidden Treasures**: Secret cheat code Easter eggs for the true diggers (hint: try typing "iddqd" on my profile)

## 🔧 Getting Started

### 1. Fork the Repository

Click the "Fork" button at the top-right of this repository to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/linkarooie-3.git
cd linkarooie-3
```

### 3. Install Dependencies

Using npm:

```bash
npm install
```

Or using Bun (my preference):

```bash
bun install
```

### 4. Customise Your Profile

1. **Create your profile file**:

   - Duplicate `src/data/profiles/loftwah.ts` and rename it to `yourusername.ts`
   - Edit the file with your own information, links and achievements

2. **Add your images**:

   - Place your avatar, banner and OG images in `src/assets/images/`
   - Update the import paths in your profile file

3. **Update the index**:
   - Edit `src/data/index.ts` to import and export your profile

### 5. Local Development

Start the development server:

```bash
npm run dev
# or
bun dev
```

Visit `http://localhost:4321` to see your site in action.

### 6. Deploy to GitHub Pages

#### Set Up GitHub Pages

1. Go to your forked repository on GitHub
2. Navigate to "Settings" > "Pages"
3. Under "Build and deployment" > "Source", select "GitHub Actions"

#### Configure Secrets (Optional)

The workflow uses a few environment variables that you can configure as repository secrets:

1. Go to "Settings" > "Secrets and variables" > "Actions"
2. Add the following secrets if needed:
   - `BASE_URL`: Your site URL (e.g., https://yourusername.github.io/linkarooie-3)
   - `POSTHOG_KEY`: PostHog API key (optional - for analytics)
   - `POSTHOG_HOST`: PostHog host URL (optional - for analytics)

#### Deploy!

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy your site
3. You can also manually trigger a deployment from the "Actions" tab using "workflow_dispatch"

#### Check Your Deployment

After the GitHub Action completes, your site will be live at:
`https://yourusername.github.io/linkarooie-3`

If you want to use a custom domain, you can configure it in the GitHub Pages settings.

## 🛠️ Customisation

### Changing Colors

Edit `tailwind.config.js` to change the primary and accent colors.

### Adding New Features

The codebase is pretty straightforward. Have a geez at:

- `src/components/` for UI components
- `src/layouts/` for page layouts
- `src/pages/` for the main routes
- `src/types/` for TypeScript interfaces

## 🤝 Contributing

Feel free to submit pull requests with improvements or new features! I'm always keen to make Linkarooie better.

## 📝 License

MIT License - feel free to use, modify and share as you please. Attribution is appreciated but not required.

## 👋 Connect with Me

If you've got questions or want to show me what you've built with Linkarooie, give us a shout:

- GitHub: [@loftwah](https://github.com/loftwah)
- Twitter: [@loftwah](https://twitter.com/loftwah)
- LinkedIn: [deanlofts](https://linkedin.com/in/deanlofts)

---

Built with 💚 by [Loftwah](https://github.com/loftwah) - Only the vibe coder remains.
