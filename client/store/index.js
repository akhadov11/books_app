import Vue from 'vue'
import Vuex from 'vuex'
import pag from './modules/pag'


Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: {
    pag,
  },
});
