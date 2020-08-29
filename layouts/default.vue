<template>
  <v-app dark>
    <v-app-bar fixed app color="white" class="text-center">
      <v-toolbar-title v-text="title" class="font-weight-bold" />
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
