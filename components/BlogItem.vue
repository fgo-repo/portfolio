<template>
  <div>
    <p class="title has-text-centered has-text-light">
      {{ attribute.title }}
    </p>
    <div class="level">
        <div class="level-left">
            <div class="level-item has-text-light is-size-7 is-italic">
                {{ new Date(attribute.date).toLocaleString(this.$i18n.locale, {day:'numeric', month:'long', year: 'numeric'}) }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <div class="tags is-pulled-right-desktop is-pulled-right-tablet">
                    <span v-for="(tag, index) in attribute.tags" :key="index" class="tag is-rounded is-info">
                        {{ tag }}
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="has-text-centered has-text-light">
        {{ attribute.description }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BlogItem',
    props: {
        attribute: Object,
        postUrl: String
    },
  methods: {
    getPermalink (post) {
      return `/posts/${post.split('\\').pop().split('/').pop().split('.')[0]}`
    }
  }
}
</script>
