# Personal portfolio with github API

## Getting Started

1. Clone the repository:

```
git clone https://github.com/mikeamarkey/portfolio.git
```

2. Install the dependencies:

```
npm install
```

3. Create a `.env` file in directory root and add your github token:

NOTE: This project is currently for private use and NOT production ready.
These .env variables are injected into the browser, so make sure to handle your github key properly before deploying anything!

```
// .env
SNOWPACK_PUBLIC_GITHUB_API_KEY=yourkeyhere
```

4. Start the dev server:

```
npm run start
```
