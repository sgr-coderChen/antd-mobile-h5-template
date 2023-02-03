import { defineConfig } from 'umi';
import px2vw from 'postcss-px-to-viewport';

export default defineConfig({
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/components/Loading',
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  fastRefresh: {},
  extraPostCSSPlugins: [
    px2vw({
      viewportWidth: 375,
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      // exclude: [/node_modules/], 	// 设置忽略文件 这里默认把antd的组件单位也全部转换掉
    }),
  ],
});
