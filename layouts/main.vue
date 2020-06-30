<template>
  <div>
    <nuxt class="main" />
    <footer-item class="footer" />
    <gdpr-sticky-item data-aos="zoom-in-up" data-aos-duration="1500" />
  </div>
</template>

<script>
  import FooterItem from "~/components/FooterItem.vue";
  import GdprStickyItem from "~/components/GdprStickyItem.vue";

  export default {
    components: { FooterItem, GdprStickyItem }
  }
</script>