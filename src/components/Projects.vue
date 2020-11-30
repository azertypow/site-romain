<template>
    <section class="v-projects"
             :class="{'is-open': isOpen}"
             @click="navClick"
    >

      <button class="v-project__button"
              @click="onClickButton"
      >+</button>

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

      <div class="v-projects__images" ref="imageContainer">
        <img
            class="v-projects__images__items"
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

      onClickButton( e: MouseEvent ) {
        e.stopPropagation()
        this.isOpen = !this.isOpen
      }

      navClick(e: MouseEvent) {
        const rightScreenClicked = e.clientX > window.innerWidth / 2

        if( rightScreenClicked )  this.goToNextImage()
        else                      this.goToBeforeImage()
      }

      getCurrentImageIndex() {
        let i = 0,
            toReturn = 0

        if( this.$refs.imageContainer instanceof HTMLElement ) {
          for(const imageElement of this.$refs.imageContainer.childNodes) {
            if((imageElement as HTMLElement).getBoundingClientRect().x < window.innerWidth / 2) toReturn = i
            else break
            i++
          }
        }

        return toReturn
      }

      get images(): string[] {

        if(! this.projectData.images) return []

        return this.projectData.images.map(value => {
          return value.directus_files_id.data?.full_url || ""
        })
      }

      get imageContainer(): HTMLElement | null {
        const imageContainer = this.$refs.imageContainer
        return imageContainer instanceof HTMLElement ? imageContainer : null
      }

      get numberOfImages(): number {
        return this.imageContainer ? this.imageContainer.childElementCount : 0
      }

      goToNextImage() {
        const imageContainerWidth       = this.imageContainer?.getBoundingClientRect().width || 0
        const imageContainerScrollLeft  = this.imageContainer?.scrollLeft || 0
        this.imageContainer?.scrollTo( imageContainerScrollLeft + imageContainerWidth, 0 )
      }

      goToBeforeImage() {
        const imageContainerWidth       = this.imageContainer?.getBoundingClientRect().width || 0
        const imageContainerScrollLeft  = this.imageContainer?.scrollLeft || 0
        this.imageContainer?.scrollTo( imageContainerScrollLeft - imageContainerWidth, 0 )
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

.v-projects__text {
  position: absolute;
  z-index: 10;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: $gutter;
  height: 100%;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
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
  display: flex;
  flex-wrap: nowrap;
  scroll-snap-type: x mandatory;
  overflow: scroll;
  scroll-behavior: smooth;
}

.v-projects__images__items {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  object-fit: cover;
  scroll-snap-align: center;
}

</style>
