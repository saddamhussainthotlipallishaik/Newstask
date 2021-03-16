import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        news:[]
    },
    getters:{
        allNews:(state)=> state.news
    },
    actions:{
        async NewsData({ commit }){
            const response = await axios.get(' https://newsapi.org/v2/top-headlines?country=us&apiKey=1d13311f35404387b2fa0daf701678ad');
            commit('setNews',response.data.articles)
        }
    },
    mutations:{
        setNews(state,news) {
            state.news = news
        }
    }
})