# Microfrontend with Webpack 5's Module Federation and State Management with Redux Toolkit

#### Summary
1. Not a centralized state to all microfrontend.
    - If a state changes from a single MFE, as long as it has its own StoreProvider then that state will remain on that MFE.
2. Centralized state can be achieved if it has a single StoreProvider wrapped to all MicroFE (a host).
    - An example of this idea is inside the "host" MFE where we are importing the Counter Module/Component and has a single StoreProvider, wherein any changes to the counter state from any of the two MFE will change the global counter state (keyword: Single StoreProvider).
    - However, if we check the 'http://localhost:4000/' (which is the Counter MFE App), the state is not affected from the changes done in 'http://localhost:3000/' proving number 1's point.
3. TLDR: 
    - Single StoreProvider = Centralized State to all MFE. Achieved by having a single host wrapped in a single <StoreProvider> or <Provider>.
    - Multiple StoreProvider = Changes to States will remain on their own StoreProvider and will not affect other MFE's states.

#### How to run
1. npm install to root and all microfe
    - npm start in the root directory to run all of them (it uses concurrently)
    - core runs on 'http://localhost:3001/' = must be ran first as it contains core components
    - counter runs on 'http://localhost:4000/' = must be ran second as it contains reducer
    - store runs on 'http://localhost:3005/' = must be ran before host and after all mfe with reducer has started running
    - host runs on 'http://localhost:3000/' = must be ran last
2. Core microfe will contain all modules/ components that can be used inside the host microfe
3. To add additional components, navigate to core microfe and add anything you want.
    - To export it, go to webpack.config.js and navigate towards the Module Federation Plugin
    - Find the "expose" key and follow its implementation.
4. To import a module/ component from core microfe
    - Navigate to webpack.config.js inside the host microfe and inside the Federation Plugin
    - Find the "remotes" key and follow its sample implementation.
5. In order to use the module/ component inside the host microfe app, simply import them from the name you put inside the webpack.config.js
6. Reducers or Slices must be created to their own MFE and be imported in the store MFE.

##### Note:
1. Everytime you add a module, the app must be restarted.
2. Importing a module can be tricky, just read the webpack.config.js of both microfe and open your mind or just watch a tutorial. (Too tired to explain)
3. To generate another microfe, run "npx create-mf-app" and follow the cli.