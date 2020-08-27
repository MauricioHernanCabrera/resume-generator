<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="h1">About me</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="py-0">
        <v-text-field label="Full name" placeholder="Mauricio Hernan Cabrera" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="py-0">
        <v-text-field label="Job title" placeholder="Software Engineer" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="py-0">
        <v-textarea
          label="Biography"
          placeholder="I'm a full-stack developer, specialising in web platform and security. If you're a forward-thinking organisation that's supportive of diversity and great development practices, I'd love to hear from you!"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>
