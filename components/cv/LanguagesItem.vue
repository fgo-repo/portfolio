<template>
  <div class="columns is-centered is-vcentered">
    <div class="column is-narrow text-center" v-for="(option, index) in options.languages" :key="index">
        <div class="tags has-addons">
            <span class="tag is-dark">
                {{ option.language }}
            </span>
            <span class="tag is-success">
                {{ option.level }}
            </span>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LanguagesItem',
    props: {
      options: Object
    }
 }
</script>