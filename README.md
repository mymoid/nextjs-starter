# Next.js Starter

The purpose of this repository is to wrap our Next.js starters with the libraries we commonly use in our projects. Essentially, we have included a "Hello World" page that includes some components from the `@mymoid/ui-components` library. We've also used the `ThemeProvider` and `ModeSwitcher` components to demonstrate how to incorporate a colour scheme selector into your application.

## Branches

Our repository contains a variety of examples, each with its own set of pre-installed packages, which are organized into separate branches. Below is a list of the available branches:

- [basic](https://github.com/mymoid/nextjs-starter/tree/basic): ESLint, Prettier, Husky, Jest and React Testing Library.
- [semantic-release](https://github.com/mymoid/nextjs-starter/tree/semantic-release): ESLint, Prettier, Husky, Jest, React Testing Library, Commitlint and Semantic Release.


## How to use

Simply run [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example with a command line argument (`-e` or `--example`), specifying the GitHub URL and the starter branch name:

```bash
npx create-next-app -e https://github.com/mymoid/nextjs-starter/tree/<BRANCH_NAME> <DIRECTORY_NAME>
```

## Related

[More Next.js examples](https://github.com/vercel/next.js/tree/canary/examples)