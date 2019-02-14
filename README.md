## React Template

---

This template includes all the basic structure needed to start working with [React](https://reactjs.org/), [Redux](https://redux.js.org/), and [Sass](http://sass-lang.com/) right away.

The "Redux Thunk" middleware and the "Redux Dev Tools" configuration is already setup in the "store.js" file within "src\stores". Also, all the "React Router", Redux "Store" and "Provider" is already setup in the "Index.js" file inside the "Components" folder.

When you run "yarn install" it will also install the dependencies for [Redux Thunk](https://github.com/reduxjs/redux-thunk), [React Router](https://reacttraining.com/react-router/web/guides/philosophy), and [Lodash](https://lodash.com/).

With this template you can either use CSS, SASS, or SCSS to create the styles for your applications. When you run the "watch-css" command it will compile all the SASS and SCSS files in your project and transpile them to CSS. That's why it is recommended to have an "App.scss" (or "App.css") file within your "styles" folder and import all your styles there, so when you run the "watch-css" command it adds all your transpiled styles to that single file (as it is the file being imported in "Index.js" inside the components directory).

It is recommended, for consistency and to keep an easy to understand structure, that you create a SASS, SCSS, or CSS file for each component in your application and save those files inside "styles/pages".

Finally, this template already includes three files in the "styles/helpers". Those files include all the necessary mixins for "Flexbox", media queries for all screen sizes, and an empty file for variables for you to declare all the global style variables in your project.

### Remember!

Remember to change your git's remote before pushing changes to your project. After you clone this repo, the "origin" remote will be this same repository, so you need to change that to your own project repository before commiting your changes. To change that you can run the command below in your terminal:

```
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```