<template>
  <div>
    <button @click="changeLanguge('zh')">中文</button>
    <button @click="changeLanguge('en')">English</button>
    <read-more :rows="3" :key="timestamp">
      <span>{{content}}</span>
    </read-more>
  </div>
</template>
<script>
import { ReadMore } from "../../src";
const zh = '路上只我一个人，背着手踱着。这一片天地好像是我的;我也像超出了平常的自己，到了另一世界里。我爱热闹，也爱冷静;爱群居，也爱独处。像今晚上，一个人在这苍茫的月下，什么都可以想，什么都可以不想，便觉是个自由的人。白天里一定要做的事，一定要说的话，现在都可不理。这是独处的妙处;我且受用这无边的荷香月色好了。';
export default {
  components: {
    ReadMore,
  },
  data() {
    return {
      content: zh,
      timestamp: Date.now()
    }
  },
  methods: {
    changeLanguge(type) {
      this.content = type === 'zh' ? zh : en;
      this.timestamp = Date.now();
    }
  }
}
</script>