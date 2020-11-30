<template>
  <div id="app">
    <intro></intro>
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
import Intro from "@/components/Intro.vue"

@Component({
  components: {
    Projects,
    Intro
  }
})
export default class App extends Vue {
  get projects(): IApiProject[] {
    return this.$store.state.projects
  }
}
</script>

<style lang="scss">
@import "./style/parameters";
@import "./style/font";

#app {
  @include font-3;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: scroll;
  scroll-snap-type: y mandatory;
  width: 100%;
  height: 100%;
}

em {
  font-family: $font-family--serif;
}
</style>
