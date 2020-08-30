<template>
  <v-app dark>
    <v-app-bar fixed app color="white" class="app_bar text-center elevation-0">
      <v-toolbar-title v-text="title" class="font-weight-medium subtitle-2" />
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Resume Generator',
    }
  },
}
</script>

<style lang="scss">
@import './../assets/scss/utils.scss';

.app_bar {
  .v-toolbar__content {
    border-bottom: 2px solid $app_bar_border_color;
  }
}
</style>
