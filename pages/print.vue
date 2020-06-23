<template>
    <div id="wrapperResume">
        <div id="resume">
            <div class="grid-area" v-for="(section, index) in getItems" :key="index" :style="getStyleItem(section)">
                <component-wrapper
                    :file="section"
                    folder="cv"
                    :options="resume"
                    :wrapped="false"
/>
            </div>
        </div>
    </div>
</template>

<script>
  import ComponentWrapper from "~/components/ComponentWrapper.vue";
  import pagesMixin from "~/mixins/pagesMixin.js";
  const sections = ['info', 'skills', 'contact', 'languages', 'employment', 'education']

  export default {
      layout: 'print',
      components: { ComponentWrapper },
      mixins: [pagesMixin],
      computed: {
        getItems() {
            return Object.keys(this.resume).filter(f => sections.includes(f))
        }
    },
      methods: {
        getStyleItem(section) {
            return `grid-area: ${section}`
        }
      },
      head() {
        return {
            title: this.$t('cvPrint.title'),
            htmlAttrs: {
                lang: this.$i18n.locale
            },
            meta: [
                { name: "author", content: this.resume.name },
                { name: "description", property: "og:description", content: this.$t('cvPrint.description'), hid: "description" },
                { property: "og:title", content: this.$t('cvPrint.title') }
            ]
            }
        }
  }
</script>

<style scoped>
#resume {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-template-rows   : repeat(5, 1fr);
    /* box-shadow           : 0 5px 9px 0 rgba(0, 0, 0, 0.35);*/
    grid-template-areas:
        "info info info"
        "contact skills skills"
        "languages languages languages"
        "employment employment employment"
        "education education education";
    /* grid-gap: 4px; */
    /* for development only */
    max-width : 210mm;
    height: 297mm;
    /* border: 1px solid black; */
}

.grid-area {
    padding: 1em 1em 1em 1em;
    border-bottom : 1px lightgrey solid;
}

#wrapperResume {
    display       : flex;
    flex-direction: column;
    align-items   : center;
    font-size     : 12px !important;
}
</style>

<style>
#wrapperResume .tag {
    font-size: 12px !important;
}
#wrapperResume .subtitle {
    font-size: 16px !important;
}
#wrapperResume .title {
    font-size: 20px !important;
}

@media print {
    /* remove any screen only styles, for example link underline */
    * {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }

    nav {
        display: none !important;
    }
}

@page {
    /* margin: 0.5cm 0.5cm 1cm 0.5cm; */
    size: A4 portrait;
}
</style>