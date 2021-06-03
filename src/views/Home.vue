<template>
  <div class="home">
    <Page_home msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Page_home from "@/components/Page_home.vue";

export default {
  name: "Home",
  components: {
    Page_home,
  },
};
</script>
