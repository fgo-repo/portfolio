<template>
    <section class="section is-light is-bold">
        <div class="container">
            <div class="card content">
                <div class="card-content">
                    <markdown-item
                        type="cookie"
                        folder="legal"
                        class="content"
/>
                </div>
            </div>
            <div class="card content">
                <div class="card-content">
                    <markdown-item
                        type="legal"
                        folder="legal"
                        class="content"
/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import pagesMixin from "~/mixins/pagesMixin.js";
    import MarkdownItem from "~/components/MarkdownItem.vue";
    export default {
        components: { MarkdownItem },
        mixins: [pagesMixin],
        head() {
        return {
            title: this.$t('legal.title'),
            htmlAttrs: {
                lang: this.$i18n.locale,
            },
            meta: [
                { name: "author", content: this.resume.name },
                { name: "description", property: "og:description", content: this.$t('legal.description'), hid: "description" },
                { property: "og:title", content: this.$t('legal.title') }
            ]
            }
        },
    }
</script>