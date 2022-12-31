<template>
  <div id="AppSections">
    <secAboutUs />
    <secOurFeatures />
    <secSlogan />
    <secSlides />
    <secWorks />
    <secReady />
  </div>
</template>

<script>
import secAboutUs from "./secAboutUs.vue";
import secOurFeatures from "./secOurFeatures.vue";
import secSlogan from "./secSlogan.vue";
import secSlides from "./secSlides.vue";
import secWorks from "./secWorks.vue";
import secReady from "./secReady.vue";
export default {
  name: "AppSections",
  components: {
    secAboutUs,
    secOurFeatures,
    secSlogan,
    secSlides,
    secWorks,
    secReady,
  },
};
</script>

<style lang="scss"></style>
