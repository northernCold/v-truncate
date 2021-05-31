# v-truncate

主要处理若干行(单行或者多行)文本省略情况的组件
## 安装

```bash
npm i v-truncate -S
```
## 使用

### 全局注册

```javascript
import VTruncate from "v-truncate";

Vue.use(VTruncate);
```

```html
<template>
  <truncate :rows="3">
    这几天心里颇不宁静。今晚在院子里坐着乘凉，忽然想起日日走过的荷塘，在这满月的光里，总该另有一番样子吧。月亮渐渐地升高了，墙外马路上孩子们的欢笑，已经听不见了;妻在屋里拍着闰儿，迷迷糊糊地哼着眠歌。我悄悄地披了大衫，带上门出去。
  </truncate>
</template>
<script>
```

```html
<template>
  <read-more :rows="3">
    <span>这几天心里颇不宁静。今晚在院子里坐着乘凉，忽然想起日日走过的荷塘，在这满月的光里，总该另有一番样子吧。月亮渐渐地升高了，墙外马路上孩子们的欢笑，已经听不见了;妻在屋里拍着闰儿，迷迷糊糊地哼着眠歌。我悄悄地披了大衫，带上门出去。</span>
  </read-more>
</template>
```

### 按需加载

```html
<template>
  <div>
    <truncate :rows="3">
      这几天心里颇不宁静。今晚在院子里坐着乘凉，忽然想起日日走过的荷塘，在这满月的光里，总该另有一番样子吧。月亮渐渐地升高了，墙外马路上孩子们的欢笑，已经听不见了;妻在屋里拍着闰儿，迷迷糊糊地哼着眠歌。我悄悄地披了大衫，带上门出去。
    </truncate>
    <read-more :rows="3">
      <span>这几天心里颇不宁静。今晚在院子里坐着乘凉，忽然想起日日走过的荷塘，在这满月的光里，总该另有一番样子吧。月亮渐渐地升高了，墙外马路上孩子们的欢笑，已经听不见了;妻在屋里拍着闰儿，迷迷糊糊地哼着眠歌。我悄悄地披了大衫，带上门出去。</span>
    </read-more>
  </div>
</template>
<script>
import { Truncate, ReadMore } from "v-truncate";

export default {
  components: {
    Truncate,
    ReadMore
  }  
}
</script>
```

## Options

> 可参考的例子: examples/examples/..
### Truncate 组件

> 文本截断组件。主要作用为若干行文本省略

|   参数   |   说明   |   类型   |   默认值   |
| ---- | ---- | ---- | ---- |
|   ellipsis   |   文本省略符号   |   String   |   "..."   |
|   content   |   内容   |   String   |   ''   |
|   width   |   宽度   |   Number   |   0   |
|   rows   |   行数。最多显示多少行，超过的部分省略   |   Number|Boolean   |   Infinity   |

Slots

|   name   |   说明   |
| ---- | ---- |
|   -   |   自定义的文本内容   |
### ReadMore 组件

> 该组件为Truncate组件的扩展组件。相对于Truncate具备了展开、收起功能

|   参数   |   说明   |   类型   |   默认值   |
| ---- | ---- | ---- | ---- |
|   less   |   文本省略时，显示的内容   |   String   |   '展开'   |
|   more   |   文本展开后，显示的内容   |   String   |   '收起'   |
|   rows   |   行数。最多显示多少行，超过的部分省略   |   Number|Boolean   |   3   |

Slots

|   name   |   说明   |
| ---- | ---- |
|   -   |   自定义的文本内容   |
## 开发

```bash
npm i # 安装依赖
npm run dev # 启动开发服务
```
## 构建

```bash
npm i # 安装依赖
npm run build # 构建npm包
```