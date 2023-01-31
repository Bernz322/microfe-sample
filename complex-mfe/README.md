# Complex example of Microfrontend

The following technologies and concept are used for this example:

- React Router
- Complex MFE integration
- Centralized State with Redux Toolkit

#### Known Issues:

1. If a core component that requires certain props is imported to another microfe and consumed, it will not return an error if the required props are not provided.
   - Can be probably fixed by importing the interface of that component from its core component.

#### Components

The ff. are the core components available for this example:
Priorities:

- CircularProgress2 - Done, testing & documentation to follow
- TextAvatar - Done, testing & documentation to follow
- SearchableSelect - Not yet started

- Appbar - Not the MUI's component
- Header - Not the MUI's component
- Content Wrapper/ Container - Done
- Text field/ input field - Done
- Button - Done
- Modal
- Checkbox
- Typography - Done
- Grid - Done
- React Router - TBD
- Styled MUI - TBD
- Theme MUI - TBD

Ports:

- host: http://localhost:3000
- login: http://localhost:3001
- dashboard: http://localhost:3002
- pending transactions - http://localhost:3003
- core: http://localhost:4000
- store: http://localhost:5000

#### How to run

1. npm install to root and all microfe
   - npm start in the root directory to run all of them (it uses concurrently)
2. Reducers or Slices must be created to their own MFE and imported to the store MFE.
3. Core microfe will contain all modules/ components that can be used inside the host microfe
4. To add additional components, navigate to core microfe and add anything you want.
   - To export it, go to webpack.config.js and navigate towards the Module Federation Plugin
   - Find the "expose" key and follow its implementation.
5. To import a module/ component from core microfe
   - Navigate to webpack.config.js inside the host microfe and inside the Federation Plugin
   - Find the "remotes" key and follow its sample implementation.
6. In order to use the module/ component inside the host microfe app, simply import them from the name you put inside the webpack.config.js

##### Note:

1. Everytime you add a module, the app must be restarted.
2. Importing a module can be tricky, just read the webpack.config.js of both microfe and open your mind or just watch a tutorial. (Too tired to explain)
3. To generate another microfe, run "npx create-mf-app" and follow the cli.
4. No linting yet, will be added soon.
