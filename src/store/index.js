import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    AUTHORISATED: true
  },
  mutations: {
    SET_USER_TO_STORE: (state, userName) =>{
      state.userName = userName
    },
    CHANGE_AUTHORISATED_FLAG: (state) => {
      state.AUTHORISATED = !state.AUTHORISATED;
    },
    CLEAR_DATA: (state) => {
      state.userName = ''
    }
  },
  actions: {
    GET_USER({commit}, url){
      return axios(url, {
        method:'GET'
      })
        .then((response) => {
          console.log(response)
          if(response.data[0] == null){
            console.log('ERRR')
          }
          else{
            commit('SET_USER_TO_STORE', response.data[0].login)
            commit('CHANGE_AUTHORISATED_FLAG')
            window.localStorage.setItem('userLogin', response.data[0].login)
            window.localStorage.setItem('userPassword', response.data[0].password)
          }
          
        })
        .catch((response) => {
          console.log(response)
        })
    }
  },
  getters: {
    AUTHORISATED(state) {
      return !state.AUTHORISATED;
    },
    USERNAME(state){
      return state.userName;
    }
  }
})
