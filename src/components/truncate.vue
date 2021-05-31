<script>
export default {
  name: 'VueTruncate',
  props: {
    ellipsis: {
      type: String,
      default: '...',
    },
    content: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 0,
    },
    rows: {
      type: [Number, Boolean],
      default: Infinity,
    },
  },
  watch: {
    rows() {
      this.lines = this.getLines();
    },
  },
  mounted() {
    const canvas = document.createElement('canvas');
    this.canvasContext = canvas.getContext('2d');
    this.calcTargetWidth();
    this.lines = this.getLines();
  },
  computed: {
    text() {
      return this.$slots.default ? this.getContent(this.$slots.default) : this.content;
    },
  },
  data() {
    return {
      canvasContext: null,
      target: null,
      style: {
        ellipsis: {
          position: 'fixed',
          visibility: 'hidden',
          top: 0,
          left: 0,
        },
      },
      targetWidth: 0,
      lines: [],
    };
  },
  methods: {
    calcTargetWidth() {
      const {
        canvasContext,
      } = this;

      this.targetWidth = this.width
        || Math.floor(this.$refs.target.parentNode.getBoundingClientRect().width);
      const style = window.getComputedStyle(this.$refs.target);
      const font = [
        style['font-weigth'],
        style['font-style'],
        style['font-size'],
        style['font-family'],
      ].join(' ');

      canvasContext.font = font;
    },
    getContent(vnodes) {
      let ret = '';
      if (Array.isArray(vnodes)) {
        ret = (function traverse(nodes) {
          if (!nodes) return '';
          return nodes.reduce(
            (prev, next) => prev + (next.text || '') + traverse(next.children),
            '',
          );
        }(vnodes));
      } else {
        ret = vnodes.text;
      }
      return ret;
    },
    measureWidth(text) {
      return this.canvasContext.measureText(text).width;
    },
    extractWords(text) {
      let rest = text;
      const words = [];
      const regexp = /[a-zA-Z]+/g;
      let word;
      while (true) {
        word = regexp.exec(rest);
        if (word === null) {
          if (rest.length !== 0) {
            words.push(...rest.split(''));
          }
          break;
        }
        const wordLength = word[0].length;
        const { index } = word;
        words.push(...rest.slice(0, index).split(''));
        words.push(rest.slice(index, index + wordLength));
        regexp.lastIndex = 0;
        rest = rest.slice(index + wordLength);
      }
      return words;
    },
    ellipsisWidth(node) {
      return node.offsetWidth;
    },
    getLines() {
      const ellipsisWidth = this.ellipsisWidth(this.$refs.ellipsis);
      const lines = [];
      let idx = 0;
      let words = this.extractWords(this.text);
      let i = 0;
      while (words.length) {
        i += 1;
        if (i === this.rows) {
          idx = this.binarySearch(
            words,
            (textLineWidth) => textLineWidth + ellipsisWidth - this.targetWidth,
          );
        } else {
          idx = this.binarySearch(
            words,
            (textLineWidth) => textLineWidth - this.targetWidth,
          );
        }
        if (idx === 0) break;
        lines.push(
          i === this.rows
            ? (<span>{words.slice(0, idx)}{this.$scopedSlots.ellipsis ? this.$scopedSlots.ellipsis() : this.ellipsis}</span>)
            : words.slice(0, idx),
        );
        words = words.slice(idx);
      }

      return lines;
    },
    binarySearch(textWords, condition) {
      let lower = 0;
      let upper = textWords.length - 1;
      let middle;

      while (lower <= upper) {
        middle = Math.floor((lower + upper) / 2);
        const textLine = textWords.slice(0, middle + 1);
        const textLineWidth = this.measureWidth(textLine.join('').trim());
        const result = condition(textLineWidth);
        if (result === 0) {
          return middle + 1;
        } if (result < 0) {
          lower = middle + 1;
        } else {
          upper = middle - 1;
        }
      }
      return lower;
    },
  },
  render() {
    const {
      width,
      lines,
      ellipsis,
      rows,
      style,
      $scopedSlots: {
        ellipsis: ellipsisSlot,
      },
    } = this;
    return (
      <div ref="target" class="truncate" style={{ width: (width === 0 ? '100%' : (`${width}px`)) }}>
        <div ref="text">
          {
            rows !== false && rows > 0
              ? lines.slice(0, rows).map((row) => <div>{row}</div>)
              : lines.map((row) => <div>{row}</div>)
          }
        </div>
        <span ref="ellipsis" style={style.ellipsis}>{ ellipsisSlot ? ellipsisSlot() : ellipsis}</span>
      </div>
    );
  },
};
</script>
