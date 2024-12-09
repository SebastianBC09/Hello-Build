# GitHub Favorites Frontend Test 🚀

Modern React application to manage your GitHub repositories with Auth0 authentication.

## ✨ Features
- 🔐 Auth0 Authentication with GitHub
- 📚 List your GitHub repositories
- 🔍 Search through repositories
- ⭐ Save favorite repositories
- 🎨 Material-UI components
- 📱 Responsive design
- 💾 Persistent storage with Zustand

## 🛠️ Tech Stack
- React + TypeScript
- Material-UI v5
- Auth0 React SDK
- Zustand for state management
- React Router v6
- Axios for API calls

## 🚀 Getting Started
### Prerequisites

- Node.js >= 20
- GitHub account
- Auth0 account

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
├── routes/         # Routes components
├── services/       # API services
├── store/          # Zustand store and slices
├── types/          # TypeScript interfaces
├── main.tsx        # Application entry point
└── main.tsx        # Application entry point
```

## 🔒 Authentication Flow

1. User clicks "Login with GitHub"
2. Auth0 redirects to GitHub OAuth
3. After authorization, redirects to callback URL
4. Access token stored in Zustand store
5. Token used for API requests

## 🎯 Core Features
### Repository Management
- List all user repositories
- Search functionality
- Favorite/unfavorite repositories

### Profile Section
- User information display
- Favorite repositories list

## 🧩 Key Components

### `<RepoCard />`
Display repository information with:
- Repository name and description
- Star count and privacy status
- Primary language
- Favorite toggle

### `<RepositoryList />`
- Handles repository fetching and display
- Loading states
- Error handling
- Empty states

### `<SearchBar />`
- Real-time search functionality
- Debounced search updates
- Integration with Zustand store

## 🔄 State Management

Zustand slices:
- `authSlice`: Authentication state
- `userSlice`: User information
- `favoritesSlice`: Favorite repositories
- `searchSlice`: Search functionality


## 🌐 API Integration

Endpoints used:
- `/api/github/repositories`
- `/api/github/repositories/search`
- `/api/favorites`

## License
This project is licensed under the MIT License.
