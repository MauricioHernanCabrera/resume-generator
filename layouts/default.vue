<template>
  <v-app dark>
    <v-app-bar fixed app color="white" class="app_bar text-center elevation-0">
      <v-toolbar-title class="font-weight-medium subtitle-2">
        {{ title }}
        by
        <a
          href="https://github.com/mauriciohernancabrera"
        >Mauricio Hernan Cabrera</a>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        text
        class="text-none font-weight-bold primary--text d-lg-none"
        @click="SET_PREVIEW_OPEN(!previewOpen)"
      >{{ previewOpen? 'Close' : 'Open' }} preview</v-btn>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      title: 'Resume Generator',
    }
  },

  computed: {
    ...mapState(['previewOpen']),
  },

  methods: {
    ...mapMutations(['SET_PREVIEW_OPEN']),
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
