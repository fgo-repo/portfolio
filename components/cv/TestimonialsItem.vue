<template>
    <div>
        <div v-for="(option, index) in options.testimonials" :key="index" class="content">
            <section :class="`hero is-small is-${(index % 2 ? 'success': 'info')}`">
                <div class="hero-body has-text-centered">
                    <div class="blockquote">
                        {{ option.quote }}
                    </div>
                    <br>
                    <p>{{ option.name }}</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TestimonialsItem',
    props: {
      options: Object
    }
 }
</script>