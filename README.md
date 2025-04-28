# Personal Portfolio Site

A minimalist portfolio site with a Hacker News inspired design, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Clean, retro-inspired black and white design
- Responsive layout
- Blog posts section with individual post pages
- Projects showcase
- About page with skills and experience
- Social links

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Architecture**: Domain-driven design

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/personal.git
   cd portfolio-site
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   yarn
   ```

3. Run the development server:
   ```bash
   bun run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── layout/        # Layout components (Header, Footer, etc.)
│   ├── ui/            # Atomic UI components
│   └── sections/      # Section-specific components
├── domain/            # Domain models and logic
│   ├── posts/         # Blog post domain
│   ├── projects/      # Projects domain
│   └── social/        # Social links domain
├── pages/             # Next.js pages/routes
├── styles/            # Global styles and Tailwind config
└── utils/             # Utility functions
```

## Customization

### Personal Information

Update your personal information in the following files:

- `src/components/layout/Header.tsx` - Change site title
- `src/components/layout/Footer.tsx` - Update social links
- `src/pages/about.tsx` - Edit your bio, skills, and experience
- `src/domain/posts` - Add your own blog posts
- `src/domain/projects` - Add your projects

### Styling

This project uses Tailwind CSS. You can customize the theme by editing:

- `tailwind.config.js` - Change colors, fonts, and other theme settings

## Deployment

The easiest way to deploy this site is using Vercel:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Deploy with one click

## License

This project is licensed under the MIT License - see the LICENSE file for details.