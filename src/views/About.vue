<template>
  <div class="about">
    <Page_about msg="Welcome " />
  </div>
</template>

<script>
// @ is an alias to /src
import Page_about from "@/components/Page_about.vue";

export default {
  name: "About",
  components: {
    Page_about,
  },
};
</script>
