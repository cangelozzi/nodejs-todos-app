# Node & Typescript TODO App

The project goal was to create a basic (but totally functional) TODOS app based on NodeJS / ExpressJS; the additional challenge was to include Typescript in order to have more control and a concrete check while developing the coding structure.
Typescript forces the control over variours @types and also check on various Request and Response.
View engine has been handled by Express-Handlrebars, and various scripts have been created in package.json in order to organize the various restart with Nodemon, the Typescript Compile with tsc, and also the creation of folder for development and production.

============================================

# To enjoy the application

### Development Environment

- cloning the repository
- navigating to the folder
- `npm install` the npm packages
- run command `npx nodemon`

### Production Environment

- cloning the repository
- navigating to the folder
- `npm install` the npm packages
- run build script, `npm run build`
- rund index.js in dist folder, `node dist/index.js`

============================================

## Folder Structure

- `src` folder is for development purposes using Typescript (TS-config, Nodemon-config, TS-Node -> are used to detected changes in TS file and restart automatically the server).
- `dist` folder is created for production; code is compiled to Javascipt, non .ts files moved, and old folder cleared. Various npm packages have been used to achieve the result ('rimraf' for clearing folder not based on OS terminal/bash, 'ncp' for copying folder not affected by Typescript compiling.)

============================================

## DATA Structure

The application does NOT have a Database structure (which canbe easily implemented using MySQL, or MongoDB); all the data is organized in a data object in `data.ts` file.

============================================

## Tools used during development phase:

- NodeJS / ExpressJS
- Typescript
- Express Handlebars
- Bootstrap Cosmo
- Nodemon

## Giving credits for places that helped to do this project

- https://stackoverflow.com/
- https://www.npmjs.com/package/express-handlebars
- https://github.com/remy/nodemon#nodemon
- https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/
- https://alligator.io/workflow/nodemon/
- https://dev.to/oieduardorabelo/nodejs-with-typescript-debug-inside-vscode-and-nodemon-23o7

## Future Improvements

- implement a Database structure using MySQL or MongoDB/Mongoose
- Use of SASS and GULP for style, and minification.
- Using a different template engine in place of HBS (ie. VueJS, ReatJS).
