export const state = () => ({
  previewOpen: false,
  locales: ['en', 'es'],
  locale: 'en',
  exampleActive: false,
})

export const mutations = {
  SET_PREVIEW_OPEN: (state, payload) => {
    state.previewOpen = payload
  },

  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },

  SET_EXAMPLE_ACTIVE(state, exampleActive) {
    state.exampleActive = exampleActive
  },
}
