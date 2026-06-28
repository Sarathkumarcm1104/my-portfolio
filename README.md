# Sarath Kumar — Portfolio

Personal portfolio site for **Sarath Kumar C**, Backend / API Engineer.

Built with React (Create React App), styled with vanilla CSS using design tokens (custom properties). Live at: [sarathkumarcm1104.github.io/my-portfolio](https://sarathkumarcm1104.github.io/my-portfolio/)

## Stack
- React 18
- Create React App (`react-scripts` 5)
- Vanilla CSS with CSS variables for theming
- Font Awesome 6 (icons), Inter (typography)
- IntersectionObserver for scroll-triggered animations and active-section highlighting

## Local development

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production build to /build
npm run deploy   # publish to GitHub Pages (gh-pages branch)
```

## Project layout

```
public/                  Static assets served as-is (favicon, index.html, etc.)
src/
├── App.js               Top-level layout
├── index.js             React entry
├── components/          Section components — one per portfolio section
│   ├── Header.js / .css Sticky nav with active-section indicator + mobile drawer
│   ├── Hero.js / .css   First-fold greeting + stats + avatar
│   ├── About.js / .css  Bio + quick-facts sidebar + education/tools/interests cards
│   ├── Skills.js / .css Categorized skill bars with icons
│   ├── Projects.js / .css Card grid with client / personal badges
│   ├── Contact.js / .css Contact form + social links
│   └── Footer.js
├── data/                Source-of-truth content (profile, skills, projects)
└── styles/              Global styles + CSS variable definitions
```

## Deployment

The `npm run deploy` script publishes the production build to the
`gh-pages` branch via the `gh-pages` package. After the first push, enable
GitHub Pages in the repo settings (Settings → Pages → Source: `gh-pages` branch).

## Resume

See [`RESUME.md`](./RESUME.md) for the ATS-friendly markdown source of my resume.