<template>
  <div ref="target" class="container">
    <div class="section" :style="{ width: targetWidth + 'px' }">
      <div v-for="(textLine, index) in textLines1" :key="'binary' + index">{{textLine}}</div>
    </div>
    <div class="section" :style="{ width: targetWidth + 'px' }">
      <div v-for="(textLine, index) in textLines2" :key="'normal' + index">{{textLine}}</div>
    </div>
    <div class="section" :style="{ width: targetWidth + 'px' }">
      <div class="pure-css-truncate" :style="{ width: targetWidth + 'px' }">{{this.text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      canvasContext: null,
      targetWidth: 400,
      numLines: 1,
      text: '',
      text1: '',
      text2: '',
      textLines1: [],
      lines1: [],
      count1: 0,
      textLines2: [],
      lines2: [],
      count2: 0,
    };
  },
  mounted() {
    const canvas = document.createElement('canvas');
    this.canvasContext = canvas.getContext('2d');
    const style = window.getComputedStyle(this.$refs.target);
    const font = [
      style['font-weigth'],
      style['font-style'],
      style['font-size'],
      style['font-family'],
    ].join(' ');

    this.canvasContext.font = font;
    /* eslint-disable-next-line */
    const text = `六王毕，四海一；蜀山兀，阿房出。覆压三百余里，隔离天日。骊山北构而西折，直走咸阳。二川溶溶，流入宫墙。五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角。盘盘焉，囷囷焉，蜂房水涡，矗不知其几千万落！长桥卧波，未云何龙？复道行空，不霁何虹？高低冥迷，不知西东。歌台暖响，春光融融；舞殿冷袖，风雨凄凄。一日之内，一宫之间，而气候不齐。
妃嫔媵嫱，王子皇孙，辞楼下殿，辇来于秦，朝歌夜弦，为秦宫人。明星荧荧，开妆镜也；绿云扰扰，梳晓鬟也；渭流涨腻，弃脂水也；烟斜雾横，焚椒兰也。雷霆乍惊，宫车过也；辘辘远听，杳不知其所之也。一肌一容，尽态极妍，缦立远视，而望幸焉；有不见者，三十六年。燕、赵之收藏，韩、魏之经营，齐、楚之精英，几世几年，剽掠其人，倚叠如山。一旦不能有，输来其间。鼎铛玉石，金块珠砾，弃掷逦迤，秦人视之，亦不甚惜。
嗟乎！一人之心，千万人之心也。秦爱纷奢，人亦念其家；奈何取之尽锱铢，用之如泥沙？使负栋之柱，多于南亩之农夫；架梁之椽，多于机上之工女；钉头磷磷，多于在庾之粟粒；瓦缝参差，多于周身之帛缕；直栏横槛，多于九土之城郭；管弦呕哑，多于市人之言语。使天下之人，不敢言而敢怒；独夫之心，日益骄固。戍卒叫，函谷举；楚人一炬，可怜焦土。
呜呼！灭六国者，六国也，非秦也。族秦者，秦也，非天下也。嗟乎！使六国各爱其人，则足以拒秦；使秦复爱六国之人，则递三世可至万世而为君，谁得而族灭也？秦人不暇自哀，而后人哀之；后人哀之而不鉴之，亦使后人而复哀后人也。`;
    /* eslint-disable-next-line */
    // const text = `换种生活，让自己变得快乐，放弃执着，天气就会变得不错，每次走过，都是一次收获，还等什么，做对的选择，过去的，就让它过去吧，别管那是一个玩笑还是谎话，路在脚下，其实并不复杂，只要记得你是你呀，Wu oh oh Wu oh oh，我还是从前那个少年，没有一丝丝改变，时间只不过是考验，种在心中信念丝毫未减，眼前这个少年，还是最初那张脸，面前再多艰险不退却，Say never never give up Like a fighter Wu oh oh，换种生活，让自己变得快乐，放弃执着，天气就会变得不错，每次走过，都是一次收获，还等什么，做对的选择，过去的，就让它过去吧，别管那是一个玩笑还是谎话，路在脚下，其实并不复杂，只要记得你是你呀，Miya miya miya miya miya Call me Miya miya miya miya miya，我还是从前那个少年，没有一丝丝改变，时间只不过是考验，种在心中信念丝毫未减，眼前这个少年，还是最初那张脸，面前再多艰险不退却，Say never never give up Like a fighter，追逐生命里光临身边的每道光，让世界因为你的存在变的闪亮，其实你我他并没有什么不同，只要你愿为希望画出一道想象，成长的路上必然经历很多风雨，相信自己终有属于你的盛举，别因为磨难，停住你的脚步，坚持住，就会拥有属于你的蓝图，Wu oh oh，我还是从前那个少年，没有一丝丝改变，时间只不过是考验，种在心中信念丝毫未减，眼前这个少年，还是最初那张脸，面前再多艰险不退却，Say never never give up Like a fighter`;
    /* eslint-disable-next-line */
    // const text = `Change your life, make yourself happy, give up attachment, and the weather will become good. Every time you pass, it is a harvest. What are you waiting for, make the right choice, the past, let it pass, and leave it alone. Is it a joke or a lie? It’s not complicated at the foot of the road. As long as you remember that you are you, Wu oh oh Wu oh oh, I’m the same boy in the past, without a trace of change. Time is just a test, and I plant a belief in my heart. Undiminished, the young man in front of him is still the original face, no matter how hard and dangerous he is in front of him, Say never never give up Like a fighter Wu oh oh, change your life, make yourself happy, give up persistence, and the weather will change. Not bad, every time I pass, it’s a harvest, what are you waiting for, make the right choice, let it pass, don’t care if it’s a joke or a lie, it’s not complicated, just remember You are you, Miya miya miya miya miya. Call me Miya miya miya miya miya miya. I am still the same boy in the past. Nothing has changed. Time is only a test. The faith in my heart has not diminished. The boy in front of me is still the original one. Open face, no matter how hard and perilous you are in front of you, Say never never give up Like a fighter, chase every light that comes around you in your life, let the world become shining because of your existence, in fact, you and me are no different, as long as you I would like to draw an imagination for hope. There will be a lot of wind and rain on the road of growth. I believe that you will eventually have a grand event that belongs to you. Don’t stop your footsteps because of hardships. Hold on, and you will have your blueprint, Wu oh oh, I am the same boy before, without a trace of change. Time is just a test. The faith in my heart has not diminished. The boy in front of me is still the original face. No matter how difficult and dangerous in front of me, I will never retreat. Say never never give up Like a fighter`;
    this.text1 = text;
    this.text2 = text;
    this.text = text;
    this.truncate('binary');
    this.truncate();
  },
  methods: {
    measureWidth(text) {
      return this.canvasContext.measureText(text).width;
    },
    extractSpecialWords(text) {
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
        // console.log(word, regexp.lastIndex);
      }
      return words;
    },
    truncate(type) {
      let idx = 0;
      let textLine;
      const textLines = [];
      let text = this.extractSpecialWords(this.text);
      while (text.length) {
        idx = type === 'binary' ? this.binarySearch(text) : this.normalSearch(text);
        textLine = text.slice(0, idx);
        text = text.slice(idx);
        textLines.push(textLine.join(''));
      }
      if (type === 'binary') {
        this.textLines1 = textLines;
        this.textLines1.push(this.count1);
      } else {
        this.textLines2 = textLines;
        this.textLines2.push(this.count2);
      }
    },
    binarySearch(textWords) {
      let lower = 0;
      let upper = textWords.length - 1;
      let middle;

      while (lower <= upper) {
        this.count1 += 1;
        middle = Math.floor((lower + upper) / 2);
        const textLine = textWords.slice(0, middle + 1);
        const textLineWidth = this.measureWidth(textLine.join(''));
        const result = textLineWidth - this.targetWidth;
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
    normalSearch(text) {
      for (let i = 1; i < text.length; i += 1) {
        this.count2 += 1;
        const textLine = text.slice(0, i);
        const textLineWidth = this.measureWidth(textLine.join(''));
        const result = textLineWidth - this.targetWidth;
        if (result === 0) {
          return i;
        }
        if (result > 0) {
          return i - 1;
        }
      }

      return text.length;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
}

.section {
  display: inline-flex;
  flex-direction: column;
}

.pure-css-truncate {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 9999;
  -webkit-box-orient: vertical;
}
</style>
