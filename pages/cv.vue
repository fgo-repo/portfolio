<template>
    <div>
      <component-wrapper v-for="(section, index) in Object.keys(resume)" :key="index" :file="section" folder="cv" :options="resume" />
      <nuxt-link :to="localePath('/print')" class="has-text-white is-unselectable">
        <div class="box top-btn-print">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="white" d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z" />
          </svg>
        </div>
      </nuxt-link>
    </div>
</template>

<script>
  import ComponentWrapper from "~/components/ComponentWrapper.vue";
  import pagesMixin from "~/mixins/pagesMixin.js";

  export default {
    components: { ComponentWrapper },
      mixins: [pagesMixin],
      head() {
        return {
            title: this.$t('cv.title'),
            htmlAttrs: {
                lang: this.$i18n.locale
            },
            meta: [
                { name: "author", content: this.resume.name },
                { name: "description", property: "og:description", content: this.$t('cv.description'), hid: "description" },
                { property: "og:title", content: this.$t('cv.title') }
            ]
          }
        }
  }
</script>