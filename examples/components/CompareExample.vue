<template>
  <section class="example container">
    <div class="js-ellipse">
      <slot></slot>
    </div>
    <div class="css-ellipse"></div>
  </section>
</template>
<script>
export default {
  props: {
    content: String,
  },
  computed: {
    text() {
      return this.$slot.default
        ? this.getContent(this.$slot.default)
        : this.text;
    }
  },

}
</script>