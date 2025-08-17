# Trekking Travels Website

A modern React-based website for trekking and travel experiences, built with Create React App.

## Features

- Responsive design with Bootstrap
- Modern React components
- Travel and trekking focused content
- Mobile-friendly interface

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run deploy`

Deploys the app to GitHub Pages. This command will:
1. Build the production version of your app
2. Deploy it to the `gh-pages` branch
3. Make it available at your GitHub Pages URL

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. To set it up:

### 1. Update the homepage in package.json
Replace `[your-github-username]` in the homepage field with your actual GitHub username:
```json
"homepage": "https://yourusername.github.io/trekking-travels"
```

### 2. Push to GitHub
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 3. Enable GitHub Pages
- Go to your repository on GitHub
- Navigate to Settings > Pages
- Set Source to "Deploy from a branch"
- Select "gh-pages" branch and "/ (root)" folder
- Click Save

### 4. Automatic Deployment
The GitHub Actions workflow will automatically build and deploy your site whenever you push to the main branch.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
