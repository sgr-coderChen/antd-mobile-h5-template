import { defineConfig } from 'umi';

export default defineConfig({
  // base: '/template/',
  // publicPath: '/template/',
  define: {
    BASE_URL: 'http://jsonplaceholder.typicode.com',
    __PRO__: true,
  },
});
