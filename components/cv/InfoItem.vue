<template>
  <div class="columns is-centered is-vcentered">
    <div class="column has-text-centered is-one-quarter">
      <div class="columns is-centered is-vcentered">
        <div class="column is-narrow has-text-centered">
          <figure class="image is-128x128">
            <img class="is-rounded" :class="isFull ? 'has-background-success' : 'has-background-white'" :src="options.info.image" :alt="options.name">
          </figure>
        </div>
      </div>
      <p class="title">{{ options.name }}</p>
      <p class="subtitle">{{ options.info.label }}</p>
    </div>
    <div class="column is-half-desktop is-three-quarters-tablet" v-if="isFull">
      <div class="notification is-success">
        <div class="blockquote">
          {{ options.info.quote }}
        </div>
      </div>
      <div class="notification is-primary">
        <p>{{ options.info.brief }}</p>
      </div>
    </div>
    <div v-else class="column is-three-quarters">
      {{ options.info.brief }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InfoItem',
    props: {
      options: Object,
      isFull: {
          type: Boolean,
          default: true
      }
    }
 }
</script>