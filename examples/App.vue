<script>
import { Example } from "./components";
import { Simple, Demo1, Demo2, DynamicContext } from "./examples";

export default {
  render() {
    return (
      <main class="main">
        <Example
          title="基本使用"
          description="文本截断省略">
          <Simple />
        </Example>
        <Example
          title="示例一">
          <Demo1 />
        </Example>
        <Example
          title="示例二">
          <Demo2 />
        </Example>
        <Example
          title="动态内容">
          <DynamicContext />
        </Example>
      </main>
    )
  }
}
</script>