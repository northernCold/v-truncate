<script>
export default {
  name: "SiteExample",

  props: {
    title: String,
    description: String,
    hideDemo: Boolean,
    mirror: Boolean,
  },
  render() {
    return (
      <div class="example container">
        {!this.hideDemo && !this.mirror && (
          <div class="demo">{this.$slots.default}</div>
        )}

        <div class="content">
          <div class="title">
            {this.$slots.title ? this.$slots.title : this.title}
          </div>

          <div class="description">
            {this.$slots.description ? this.$slots.description : this.description}
          </div>
        </div>

        {!this.hideDemo && this.mirror && (
          <div class="demo">{this.$slots.default}</div>
        )}
      </div>
    );
  },
};
</script>
<style lang="scss" scoped>
.example {
  position: relative;
  display: flex;
  padding-top: 60px;
  padding-bottom: 60px;

  & + & {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 24px;
      width: calc(100% - 48px);
      height: 0;
      border-bottom: 2px dotted rgba(#5aa7a4, 0.4);
    }
  }
}

.demo {
  flex: 3;

  & + .content {
    margin-left: 74px;
  }
}

.content {
  flex: 5;

  & + .demo {
    margin-left: 74px;
  }
}

.title {
  font-size: 30px;
  font-weight: 600;
}

.description {
  margin-top: 18px;
}

.codepen {
  &s {
    display: flex;
    margin-top: 24px;
    height: 360px;
    overflow-x: auto;
  }

  &Iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: rgba(90, 167, 164, 0.2);

    & + & {
      margin-left: 24px;
    }
  }
}
</style>