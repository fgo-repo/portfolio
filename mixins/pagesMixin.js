export default {
    data() {
      return {
        resume: require(`static/resume-${this.$i18n.locale}.json`)
      }
    }
  }