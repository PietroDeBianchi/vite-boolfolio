<script>
import AppHeader from './components/AppHeader.vue';
import AppProject from './components/AppProject.vue';

export default {
  components: {
    AppHeader,
    AppProject
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <!-- <AppMain></AppMain> -->
</template>

<style lang="scss">
@use 'styles/general.scss'
</style>
