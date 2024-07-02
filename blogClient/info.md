# MCC-MERN-BLOG

## Installations

1. Google: tailwindcss with vite for react
[Link to tailwindcss with vite guide](https://tailwindcss.com/docs/guides/vite)

    <!-- $ npm install -D tailwindcss postcss autoprefixer -->
    <!-- $ npx tailwindcss init -p -->

    Install Flowbite React:
    <!--$ npm install flowbite-react -->
    <!--* Flowbite React is an open-source UI component library built on top of Tailwind CSS with React components and based on the Flowbite Design System. -->

    Add the Flowbite React content path and plugin to tailwind.config.js:
    const flowbite = require("flowbite-react/tailwind");

    ```Code Blog
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
    // ...
    flowbite.content(),
    ],
    plugins: [
    // ...
    flowbite.plugin(),
    ],
    };

    Update Tailwind CSS Configuration:
    Make sure your tailwind.config.js file includes the Flowbite plugin correctly. Here is an example configuration:
    
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
    ],
    theme: {
    extend: {},
    },
    plugins: [
    require('flowbite/plugin')
    ],
    };
    
    Ensure that your main CSS file (e.g., src/index.css) includes the Flowbite CSS:
    
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @import 'flowbite';
    ```

    <!--$ npm install tailwind-scrollbar -->
    <!--$ npm i react-router-dom -->
    <!--$ npm install react-redux -->
    <!--$ npm install @reduxjs/toolkit -->
    <!--$ npm i firebase -->
    <!--$ npm i mongoose -->
    <!--$ npm install react-circular-progressbar -->


2. VS CODE Extentions:
    ES+7
    Multiple cursor case preserve
    Tailwind CSS IntelliSense
    Tailwind Fold (toggle: "Control-Option-A")

3. GitHub
    git init
    git add .
    git commit -m "...."
    git remote add origin https://github.com/mcc1461/mcc-mern-blog.git
    git branch -M main
    git push -u origin main

4. Routes
    BrowserRouter-Routes-Route from react-router-dom 
