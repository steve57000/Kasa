const production = {
  url: 'https://steve57000.github.io/kasa',
};
const development = {
  url: 'http://localhost:3000',
};
export const config =
  process.env.NODE_ENV === 'development' ? development : production;
