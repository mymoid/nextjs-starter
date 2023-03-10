# Control Panel

# Table of Contents

- [Introduction](#introduction)
- [Deployed Links](#deployed-links)
- [Technology Stack](#technology-stack)
- [Getting started](#getting-started)
  - [Configuration Setup](#configuration-setup)
  - [Installation](#installation)
  - [Docker](#docker)
- [Run Test](#run-test)
- [CICD](#cicd)
- [Architecture diagram: External](#architecture-diagram-external)
  - [PRODUCTION](#production)
  - [STAGING](#staging)
- [Architecture diagram: Internal](#architecture-diagram-internal)

# Introduction

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

- [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

- The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Deployed Links

| PRO | STA |
| --- | --- |
| URL | URL |

# Technology Stack

- React
- Nextjs

# Getting started

## Configuration Setup

> FILLME: add setup

## Installation

In the project directory:

1. Setup your Node version through `.node-version`:

   ```bash
   n auto || nvm use
   ```

2. Install the dependencies:

   ```bash
   npm i
   ```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker

1.  Builds the app for production to the `build` folder It correctly bundles
    React in production mode and optimizes the build for the best performance.

    ```bash
    npm run build
    ```

2.  Build the imagen docker with:

    ```bash
    docker build -t fillme:local .
    ```

3.  Run docker

    ```bash
    docker run -p 3000:3000 fillme:local
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Run Test

```bash
npm run test
```

# CICD

> FILLME: Add a short explanation about CICD

# Architecture diagram: External

### PRODUCTION

> FILLME: Setup a diagram

### STAGING

> FILLME: Setup a diagram

# Architecture diagram: Internal

> FILLME: Setup a diagram

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
