import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store=new Vuex.Store({
  state:{
    isInfoShow:false,
  },
  mutations:{
    updateInfoShow(state){
      state.isInfoShow=!state.isInfoShow;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
