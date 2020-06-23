<template>
  <div v-if="componentFile">
    <div v-if="wrapped">
      <section-item :index="staticIndex">
        <div class="columns is-centered">
          <div class="column is-narrow">
            <p class="title has-text-light">
              <span :class="`tapered-${side}`">{{ $t(`cv.${file}`) }}</span>
            </p>
          </div>
        </div>
        <component :is="componentFile" :options="options" class="has-text-white" />
      </section-item>
    </div>
    <section v-else>
      <component :is="componentFile" :options="options" :is-full="false" />
    </section>
  </div>
</template>

<script>
  import Vue from 'vue';
  import SectionItem from "~/components/SectionItem.vue";
  import ContactItem from "~/components/cv/ContactItem.vue";
  import EducationItem from "~/components/cv/EducationItem.vue";
  import EmploymentItem from "~/components/cv/EmploymentItem.vue";
  import InfoItem from "~/components/cv/InfoItem.vue";
  import InterestsItem from "~/components/cv/InterestsItem.vue";
  import LanguagesItem from "~/components/cv/LanguagesItem.vue";
  import ProjectsItem from "~/components/cv/ProjectsItem.vue";
  import SkillsItem from "~/components/cv/SkillsItem.vue";
  import TestimonialsItem from "~/components/cv/TestimonialsItem.vue";

  export default {
    name: 'ComponentWrapper',
    components: { SectionItem, ContactItem, EducationItem, EmploymentItem, InfoItem, InterestsItem, LanguagesItem, ProjectsItem, SkillsItem, TestimonialsItem },
    props: {
      file: {
        type: String,
        required: true
      },
      folder: {
        type: String,
        default: ""
      },
      options: {
        type: Object,
        default: null
      },
      wrapped: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    computed: {
      fileName() {
        return `${this.file.charAt(0).toUpperCase()}${this.file.slice(1)}Item`
      },
      staticIndex() {
        if (this.currentIndex === 0 && this.$options.components[this.fileName]) {
          if (Vue.prototype.componentIndex === undefined) {
            Vue.prototype.componentIndex = 0
          }
          this.currentIndex = ++Vue.prototype.componentIndex
        }

        return this.currentIndex
      },
      side() {
        return this.staticIndex % 2 ? "up" : "down"
      },
      componentFile() {
        if (this.$options.components[this.fileName]) {
          return this.fileName
        }
        else {
          return false
        }
      }
    }
  }
</script>