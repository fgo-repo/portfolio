<template>
    <div>
      <component-wrapper v-for="(section, index) in Object.keys(resume)" :key="index" :file="section" folder="cv" :options="resume" />
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
                lang: this.$i18n.locale,
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