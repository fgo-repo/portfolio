<template>
    <nav :class="`navbar is-${type}`" :is-fixed-top="fixed" role="navigation" aria-label="dropdown navigation">
        <div class="navbar-brand">
            <div class="navbar-item logo">
                <nuxt-link :to="localePath('/')" class="has-text-white is-unselectable">{{ resume.name }}</nuxt-link>
            </div>
            <div class="navbar-burger burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
                <span />
                <span />
                <span />
            </div>
        </div>

        <div class="navbar-menu" :class="[{ 'is-active': showNav }, `has-background-${type}`]">
            <div class="navbar-start" />

            <div class="navbar-end">
                <div class="navbar-item">
                    <nuxt-link :to="localePath('/')" class="has-text-white is-unselectable">{{ $t('home.title') }}</nuxt-link>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-item">
                        <nuxt-link :to="localePath('/cv')" class="has-text-white is-unselectable">{{ $t('cv.title') }}</nuxt-link>
                    </div>
                    <div :class="`navbar-dropdown is-boxed has-background-${type}`">
                        <div class="navbar-item">
                            <nuxt-link :to="localePath('/cv')" class="has-text-white is-unselectable">{{ $t('cv.description') }}</nuxt-link>
                        </div>
                        <div class="navbar-item">
                            <nuxt-link :to="localePath('/print')" class="has-text-white is-unselectable">{{ $t('cvPrint.title') }}</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="navbar-item">
                    <nuxt-link :to="localePath('/contact')" class="has-text-white is-unselectable">{{ $t('contact.title') }}</nuxt-link>
                </div>
                <div class="navbar-item">
                    <nuxt-link :to="localePath('/blog')" class="has-text-white is-unselectable">{{ $t('blog.title') }}</nuxt-link>
                </div>
                <div class="navbar-item">
                    <nuxt-link :to="localePath('/legal')" class="has-text-white is-unselectable">{{ $t('legal.title') }}</nuxt-link>
                </div>
                <div class="navbar-item" v-for="locale in availableLocales" :key="locale.code">
                    <nuxt-link :to="switchLocalePath(locale.code)" :class="`is-${type}`" class="button is-inverted is-unselectable">{{ locale.name }}</nuxt-link>
                </div>
                <div class="navbar-item">
                    <theme-item />
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import pagesMixin from "~/mixins/pagesMixin.js";
    import ThemeItem from "~/components/ThemeItem.vue";
    export default {
        name: 'HeaderItem',
        components: { ThemeItem },
        mixins: [pagesMixin],
        props: {
            type: {
                type: String,
                default: ''
            },
            fixed: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                showNav: false
            }
        },
        computed: {
            availableLocales() {
                return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
            }
        }
    }
</script>