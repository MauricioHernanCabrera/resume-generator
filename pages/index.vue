<template>
  <v-container fluid class="home">
    <v-row class="home__main_row">
      <!-- <v-col cols="12" md="6" class="py-0 d-none"> -->
      <v-col cols="12" lg="6" class="pa-0 home__col_form">
        <app-form :form="form" class="mx-0" />
      </v-col>

      <!-- <v-col cols="12" md="12"> -->
      <v-col cols="12" lg="6" class="pa-0 home__col_preview">
        <app-preview :profile="form" class="mx-0" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppPreview from '@/components/Preview'
import AppForm from '@/components/Form'
import { DEFAULT_PROFILE, FAKE_PROFILE } from '@/const/profile'

export default {
  name: 'Home',

  components: {
    AppPreview,
    AppForm,
  },

  data() {
    return {
      form: FAKE_PROFILE,
    }
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
  border-right: 2px solid $home_divider_color;
}

.home__col_preview {
}
</style>
