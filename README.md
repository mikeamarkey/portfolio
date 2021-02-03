# Portfolio with Github API

## Getting Started

### 1. Clone the repository:

`git clone https://github.com/mikeamarkey/portfolio.git`

### 2. Install the dependencies:

`npm install` OR `yarn`

### 3. Create a `.env` file in directory root and add your github token:

NOTE: This project is currently for private use and **not production ready**.
These .env variables are injected into the browser, so make sure to handle your github key properly before deploying anything!

```
// .env
SNOWPACK_PUBLIC_GITHUB_API_KEY=yourkeyhere
```

### 4. Start the dev server:

`npm run start` OR `yarn start`

## Available scripts

`start`: starts the local dev server

`test`: runs the tests

`lint`: runs the linters

`build`: creates a snowpack build

## Directory structure

```
profile
├── public
└── src
    ├── components
    ├── graphql
    │    ├── apollo.ts       // apollo client
    │    ├── helpers.ts      // helper functions for handling apollo
    │    └── queries.ts      // graphql queries
    ├── tests
    │    ├── apollo.test.tsx // tests using apollo
    │    ├── mocks.ts
    │    └── react.test.tsx  // strictly react tests
    └── types
         ├── api.ts          // types related to api
         └── models.ts       // general types used in app
```
