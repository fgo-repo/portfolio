<template>
    <section v-if="showCookie" class="m-bottom-sticky">
        <div class="container">
            <div class="notification is-success is-small">
                <div class="columns">
                    <div class="column auto">
                        {{ $t('gdpr.disclaimer') }}
                    </div>
                    <div class="column is-narrow">
                        <div class="buttons is-centered">
                            <a @click="approveCookies" class="button is-success is-unselectable is-inverted">{{ $t('gdpr.ok') }}</a>
                            <nuxt-link :to="localePath('/legal')" class="button is-success is-unselectable is-inverted is-outlined">{{ $t('gdpr.info') }}</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'GdprStickyItem',
    computed: {
        showCookie() {
            return !this.$store.state.cookie
        }    
    },
    mounted() {
        const cookieValue = this.$cookies.get('GDPR')

        if(cookieValue !== undefined){
            if(cookieValue !== this.$store.state.cookie){
                this.$store.dispatch("setCookie", { cookie: cookieValue })
            }            
        }
        else{
            this.$store.dispatch("setCookie", { cookie: false })
        }
    },
    methods: {
        approveCookies() {
            this.$store.dispatch("setCookie", { cookie: true })
        }
    }
}
</script>

<style>
.m-bottom-sticky {
    z-index: 980;
    position:fixed !important;
    bottom:0;
    left: 0;
    right: 0;
}
</style>