<template>
  <div id="app">
    <projects
        v-for="project of projects"
        :project-data = "project"
    >
    </projects>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Projects from "@/components/Projects.vue"
import {IApiProject} from "@/IApiProject"

@Component({
  components: {
    Projects
  }
})
export default class App extends Vue {
  get projects(): IApiProject[] {
    return this.$store.state.projects
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
