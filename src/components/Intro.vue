<template>
    <section class="v-intro">
      <div class="v-intro__text">
        <h1>®TALOU SOUCAZE-SOUDAT</h1>
        <p><em>From to</em><br>
          GRAPHICS + INTERACTION<br>
          RESEARCH ASSISTANT AT<br>
          EPFL+ECAL LAB<br>
          **<br>
          <em>w/more user & human<br>
            -centered design approch.</em>
        </p>
      </div>

      <div class="v-intro__next">
        <div class="v-intro__next__text">
          -> Featured Projects
        </div>
      </div>
    </section>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";

    @Component
    export default class Intro extends Vue {

    }
</script>

<style lang="scss" scoped>
@import "../style/parameters";

.v-intro {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  user-select: none;
  scroll-snap-align: start;
}

.v-intro__next {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: $gutter;
}

.v-intro__next__text {
  text-align: right;
}

</style>
