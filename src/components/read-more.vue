<template>
  <div>
    <truncate :rows="!expanded && rows">
      <slot></slot>
      <template #ellipsis>
        <span>...<a class="link" @click="toggle">{{more}}</a></span>
      </template>
    </truncate>
    <span v-show="expanded">
      <a class="link" @click="toggle">{{less}}</a>
    </span>
  </div>
</template>
<script>
import Truncate from './truncate.vue';

export default {
  name: 'VueReadMore',
  components: {
    Truncate,
  },
  props: {
    rows: {
      type: [Number, Boolean],
      default: 3,
    },
    more: {
      type: String,
      default: '展开',
    },
    less: {
      type: String,
      default: '收起',
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    },
  },
};
</script>
<style lang="scss" scoped>
.link {
  border-color: transparent;
  box-shadow: none;
  color: #1890ff;
  cursor: pointer;
  &:active {
    border-color: #096dd9;
    color: #096dd9;
  }
  &:focus, &:hover {
    border-color: #40a9ff;
    color: #40a9ff;
}
}
</style>