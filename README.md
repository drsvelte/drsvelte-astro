# Astro + Tailwind CSS drsvelte.com Project

![screenshot](https://res.cloudinary.com/shinkirin/image/upload/v1702688981/drsvelte/drseltedev-logo.webp)


## 🚀 Project Structure

Inside of the Astro + Tailwind CSS project are the following folders and files:

```text
/
├── public/
├── .gitignore
├── src/
│   └── pages/
│       └── index.astro
├── astro.config.ms
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more about Astro?

Feel free to check [their documentation](https://docs.astro.build) or visit the Astro community at their [Discord server](https://astro.build/chat).

## Building Tools

Below are the tools used to develop and design this project:

- [Astro](https://astro.build/) framework for front-end development.
- [Tailwind CSS](https://tailwindcss.com) framework for website designs.
- [daisyUI](https://daisyui.com) Tailwind CSS components.
- [Alpine.js](https://alpinejs.dev/) for the dynamic components.
- [PinesUI](https://devdojo.com/pines) Alpine & Tailwind UI library.
- [animista](https://animista.net/) On-Demand CSS Animations Library.
- [heroicons](https://heroicons.com/) SVG icons for Tailwind CSS via [astro-icons](https://github.com/seanmcp/astro-heroicons#readme).
- [Iconify](https://iconify.design) via [Astro Icon](https://github.com/natemoo-re/astro-icon) Inline and sprite-based SVGs.
- [Unsplash](https://unsplash.com) for placeholder photos.
- [Undraw](https://undraw.co) for SVG illustrations.
- [DALL-E](https://openai.com/blog/dall-e/) for image generation.

## DevOps environment

- [Linode](https://linode.com) hosted on [ROCKY-SEA](https://sea.rockyno.de).
     - URL: [https://drsvelte.dev](https://drsvelte.dev).

- [Rocky Linux](https://rockylinux.org) VPS configured with the following [Docker](https://docker.com) containers:
     - [Drupal](https://drupal.org) with [PHP](https://php.net).
     - [MySQL](https://www.mysql.com/products/community/).
     - [Nginx](https://nginx.org) as web server.
     - [Certbot](https://certbot.eff.org/) with [Let's Encrypt](https://letsencrypt.org/getting-started/) for SSL encryption.
- [Vercel](https://vercel.com) Frontend Cloud @ CDN for [teams/drsvelte/](https://vercel.com/teams/drsvelte/).
     - URL: [https://drsvelte.com](https://drsvelte.com).
- [Cloudflare](https://cloudflare.com) - DNS. CDN for Drupal.
- [Cloudinary](https://cloudinary.com) - Image CDN, though Astro's <Image /> component may be used instead.

### Repository

- [GitHub](https://github.com) - [drsvelte](https://github.com/drsvelte/).
     - Repository URL: [drsvelte/drsvelte-astro](https://github.com/drsvelte/drsvelte-astro).

## License

[BSD 3-Clause License](LICENSE).

## Accessibility

All drsvelte projects aim to meet the requirements adhere to meet [WCAG 2.1](https://www.w3.org/TR/WCAG21/) standards based on the following conformance levels:

- A: Web developers must satisfy these requirements, otherwise it will be impossible for one or more groups to access the Web content.
- AA: Web developers should satisfy these requirements, otherwise some groups will find it difficult to access the Web content.
- AAA: Web developers may satisfy these requirements to make it easier for some groups to access the Web content.

All efforts will be carried out to meet full conformation when possible.

## Contributing

- [Kevin Matsunaga](https://kevinmatsunaga.com) - Lead Developer.

# drsvelte-astro
