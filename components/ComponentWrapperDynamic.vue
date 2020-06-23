<template>
  <div v-if="isLoaded">
    <div v-if="wrapped">
      <section-item :index="staticIndex">
        <component :is="componentFile" :options="options" :index="staticIndex"></component>
      </section-item>
    </div>
    <section v-else>
      <component :is="componentFile" :options="options" :index="staticIndex" :isFull="false"></component>
    </section>
  </div>
</template>

<script>
  import Vue from 'vue';
  import SectionItem from "~/components/SectionItem.vue";
  export default {
    name: 'ComponentWrapperDynamic',
    components: { SectionItem },
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
            componentFile: null,
            staticIndex: 1,
            isLoaded: false
        }
    },
    computed: {
        fileName() {
          return `${this.file.charAt(0).toUpperCase()}${this.file.slice(1)}Item`
        },
        folderName() {
          return this.folder.length > 0 && !this.folder.endsWith('/') ? `${this.folder}/` : this.folder
        },
        loader() {
            if (!this.file) {
                return null
            }

            if (!Vue.options.components[this.fileName]) {
              Vue.component(
                this.fileName,
                () => import(`./${this.folderName}${this.fileName}.vue`)
              );
            }

            return Vue.options.components[this.fileName]
        }
    },
    mounted() {
        this.loader()
          .then(() => {
              this.componentFile = () => this.loader()
              this.staticIndex = Vue.prototype.componentIndex > 0 || this.file !== 'info' ? ++Vue.prototype.componentIndex : Vue.prototype.componentIndex=1
              this.isLoaded = true
          })
          .catch(() => {
              // console.log(`Failed to load ${this.fileName}.vue`)
          })
    }
  }
</script>