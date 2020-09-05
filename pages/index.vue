<template>
  <v-container fluid class="home">
    <v-row class="home__main_row" justify="center" v-if="!loading">
      <v-col
        v-show="$vuetify.breakpoint.lgAndUp || !previewOpen"
        cols="12"
        lg="6"
        class="pa-0 home__col_form"
      >
        <app-form :form="form" class="mx-0" />
      </v-col>

      <v-col
        v-show="$vuetify.breakpoint.lgAndUp || previewOpen"
        cols="12"
        lg="6"
        class="pa-0 home__col_preview"
      >
        <app-preview :profile="form" class="mx-0" />
      </v-col>
    </v-row>

    <app-preview :profile="form" class="mx-0" id="profile" />
  </v-container>
</template>

<script>
import AppPreview from '@/components/Preview'
import AppForm from '@/components/Form'
import { DEFAULT_PROFILE, FAKE_PROFILE } from '@/const/profile'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Home',

  components: {
    AppPreview,
    AppForm,
  },

  data() {
    return {
      // form: DEFAULT_PROFILE,
      form: FAKE_PROFILE,
      loading: true,
    }
  },

  mounted() {
    this.loading = false
  },

  watch: {
    '$vuetify.breakpoint.lgAndUp'(newValue, oldValue) {
      if (newValue) {
        this.SET_PREVIEW_OPEN(true)
      } else {
        this.SET_PREVIEW_OPEN(false)
      }
    },
  },

  computed: {
    ...mapState(['previewOpen']),
  },

  methods: {
    ...mapMutations(['SET_PREVIEW_OPEN']),
  },
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/utils.scss';

.home {
  padding: 0;
}

.home__main_row {
}

.home__col_form {
  border-right: 1px solid $home_divider_color;
}

.home__col_preview {
}

#profile {
  position: fixed;
  top: 0;
  left: 0;
  background-color: $color_light;
  width: 1200px;
  z-index: -1;
}
</style>
