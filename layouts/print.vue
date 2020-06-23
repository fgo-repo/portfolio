<template>
  <div>
    <header-item type="success" />
    <nuxt />
  </div>
</template>

<script>
  import HeaderItem from "~/components/HeaderItem.vue";

  export default {
    components: { HeaderItem }
  }
</script>