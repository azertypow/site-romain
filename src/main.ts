import Vue from 'vue'
import App from './App.vue'
import store from './store'
import {IApiProject} from "@/IApiProject"

import "./style/_main.scss"

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

;(async function(){

  await apiGetProjects()

})()

async function apiGetProjects() {
  const response = await fetch("http://178.128.195.165/romain/items/projects?fields=*.*.*")
  const responseProjectData = await response.json() as {data: IApiProject[]}

  store.commit("updateProjects", responseProjectData.data )
}
