const production = {
  url: 'https://steve57000.github.io/home',
};
const development = {
  url: 'http://localhost:3000/home',
};
export const config =
  process.env.NODE_ENV === 'development' ? development : production;
