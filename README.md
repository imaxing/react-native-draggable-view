# react-native-dragbox

**react-native-dragbox** 是一个基于 **React Native** 的可拖拽组件，支持拖拽范围限制在屏幕内，并支持自定义样式及初始位置。

---

## 📦 安装

通过 npm 或 yarn 安装：

```bash
npm install react-native-dragbox
```

或

```bash
yarn add react-native-dragbox
```

---

## 🚀 使用方法

1. **引入组件**：

```javascript
import DragView from "react-native-dragbox";
```

2. **示例代码**：

```javascript
import React from "react";
import { View, Text } from "react-native";
import DragView from "react-native-dragbox";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <DragView
        width={100}
        height={100}
        zIndex={1000}
        top={50}
        left={50}
        style={{ backgroundColor: "blue", borderRadius: 10 }}
        onDragging={(isDragging) => console.log("Dragging:", isDragging)}
        onLayout={(e) => console.log("Layout:", e.nativeEvent.layout)}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Drag Me</Text>
      </DragView>
    </View>
  );
}
```

---

## 🔧 参数说明

| 参数         | 类型       | 默认值        | 必填 | 描述                                                                |
| ------------ | ---------- | ------------- | ---- | ------------------------------------------------------------------- |
| `width`      | `number`   | -             | ✅   | 组件宽度（单位：像素）。                                            |
| `height`     | `number`   | -             | ✅   | 组件高度（单位：像素）。                                            |
| `zIndex`     | `number`   | `19999999999` | ❌   | 组件的层级，默认为较高的值，确保在页面最上层。                      |
| `top`        | `number`   | `0`           | ❌   | 组件的初始垂直偏移量（单位：像素）。                                |
| `left`       | `number`   | `0`           | ❌   | 组件的初始水平偏移量（单位：像素）。                                |
| `style`      | `object`   | `{}`          | ❌   | 自定义组件样式（支持标准 React Native 样式）。                      |
| `onDragging` | `function` | `undefined`   | ❌   | 拖拽状态回调函数，接收一个布尔值参数，`true` 表示正在拖拽。         |
| `onLayout`   | `function` | `undefined`   | ❌   | `onLayout` 回调函数，返回组件的布局信息（`e.nativeEvent.layout`）。 |

---
