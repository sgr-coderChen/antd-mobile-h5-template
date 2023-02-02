# 基于 Umi 3.x 使用 antd-mobile v5 的 H5 模板

### 使用的技术

- ts + react + react hook
- [umi 文档](https://v3.umijs.org/zh-CN/docs/getting-started)
- [antd-mobile-v5](https://mobile.ant.design/zh/components/icon)

### 运行步骤

1. yarn
2. yarn start

### redux 采用 ducks 模式

因为每个 redux 的模块都是按照功能性去划分，而且每次添加`actionTypes`、`actions`、`reducer`这样的组合。

按照不同文件的方式拆分，甚至拆分到不同的文件夹，绝大部分情况下，只有极少部分情况下 reducer/actions 会用到对应的 actions，所以将某一模块功能的代码封装于一个文件中会更加的方便。
当然这样的模式一定是要有明确的模块功能划分，以及命名规范，让 `store` 可更容易的抽离。

例子 🌰

```javascript
export const moduleName = 'redux-example';
export const reducerName = 'counter';

// action types
const INCREMENT = `${moduleName}/${reducerName}/INCREMENT`;

// init state
const initialState = {
  count: 0,
};

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      const { count } = state;
      return {
        count: count + 1,
      };
    default:
      return state;
  }
}

// action creators
export function increment(payload) {
  return { type: INCREMENT, payload };
}
```
