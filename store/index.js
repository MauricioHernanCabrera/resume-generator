export const state = () => ({
  previewOpen: false,

  locales: ['en', 'es'],
  locale: 'es',
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
}
