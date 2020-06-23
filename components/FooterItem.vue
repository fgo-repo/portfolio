<template>
    <footer class="hero is-small is-bold is-dark">
        <div class="has-text-centered">
            {{ $t('footer.design') }} {{ resume.name }} — © {{ new Date().getFullYear() }} — {{ $t('footer.rights') }}
        </div>
    </footer>
</template>

<script>
    import pagesMixin from "~/mixins/pagesMixin.js";
    export default {
        name: 'FooterItem',
        mixins: [pagesMixin]
    }
</script>