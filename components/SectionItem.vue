<template>
    <section :class="[sectionBase, diagonal]" :data-aos="side" data-aos-duration="500">
      <div class="container bg-content">
        <slot />
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SectionItem',
    props: {
      index: {
        type: Number,
        default: 1
      }
    },
    computed: {
        sectionBase() {
          return "section hero"
        },
        diagonal() {
            return this.index % 2 ? "diagonal-box bg-two" : "diagonal-box bg-one"
        },
        side() {
          return this.index === 0 ? "avoidIE" : this.index % 2 ? "fade-up-left" : "fade-up-right"
        }
    }
  }
</script>