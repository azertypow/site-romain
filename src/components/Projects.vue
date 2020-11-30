<template>
    <section class="v-projects" :class="{'is-open': isOpen}">

      <button class="v-project__button"
              @click="onClick"
      >+</button>

      <div class="v-project__nav">
        <div class="v-project__nav__left"></div>
        <div class="v-project__nav__right"></div>
      </div>

      <div class="v-projects__intro"
           v-if="!isOpen"
      >
        <h2>{{title}}</h2>
      </div>

      <div class="v-projects__text"
           v-if="isOpen"
      >
        <h2 class="v-projects__text__title">{{title}}</h2>
        <div class="v-projects__text__value"
             v-html="descriptionHTML"
        ></div>
      </div>

      <div class="v-projects__images">
        <img
            v-for="image of images"
            :src="image"
            :alt="`image of ${title}`">
      </div>

    </section>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import {IApiProject} from "@/IApiProject"
    import MarkdownIt from "markdown-it"

    @Component({
      mounted(this: Projects) {
        window.addEventListener("scroll", () => {
          this.isOpen = false
        })
      }
    })
    export default class Projects extends Vue {

      @Prop({required: true, type: Object})
      projectData!: IApiProject

      title: string = this.projectData.title

      description: string = this.projectData.description

      get descriptionHTML(): string {
        const markdownIt = new MarkdownIt()

        return markdownIt.render( this.description )
      }

      isOpen = false

      onClick() {
        this.isOpen = !this.isOpen
      }

      get images(): string[] {

        if(! this.projectData.images) return []

        return this.projectData.images.map(value => {
          return value.directus_files_id.data?.full_url || ""
        })
      }

    }
</script>

<style lang="scss" scoped>
@import "../style/parameters";


.v-projects {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  user-select: none;
  scroll-snap-align: start;
}

.v-projects__intro {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.v-project__button {
  //background: none;
  display: block;
  border: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
  position: absolute;
  top: $gutter;
  right: $gutter;
  z-index: 50;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;

  .is-open & {
    transform: rotateZ(45deg);
  }
}

.v-project__nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 25;
  width: 100%;
  height: 100%;
}

.v-project__nav__left {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  cursor: w-resize;
}

.v-project__nav__right {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  cursor: e-resize;
}

.v-projects__text {
  position: absolute;
  z-index: 10;
  display: flex;
  top: 50%;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: $gutter;
  height: 50%;
  align-items: flex-end;
}

.v-projects__text__title {
  margin: 0;
  font-size: 100px;
  padding-left: $gutter;
  padding-right: $gutter;
}

.v-projects__text__value {
  padding-left: $gutter;
  padding-right: $gutter;
}

.v-projects__text__value::first-letter {
  color: red;
  font-family: serif;
}

.v-projects__images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

</style>
