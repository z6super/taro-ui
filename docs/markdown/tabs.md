# Tabs 标签页

---
Tabs 标签页

以下文档指示例子，请根据具体组件编写

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import AtTabs,AtTabsPane from 'taro-ui'
```

:::

## 一般用法

:::demo

```html
<AtTabs
  current={this.state.current}
  tabList={[{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]}
  onClick={val => this.setState({current:val})}>
  <AtTabsPane>
    <View className='tab-content'>标签页一的内容</View>
  </AtTabsPane>
  <AtTabsPane>
    <View className='tab-content'>标签页二的内容</View>
  </AtTabsPane>
  <AtTabsPane>
    <View className='tab-content'>标签页三的内容</View>
  </AtTabsPane>
</AtTabs>
```

## 禁止内容切换动画

:::demo

```html
<AtTabs
  current={this.state.current}
  tabList={[{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]}
  onClick={val => this.setState({current:val})}>
</AtTabs>
{current === 0
  ？ <AtTabsPane>
    <View className='tab-content'>标签页一的内容</View>
  </AtTabsPane>
  : null
}
{current === 1
  ？ <AtTabsPane>
    <View className='tab-content'>标签页二的内容</View>
  </AtTabsPane>
  : null
}
{current === 2
  ？ <AtTabsPane>
    <View className='tab-content'>标签页三的内容</View>
  </AtTabsPane>
  : null
}
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| current | 当前选中的`tab`索引值，从0计数  | Number  | - | 0 |
| scroll     | 是否横向滚动  | Boolean | - | false |
| swipeable  | 是否支持手势滑动切换内容页  | Boolean | - | true |
| tabList | tab 列表 | Array  | - | - |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClick | 点击或滑动时触发事件 | 选中tab列表索引值  |