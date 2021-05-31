<template>
  <div class="home">
    <div style="width: 200px;">
      <truncate :rows="2">
        <div>
          发发发发发发付<p>123123</p>付付付付付<span>sdfadfds</span></div>
        <div>
          发发发发发发付<p>123123</p>付付付付付
          <span>sdfadfds word</span>
        </div>
      </truncate>
      <read-more :rows="2">
        <div>
          发发发发发发付<p>123123</p>付付付付付<span>sdfadfds</span></div>
        <div>
          发发发发发发付<p>123123</p>付付付付付
          <span>sdfadfds word</span>
        </div>
      </read-more>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Truncate from '@/components/truncate.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import ReadMore from '@/components/read-more.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Truncate,
    ReadMore,
  },
};
</script>
