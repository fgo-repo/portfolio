<template>
  <div class="timeline">
    <header class="timeline-header" v-if="isFull">
      <span class="tag is-medium is-dark is-success">{{ new Date().getFullYear() }}</span>
    </header>
    <div>
      <timeline-item v-for="(option, index) in options.education.history" :key="index" :start="option.start" :end="option.end" :title="option.title" :is-full="isFull" :class="isFull?'':'content'">
        {{ option.title }}
        {{ option.area }}
        {{ option.url }}
        {{ option.location }}
      </timeline-item>
      <span v-if="isFull" class="tag is-medium is-success">{{ new Date(options.employment.history[options.employment.history.length-1].start).getFullYear() }}</span>
    </div>
  </div>
</template>

<script>
  import TimelineItem from "~/components/TimelineItem.vue";
  export default {
    name: 'EducationItem',
    components: { TimelineItem },
    props: {
      options: Object,
      isFull: {
          type: Boolean,
          default: true
      }
    }
 }
</script>