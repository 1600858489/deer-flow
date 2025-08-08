# 📚 Courseware Agent Web UI

This is the web UI for [`Courseware Agent`](https://github.com/bytedance/deer-flow).

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Links

- [`Courseware Agent`](https://github.com/bytedance/deer-flow)

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **State Management**: [Zustand](https://zustand.docs.pmnd.rs/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Markdown**: [React Markdown](https://www.npmjs.com/package/react-markdown)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## Package Manager

Courseware Agent Web UI uses `pnpm` as its package manager.

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Run type checking
pnpm typecheck
```

## Environment Variables

Create a `.env.local` file in the web directory with the following variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000

# Analytics (Optional)
NEXT_PUBLIC_AMPLITUDE_API_KEY=your_amplitude_api_key

# GitHub (Optional)
NEXT_PUBLIC_GITHUB_OAUTH_TOKEN=your_github_oauth_token
```

## Project Structure

```
web/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable components
│   ├── core/               # Core business logic
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── styles/             # Global styles
│   └── typings/            # TypeScript type definitions
├── public/                 # Static assets
├── messages/               # Internationalization files
└── docs/                   # Documentation
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## Acknowledgments

Courseware Agent is built upon the foundation of these outstanding projects:

### Core Frameworks
- **[LangChain](https://github.com/langchain-ai/langchain)**: A phenomenal framework that powers our LLM interactions and chains.
- **[LangGraph](https://github.com/langchain-ai/langgraph)**: Enabling sophisticated multi-agent orchestration.
- **[Next.js](https://nextjs.org/)**: A cutting-edge framework for building web applications.

### UI Libraries
- **[Shadcn](https://ui.shadcn.com/)**: Minimalistic components that power our UI.
- **[Zustand](https://zustand.docs.pmnd.rs/)**: A stunning state management library.
- **[Framer Motion](https://www.framer.com/motion/)**: An amazing animation library.
- **[React Markdown](https://www.npmjs.com/package/react-markdown)**: Exceptional markdown rendering with customizability.
- **[SToneX](https://github.com/stonexer)**: For his invaluable contribution to token-by-token visual effects.

These outstanding projects form the backbone of Courseware Agent and exemplify the transformative power of open source collaboration.
