# React + Vite

This is a simple app that uses React to perform basic, unpaginated search queries against Flickr's public API for images.

1. All search logic is run *after* the app navigates to a corresponding search route
2. Added 404 Error (displays under nav and search components rather than as its own entire view)
3. Added loading indicator
4. Added no matches message when no search results are found

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
