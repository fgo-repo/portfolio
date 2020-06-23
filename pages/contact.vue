<template>
    <section class="hero is-light is-fullheight is-bold">
        <div class="hero-body">
            <div class="container">
                <p class="title">
                    {{ $t('contact.description') }}
                </p>
                <p class="subtitle">
                    {{ $t('contact.contactMe') }}
                </p>
                <contact-form-item class="content" />
                <div class="content has-text-centered">
                    <contact-item :options="resume" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>    
    import pagesMixin from "~/mixins/pagesMixin.js";
    import ContactItem from "~/components/cv/ContactItem.vue";
    import ContactFormItem from "~/components/ContactFormItem.vue";
    export default {
        components: { ContactFormItem, ContactItem },
        mixins: [pagesMixin],
        head() {
            return {
                title: this.$t('contact.title'),
                htmlAttrs: {
                    lang: this.$i18n.locale,
                },
                meta: [
                    { name: "author", content: this.resume.name },
                    { name: "description", property: "og:description", content: this.$t('contact.description'), hid: "description" },
                    { property: "og:title", content: this.$t('contact.title') }
                ]
            }
        }
    }
</script>