## React Template 

---

This template includes the basic structure needed to start working with [React](https://reactjs.org/) and [Sass](http://sass-lang.com/) right away. Including a file that will automatically add all the vendor prefixes when your react app runs on any browser. 

This repo used to contain the Redux - Flux structure folder, but said strucure was removed on May 12th, 2019 in order to encourage the use of [React Hooks](https://reactjs.org/docs/hooks-overview.html#state-hook) and [the Context API](https://reactjs.org/docs/context.html), for which you can also read [this article on Hooks](https://scotch.io/tutorials/getting-started-with-react-hooks), this one [on the Context API](https://scotch.io/tutorials/get-to-know-reacts-new-context-api), or watch this talk by Dan Abramov on [both of this changes](https://www.youtube.com/watch?v=dpw9EHDh2bM) included on React 16.8.

When you run "yarn install" it will also install the dependencies for [React Router](https://reacttraining.com/react-router/web/guides/philosophy), and [Lodash](https://lodash.com/).

With this template you can either use CSS, SASS, or SCSS to create the styles for your applications. When you run the "watch-css" command it will compile all the SASS and SCSS files in your project and transpile them to CSS. That's why it is recommended to have an "App.scss" (or "App.css") file within your "styles" folder and import all your styles there, so when you run the "watch-css" command it adds all your transpiled styles to that single file (as it is the file being imported in "Index.js" inside the components directory).

It is recommended, for consistency and to keep an easy to understand structure, that you create a SASS, SCSS, or CSS file for each component in your application and save those files inside "styles/pages".

Finally, this template already includes three files in the "styles/helpers". Those files include all the necessary mixins for "Flexbox", media queries for all screen sizes, and an empty file for variables for you to declare all the global style variables in your project.

### Remember!

Remember to change your git's remote before pushing changes to your project. After you clone this repo, the "origin" remote will be this same repository, so you need to change that to your own project's repository before commiting your changes. To change that you can run the command below in your terminal:

```
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```
