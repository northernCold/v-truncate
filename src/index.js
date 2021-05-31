  
import { Truncate, ReadMore } from './components/index.js'
// import Truncate from './components/truncate.vue';

console.log(Truncate);
// export default Truncate;
const install = (Vue) => {
  Vue.component(Truncate.name, Truncate)
  Vue.component(ReadMore.name, ReadMore)
}

export {
  Truncate,
  ReadMore
}

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export default {
  install,
}