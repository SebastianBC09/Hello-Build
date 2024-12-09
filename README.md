# GitHub Favorites Frontend

A React application that allows users to manage their GitHub repositories and favorites.

## Features

- 🔐 Auth0 Authentication with GitHub
- 📚 List your GitHub repositories
- 🔍 Search through repositories
- ⭐ Save favorite repositories
- 🎨 Material-UI components
- 📱 Responsive design

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- Material-UI (MUI) for UI components
- Zustand for state management
- React Router for navigation
- Auth0 for authentication

## Prerequisites

Before running this project, make sure you have:

- Node.js v18 or higher
- npm or yarn package manager
- Auth0 account with GitHub provider configured
- GitHub OAuth App credentials

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_AUDIENCE=your-auth0-audience
VITE_AUTH0_CALLBACK_URL=http://localhost:5173/callback
VITE_API_URL=http://localhost:8080
```

## Installation

1. Clone the repository
2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
src/
├── auth/           # Auth0 related code
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks
├── pages/          # Page components
├── services/       # API services
├── store/          # Zustand store and slices
├── types/          # TypeScript interfaces
└── main.tsx        # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
