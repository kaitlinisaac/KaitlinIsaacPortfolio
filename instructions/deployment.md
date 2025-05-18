# Deployment Process

This document outlines the process for deploying updates to the website.

## Deployment Workflow

The website is deployed using Netlify (or your preferred hosting service) with continuous deployment from the GitHub repository.

## Local Development

1. Install dependencies (first time only):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Preview the site at `http://localhost:4321` (or the port shown in your terminal)

4. Make your changes to the website files

## Building for Production

To build the site for production:

```bash
npm run build
```

This creates a `dist` directory with the built site.

To preview the production build locally:

```bash
npm run preview
```

## Deployment Process

### Automatic Deployment

1. Commit your changes to the repository:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

2. Push to the main branch:
   ```bash
   git push origin main
   ```

3. The site will automatically deploy through the connected CI/CD pipeline on Netlify (or your hosting service)

### Manual Deployment

If needed, you can manually deploy the site:

1. Build the site for production:
   ```bash
   npm run build
   ```

2. Deploy using Netlify CLI (if using Netlify):
   ```bash
   npx netlify deploy --prod
   ```

## Troubleshooting Deployments

If deployment fails:

1. Check the build logs in your hosting service dashboard
2. Ensure all dependencies are properly installed
3. Verify that there are no build errors in the local environment
4. Look for any specific error messages in the deployment logs

## Rollback Process

If needed, you can roll back to a previous version:

1. In Netlify dashboard, go to "Deploys"
2. Find the previous working deploy
3. Click "Publish deploy" to roll back to that version 