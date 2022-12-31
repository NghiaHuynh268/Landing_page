<template>
  <div id="app">
    <AppHeader />
    <AppBanner />
    <AppLogo />
    <AppSections />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppBanner from "./components/AppBanner.vue";
import AppLogo from "./components/AppLogo.vue";
import AppSections from "./components/AppSections.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AppBanner,
    AppLogo,
    AppSections,
    AppFooter,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
}
</style>
