/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-dotenv'
  ],
  testOptions: {
    files: ['./src/tests/*.test.tsx']
  }
}
