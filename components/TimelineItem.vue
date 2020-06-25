<template>
  <div class="timeline-item is-success" v-if="isFull">
    <div class="timeline-marker is-image is-32x32">
        <img src="" alt="">
    </div>
    <div class="timeline-content">
        <div class="heading">{{ heading }}</div>
        <h1 class="title is-4">{{ title }}</h1>
        <div style="max-width: '25em'"><slot /></div>
    </div>
  </div>
  <div v-else>
    <div class="level">
        <div class="level-left">
            <div class="level-item subtitle has-text-info">
                {{ title }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item heading">
                {{ heading }}
            </div>
        </div>
    </div>
    <div style="max-width: '25em'"><slot /></div>
  </div>
</template>

<script>
  export default {
    name: 'TimelineItem',
    props: {
      start: String,
      end: {
        type: String,
        default: ''
      },
      title: String,
      isFull: {
          type: Boolean,
          default: true
      }
    },
    computed: {
      heading() {
        return this.end.length > 0 ? `${new Date(this.start).toLocaleString(this.$i18n.locale, {month: 'long', year: 'numeric'})} - ${new Date(this.end).toLocaleString(this.$i18n.locale, {month: 'long', year: 'numeric'})}` : new Date(this.start).toLocaleString(this.$i18n.locale, {month: 'long', year: 'numeric'})
      }
    }
 }
</script>