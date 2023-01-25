# Simple Microfrontend with Webpack 5's Module Federation
No state management is present in this example

#### How to run
1. npm install to all microfe and start them
    - host runs on 'http://localhost:3000/'
    - core runs on 'http://localhost:3001/'
2. Core microfe will contain all modules/ components that can be used inside the host microfe
3. To add additional components, navigate to core microfe and add anything you want.
    - To export it, go to webpack.config.js and navigate towards the Module Federation Plugin
    - Find the "expose" key and follow its implementation.
4. To import a module/ component from core microfe
    - Navigate to webpack.config.js inside the host microfe and inside the Federation Plugin
    - Find the "remotes" key and follow its sample implementation.
5. In order to use the module/ component inside the host microfe app, simply import them from the name you put inside the webpack.config.js

##### Note:
1. Everytime you add a module, the app must be restarted.
2. Importing a module can be tricky, just read the webpack.config.js of both microfe and open your mind or just watch a tutorial. (Too tired to explain)
3. To generate another microfe, run "npx create-mf-app" and follow the cli.