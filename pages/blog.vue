<template>
  <div>
    <div v-for="(attribute, index) in attributes" :key="index" class="diagonal-box-hover">
      <nuxt-link :to="localePath(getPermalink(attribute.url, language))">
        <section-item :index="0">
          <blog-item :attribute="attribute.value" :post-url="attribute.url" />
        </section-item>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import pagesMixin from "~/mixins/pagesMixin.js";
import SectionItem from "~/components/SectionItem.vue";
import BlogItem from "~/components/BlogItem.vue";
const fm = require("front-matter")

export default {
  components: { SectionItem, BlogItem },
  mixins: [pagesMixin],
  async asyncData({ app }) {
    const language = app.i18n.locale
    const resolve = require.context('~/staticMarkdowns/contents/', true, /\.md$/)
    const posts = resolve.keys().filter(key => key.indexOf(`./${language}/`) > -1)

    const attributes = posts.map(key => {
      const fileContent = resolve(key)
      const res = fm(fileContent.default)
      return { url: key, value: res.attributes }
    }).sort(function(a, b){ return new Date(b.value.date) - new Date(a.value.date) })
    
    return {
      language,
      attributes
    }
  },
  methods: {
    getPermalink(post, language) {
      return `/posts/${post.split('\\').pop().split('/').pop().split('.')[0]}`
    }
  },
  head() {
    return {
        title: this.$t('blog.title'),
        htmlAttrs: {
          lang: this.$i18n.locale
        },
        meta: [
            { name: "author", content: this.resume.name },
            { name: "description", property: "og:description", content: this.$t('blog.description'), hid: "description" },
            { property: "og:title", content: this.$t('blog.title') }
        ]
      }
  }
}
</script>