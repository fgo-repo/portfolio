<template>
  <div>
    <section class="hero is-info is-fullheight main_background">
      <div class="hero-head">
        <header-item type="info" />
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="wrapper" data-aos="zoom-in-up" data-aos-duration="3000">
            <h1 :data-heading="resume.name">{{ resume.name }}</h1>
          </div>          
        </div>
      </div>
      <div class="hero-foot">
        <div class="container has-text-centered content">
          <div class="subtitle">
            {{ $t('home.hi') }}
          </div>
          <div class="title">
            {{ resume.info.label }}
          </div>
          <div class="subtitle">
            {{ resume.location.country }}, {{ resume.location.city }}
          </div>
        </div>
        <div class="container has-text-centered content">
          <a href="#index-first-section">
            <i class="godown icon has-text-white">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,11L12,21L2,11H8V3H16V11H22M12,18L17,13H14V5H10V13H7L12,18Z" /></svg>
            </i>
          </a>
        </div>
        <div class="ripple-background content">
          <div class="circle xxlarge shade1" />
          <div class="circle xlarge shade2" />
          <div class="circle large shade3" />
          <div class="circle mediun shade4" />
          <div class="circle small shade5" />
        </div>
      </div>
    </section>
    <section class="hero is-medium is-light is-bold" id="index-first-section">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered v-centered">
            <div class="column is-half has-text-centered" data-aos="fade-right" data-aos-duration="1500">
              <div class="card equal-height">
                <div class="box-up box">
                  <div class="icon is-large">
                    <svg style="width:48px;height:48px" width="24" height="24" viewBox="0 0 24 24"><path d="M22,3H2C0.91,3.04 0.04,3.91 0,5V19C0.04,20.09 0.91,20.96 2,21H22C23.09,20.96 23.96,20.09 24,19V5C23.96,3.91 23.09,3.04 22,3M22,19H2V5H22V19M14,17V15.75C14,14.09 10.66,13.25 9,13.25C7.34,13.25 4,14.09 4,15.75V17H14M9,7A2.5,2.5 0 0,0 6.5,9.5A2.5,2.5 0 0,0 9,12A2.5,2.5 0 0,0 11.5,9.5A2.5,2.5 0 0,0 9,7M14,7V8H20V7H14M14,9V10H20V9H14M14,11V12H18V11H14" /></svg>
                  </div>
                </div>
                <div class="card-content">                    
                  <p class="title has-text-centered">{{ $t('home.iAm') }}</p>
                  <div class="content">
                    <div class="columns is-gapless is-centered v-centered" v-for="(option, index) in $t('home.compentencies')" :key="index">
                      <div class="column is-half has-text-left-desktop is-uppercase is-narrow">
                        {{ option.title }}
                      </div>
                      <div class="column is-half has-text-centered is-narrow">
                        {{ option.description }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-half has-text-centered" data-aos="fade-left" data-aos-duration="1500">
              <div class="card equal-height">
                <div class="box-up box">
                  <div class="icon is-large">
                    <svg style="width:48px;height:48px" width="24" height="24" viewBox="0 0 24 24"><path d="M13 3C16.88 3 20 6.14 20 10C20 12.8 18.37 15.19 16 16.31V21H9V18H8C6.89 18 6 17.11 6 16V13H4.5C4.08 13 3.84 12.5 4.08 12.19L6 9.66C6.19 5.95 9.23 3 13 3M13 1C8.41 1 4.61 4.42 4.06 8.9L2.5 11L2.47 11L2.45 11.03C1.9 11.79 1.83 12.79 2.26 13.62C2.62 14.31 3.26 14.79 4 14.94V16C4 17.85 5.28 19.42 7 19.87V23H18V17.5C20.5 15.83 22 13.06 22 10C22 5.03 17.96 1 13 1M17 8.83C17 10.37 15.64 11.6 13.58 13.47L13 14L12.42 13.47C10.36 11.6 9 10.37 9 8.83C9 7.63 9.96 6.64 11.16 6.63H11.2C11.89 6.63 12.55 6.94 13 7.46C13.45 6.94 14.11 6.63 14.8 6.63C16 6.62 17 7.59 17 8.79V8.83Z" /></svg>
                  </div>
                </div>
                <div class="card-content">                    
                  <p class="title has-text-centered">{{ $t('home.iLike') }}</p>
                  <div class="content">
                    <div class="columns is-gapless is-centered v-centered" v-for="(option, index) in $t('home.interests')" :key="index">
                      <div class="column has-text-centered is-narrow">
                        {{ option }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-small is-info main_background">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline is-centered v-centered" data-aos="zoom-out" data-aos-duration="1500">
            <div class="column is-full has-text-centered">
              {{ $t('home.lookAt') }}
            </div>
            <div class="column is-half has-text-right-desktop has-text-right-tablet has-text-centered-mobile">              
              <nuxt-link :to="localePath('/cv')" class="button is-unselectable">{{ $t('cv.title') }}</nuxt-link>
            </div>
            <div class="column is-half has-text-left-desktop has-text-left-tablet has-text-centered-mobile">
              <nuxt-link :to="localePath('/contact')" class="button is-unselectable">{{ $t('contact.title') }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderItem from "~/components/HeaderItem.vue";
import pagesMixin from "~/mixins/pagesMixin.js";

export default {
  layout: 'main',
  components: { HeaderItem },
  mixins: [pagesMixin],
  head() {
    return {
      title: this.$t('home.title'),
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        { name: "author", content: this.resume.name },
        { name: "description", property: "og:description", content: this.$t('home.description'), hid: "description" },
        { property: "og:title", content: this.$t('home.title') }
      ]
    }
  }
}
</script>

<style scoped>
.main_background {
  position: relative;
  overflow: hidden;
}
.main_background::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url(/images/background.png);
  z-index: 1;
  background-position: left bottom;
  background-repeat: no-repeat;
}
.main_background::after {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url(/images/background.png);
  transform: rotate(-180deg);
  z-index: 2;
  background-position: left bottom;
  background-repeat: no-repeat;
}
.hero-body, .hero-foot {
  z-index: 3;
}
@media only screen and (min-width: 42rem) {
  .circle{
    position: absolute;
    z-index: 10;
    background: white;
    border-radius: 50%;
    animation: ripple 15s infinite;
    box-shadow: 0px 0px 1px 0px #508fb9;
  }

  .small{
    width: 200px;
    height: 200px;
    left: -100px;
    bottom: -100px;
  }

  .medium{
    width: 400px;
    height: 400px;
    left: -200px;
    bottom: -200px;
  }

  .large{
    width: 600px;
    height: 600px;
    left: -300px;
    bottom: -300px;
  }

  .xlarge{
    width: 800px;
    height: 800px;
    left: -400px;
    bottom: -400px;
  }

  .xxlarge{
    width: 1000px;
    height: 1000px;
    left: -500px;
    bottom: -500px;
  }

  .shade1{
    opacity: 0.2;
  }
  .shade2{
    opacity: 0.5;
  }

  .shade3{
    opacity: 0.7;
  }

  .shade4{
    opacity: 0.8;
  }

  .shade5{
    opacity: 0.9;
  }

  @keyframes ripple{
    0%{
      transform: scale(0.8);
    }
    
    50%{
      transform: scale(1.2);
    }
    
    100%{
      transform: scale(0.8);
    }
  }

  .godown svg {
      transform-origin: 70% 50%;
      animation: godown-loader 2s infinite ease;
  }
  @keyframes godown-loader {
      0% {
          transform: translateY(-10px);
      }
      100% {
          transform: translateY(10px) scale(1.2);
      }
  }
}
</style>