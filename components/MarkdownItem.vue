<template>
  <div>
    <div v-html="post" />
  </div>
</template>

<script>
  const MarkdownIt = require('markdown-it')
  const mda = require('markdown-it-attrs')
  const fm = require("front-matter")
  const md = new MarkdownIt({
  /*   html: true,
    typographer: true */
      html: true, // Enable HTML tags in source
      typographer: true,
    // injected: true,
      breaks: true, // Convert '\n' in paragraphs into <br>
      linkify: true // Autoconvert URL-like text to links    
  }).use(mda)

  export default {
    name: 'MarkdownItem',
    props: {
        type: String,
        folder: String
    },
    data() {
        const fileContent = require(`~/staticMarkdowns/${this.folder}/${this.$i18n.locale}/${this.type}.md`)
        const res = fm(fileContent.default)
        const post = md.render(res.body)
      return {
        post
      }
    }
  }
</script>