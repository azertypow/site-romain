import Vue from 'vue'
import Vuex from 'vuex'
import {IApiProject} from "@/IApiProject"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: Array<IApiProject>(),
  },
  mutations: {
    updateProjects(state, projects: IApiProject[]) {
      state.projects = projects
    }
  },
  actions: {
  },
  modules: {
  }
})
