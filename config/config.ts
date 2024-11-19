import { defineConfig } from 'umi';
import px2vw from 'postcss-px-to-viewport';

export default defineConfig({
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/components/loading',
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
      include: [/src/, /node_modules\/antd-mobile/], // 转换 src 和 antd-mobile 的样式
      propList: ['*', '!border*'], // 排除 border 属性的转换
      minPixelValue: 1, // 小于或等于 1px 不进行转换，避免 1px 问题
      selectorBlackList: ['ignore-'], // 排除带有 ignore- 的样式类
    }),
  ],
});
