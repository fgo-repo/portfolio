<template>
  <div>
    <header-item type="success" id="top" />
    <nuxt class="main" />
    <footer-item class="footer" />
    <gdpr-sticky-item />
    <a href="#top">
      <div class="scroll-top box is-transparent">
        <div class="icon is-medium">
          <svg style="width:36px;height:36px" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z" /></svg>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  import HeaderItem from "~/components/HeaderItem.vue";
  import FooterItem from "~/components/FooterItem.vue";
  import GdprStickyItem from "~/components/GdprStickyItem.vue";

  export default {
    components: { HeaderItem, FooterItem, GdprStickyItem }
  }
</script>