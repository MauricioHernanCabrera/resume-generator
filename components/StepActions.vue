<template>
  <div class="d-flex">
    <v-btn v-if="hasBack" text @click="backStep">Back</v-btn>

    <v-spacer></v-spacer>

    <v-btn v-if="hasContinue" color="primary" @click="nextStep">Continue</v-btn>

    <v-btn v-else color="primary" @click="generateResume">
      Generate Resume
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      required: true,
    },
    maxStep: {
      required: true,
    },
  },

  computed: {
    hasBack() {
      return this.currentStep > 1
    },
    hasContinue() {
      return this.currentStep < this.maxStep
    },
  },

  methods: {
    backStep() {
      this.$emit('back-step', this.currentStep - 1)
    },

    nextStep() {
      this.$emit('next-step', this.currentStep + 1)
    },

    generateResume() {
      this.$emit('generate-resume')
    },
  },
}
</script>

<style lang="scss" scoped></style>
