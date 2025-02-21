# meet-flow

A professional React application generated with `create-pro-app`.

## Features

- **Language**: TypeScript
- **Template**: Minimal
- Authentication with protected routes and a login page
- **State Management**: Redux Toolkit with persistence
- API Handler: Axios
- Tailwind CSS for styling
- Custom Font: Roboto
- Shadcn UI components: Button, Input, Card
- Husky for git hooks
- Prettier for code formatting
- ESLint for linting

## Getting Started

1. Install dependencies:

   ```bash
   yarn install
   ```

2. Start the development server:

   ```bash
   yarn dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

- `yarn dev`: Start the development server
- `yarn build`: Build for production
- `yarn preview`: Preview the production build
- `yarn lint`: Run ESLint
- `yarn lint-staged`: Run lint-staged

## Authentication

- A login page is available at `/login`.
- The dashboard is protected and accessible at `/app/dashboard` after login.
  ## Shadcn UI
- Use imported components from `src/components/ui/` in your app.
- Example: `<Button>Click me</Button>`
