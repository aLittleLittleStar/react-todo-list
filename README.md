### Redux

1. store 是唯一的
2. 只有 store 能够改变自己的内容
3. reducer 必须为一个纯函数： 给定固定的输入，就一定会有固定的输出，而且不会有任何副作用。

#### API

1. createStore 创建 store
2. store.dispatch 派发 action 传递给 store
3. store.getState 获取 store 里面所有的数据
4. store.subscribe 订阅 store 里面数据的变化，只要数据发生变化 subscribe 里面的回调函数就会触发

#### UI 组件 与 容器组件的拆分
