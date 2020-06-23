<template>
    <div>
      <div class="columns is-centered is-vcentered" v-for="(option, index) in options.skills.sets" :key="index">
        <div class="column is-narrow is-one-quarter">
          <span class="tag is-dark">
              {{ option.name }}
          </span>
        </div>
        <div class="column is-narrow is-three-quarters">
          <div class="tags">
              <span v-for="(skill, sid) in option.skills" :key="sid" class="tag is-info is-rounded">
                  {{ skill }}
              </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'SkillsItem',
    props: {
      options: Object
    }
 }
</script>