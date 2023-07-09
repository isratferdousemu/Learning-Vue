import { createStore } from 'vuex';
import products from './modules/products';
import data from './modules/data';
import store from './modules/store';

export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
  modules: {
    products,
    data,
    store
  }
})
