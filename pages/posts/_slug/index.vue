<template>
  <div>
    <section class="hero is-medium is-success">
      <div class="hero-body" :class="background">
        <div class="container has-text-centered">
          <div class="title">
            {{ attribute.title }}
          </div>
        </div>
      </div>
    </section>
    <section class="section article-up">
      <div class="container">
        <div class="columns is-centered is-vcentered">
          <div class="column">
            <div class="card article">
              <div class="card-content">
                <div class="columns is-centered">
                  <div class="column is-4 is-offset-4">
                    <div class="tags has-addons has-text-centered is-centered">
                      <span class="tag is-rounded" v-if="!!attribute.date">
                        {{ new Date(attribute.date).toLocaleString(this.$i18n.locale, {day:'numeric', month:'long', year: 'numeric'}) }}
                      </span>
                      <span class="tag is-rounded is-info" id="readingTime" />
                    </div>
                  </div>
                  <div class="column is-4">
                    <div class="tags is-pulled-right">
                      <span class="tag is-rounded is-dark" v-for="(tag, index) in attribute.tags" :key="index">
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="columns is-multiline is-vcentered" v-if="hasSpeechSynthesis">
                  <div class="column is-6">
                    <p class="is-size-7">Rate:</p>
                    <slider-item @change="updateRate" :min="0.5" :max="2" :step="0.1" :value="rate" />
                  </div>
                  <div class="column is-6">
                    <p class="is-size-7">Pitch:</p>
                    <slider-item @change="updatePitch" :min="0" :max="2" :step="0.1" :value="pitch" />
                  </div>
                  <div class="column is-4-desktop has-text-left-desktop">
                    <div class="buttons has-addons is-centered">
                      <button class="button is-rounded is-small is-dark" :disabled="playSynthesis" @click="speakText">
                        {{ $t('blog.play') }}
                      </button>
                      <button class="button is-rounded is-small is-warning" :disabled="!playSynthesis" @click="pauseText">
                        {{ $t('blog.pause') }}
                      </button>
                      <button class="button is-rounded is-small is-danger" :disabled="!playSynthesis" @click="stopText">
                        {{ $t('blog.stop') }}
                      </button>
                    </div>
                  </div>
                  <div class="column is-8-desktop">
                    <p class="is-size-7">Progress:</p>
                    <slider-item @change="updateProgress" :min="0" :max="currentTextLength" :step="10" :value="progressSynthesis" />
                  </div>
                </div>
                <div class="content article-body">
                  <div v-html="post" id="post" />
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </section>
  </div>
</template>

<script>
  import Prism from '~/plugins/prism';
  import textToSpeechMixin from "~/mixins/textToSpeechMixin.js";
  import SliderItem from "~/components/SliderItem.vue";
  const MarkdownIt = require('markdown-it')
  const fm = require("front-matter")
  const md = new MarkdownIt({
      html: true, // Enable HTML tags in source
      typographer: true,
    // injected: true,
      breaks: true, // Convert '\n' in paragraphs into <br>
      linkify: true // Autoconvert URL-like text to links    
  })
  .use(require('markdown-it-attrs'))

  export default {
    components: { SliderItem },
    mixins: [textToSpeechMixin],
    async asyncData({ app }) {      
      let post = null
      let attribute = null
      const fileContent = require(`~/staticMarkdowns/contents/${app.i18n.locale}/${app.context.params.slug}.md`)
      const res = fm(fileContent.default)
      post = md.render(res.body)
      attribute = res.attributes

      return {
        post,
        attribute
      }
    },
    data() {
      return {
        componentKey: 0,
        background: this.getRandom(['article-bg-one', 'article-bg-two', 'article-bg-tree', 'article-bg-four']),
        pitch: 1,
        rate: 1,
        text: '',
        forcedProgress: 0
      }
    },
    mounted() {
      const postItem = document.getElementById("post").cloneNode(true)
      const readingTime = document.getElementById("readingTime")
      for(let i = 0; i < postItem.children.length; i++) {
        if(postItem.children[i].localName === 'pre') {
          postItem.removeChild(postItem.children[i])
        }
      }
      this.text = postItem.innerText.match(/\w+/g)
      const time = Math.ceil(this.text.length / 250)
      this.text = this.text.join(' ')
      this.textLength = this.text.length
      readingTime.innerText = `${time} ${this.$t('blog.read')}`
      Prism.plugins.NormalizeWhitespace.setDefaults({
        'remove-trailing': true,
        'remove-indent': true,
        'left-trim': true,
        'right-trim': true,
        'break-lines': 75,
        /* 'indent': 2,
        'remove-initial-line-feed': false,
        'tabs-to-spaces': 4,
        'spaces-to-tabs': 4 */
      })
      Prism.highlightAll()
    },
    methods: {
      forceRerender(child) {
        ++this.componentKey
      },
      getRandom(list) {
        return list[Math.floor((Math.random() * list.length))]
      },
      updatePitch(e) {
        this.pitch = Number(e)
        this.speakText()
      },
      updateRate(e) {
        this.rate = Number(e)
        this.speakText()
      },
      updateProgress(e) {
        this.forcedProgress = Number(e)
        this.speakText()
      },
      speakText() {
        this.speak({
          text: this.text,
          pitch: this.pitch, 
          rate: this.rate,
          progress: this.forcedProgress
        })
        this.forcedProgress = 0
      },
      pauseText() {
        this.pause()
      },
      stopText() {
        this.cancel()
      }
    },
    head() {
      return {
        title: this.attribute.title,
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: this.attribute.author },
          { name: "description", property: "og:description", content: this.attribute.description, hid: "description" },
          { property: "og:title", content: this.attribute.title }
        ]
      }
    }
  };
</script>