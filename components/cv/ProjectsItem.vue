<template>
    <div class="columns is-multiline">
      <div class="column is-4-desktop is-12-tablet" v-for="(option, index) in options.projects" :key="index">
        <div class="card card-equal-height">
            <div class="card-content">
              <p v-if="!!option.url" class="title has-text-centered">
                <a v-if="!!option.url" :href="option.url" class="has-text-link">{{ option.title }}</a>
              </p>
              <p v-else-if="!!option.repo" class="title has-text-centered">
                <a v-if="!!option.repo" :href="option.repo" class="has-text-link">{{ option.title }}</a>
              </p>
              <p v-else class="title has-text-centered">
                {{ option.title }}
              </p>
              <div class="content">
                {{ option.summary }}
              </div>
              <div class="content">
                {{ option.description }}
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ProjectsItem',
    props: {
      options: Object
    }
 }
</script>