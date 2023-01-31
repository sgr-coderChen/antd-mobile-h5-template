import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  fastRefresh: {},
});
