<template>
    <div>
        <div class="columns is-vcentered" v-for="(option, index) in options.interests" :key="index">
            <div class="column is-narrow">
                <div class="tags has-addons">
                    <span class="tag is-dark">
                        {{ option.name }}
                    </span>
                    <span class="tag is-success">
                        {{ option.summary }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'InterestsItem',
    props: {
      options: Object
    }
 }
</script>