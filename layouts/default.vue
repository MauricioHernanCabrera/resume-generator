<template>
  <v-app dark>
    <v-app-bar fixed app color="white" class="app_bar text-center elevation-0">
      <v-toolbar-title class="font-weight-medium subtitle-2 d-none d-sm-block">
        Resume Generator
        {{ $t('layout.by') }}
        <a
          href="https://github.com/mauriciohernancabrera"
        >Mauricio Hernan Cabrera</a>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        text
        class="text-none font-weight-bold primary--text d-lg-none"
        @click="SET_PREVIEW_OPEN(!previewOpen)"
      >{{ previewOpen? $t('layout.previewClose') : $t('layout.previewClose') }}</v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="downloadImage">
            <v-list-item-title>{{ $t('layout.items.downloadImage') }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import html2canvas from 'html2canvas'

export default {
  computed: {
    ...mapState(['previewOpen']),
  },

  methods: {
    ...mapMutations(['SET_PREVIEW_OPEN']),

    async downloadImage() {
      const profileEl = document.getElementById('profile')
      profileEl.style.position = 'absolute'
      const canvas = await html2canvas(profileEl)
      profileEl.style.position = 'fixed'
      const image = canvas.toDataURL('image/png')
      this.downloadResource(image, 'resume.png')
    },

    downloadResource(resource, name) {
      const link = document.createElement('a')
      link.download = name
      link.href = resource
      link.click()
    },
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
