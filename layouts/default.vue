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

      <v-menu offset-y :close-on-click="false" :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item class="px-0">
              <v-select
                :items="locales"
                :label="$t('language.text')"
                solo
                flat
                class="px-1"
                hide-details
                @input="setLanguage"
              ></v-select>
            </v-list-item>

            <v-list-item @click="downloadImage">
              <v-list-item-title>{{ $t('layout.items.downloadImage') }}</v-list-item-title>
            </v-list-item>

            <v-list-item @click="SET_EXAMPLE_ACTIVE(!exampleActive)">
              <v-list-item-title v-if="exampleActive">{{ $t('layout.items.exampleInactive') }}</v-list-item-title>
              <v-list-item-title v-else>{{ $t('layout.items.exampleActive') }}</v-list-item-title>
            </v-list-item>

            <v-list-item @click="SET_PREVIEW_OPEN(!previewOpen)" class="d-lg-none">
              <v-list-item-title v-if="previewOpen">{{ $t('layout.items.previewClose') }}</v-list-item-title>
              <v-list-item-title v-else>{{ $t('layout.items.previewOpen') }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
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
    ...mapState(['previewOpen', 'locale', 'exampleActive']),

    locales() {
      return [
        { text: this.$t('language.en'), value: 'en' },
        { text: this.$t('language.es'), value: 'es' },
      ]
    },
  },

  methods: {
    ...mapMutations(['SET_PREVIEW_OPEN', 'SET_LANG', 'SET_EXAMPLE_ACTIVE']),

    setLanguage(value) {
      this.SET_LANG(value)
      this.$i18n.locale = value
    },

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
