<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppProject from './components/AppProject.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppProject
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss">
@use 'styles/general.scss'
</style>
