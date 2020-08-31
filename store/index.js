export const state = () => ({
  previewOpen: false,
})

export const mutations = {
  SET_PREVIEW_OPEN: (state, payload) => {
    state.previewOpen = payload
  },
}
