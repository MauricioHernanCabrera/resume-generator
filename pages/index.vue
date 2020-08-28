<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-stepper v-model="currentStep" alt-labels>
          <v-stepper-header>
            <template v-for="stepNumber in maxStep">
              <v-stepper-step
                :key="`${stepNumber}-step`"
                :complete="currentStep > stepNumber"
                :step="stepNumber"
                :editable="true"
              >
                {{ stepNames[stepNumber] || 'Default Step' }}
              </v-stepper-step>

              <v-divider
                v-if="stepNumber !== maxStep"
                :key="stepNumber"
              ></v-divider>
            </template>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-text-field
                    v-model="form.fullName"
                    label="Full name"
                    placeholder="Mauricio Hernan Cabrera"
                  />
                </v-col>

                <v-col cols="12" class="py-0">
                  <v-text-field
                    v-model="form.jobTitle"
                    label="Job title"
                    placeholder="Software Engineer"
                  />
                </v-col>

                <v-col cols="12" class="py-0">
                  <v-textarea
                    v-model="form.biography"
                    label="Biography"
                    placeholder="I'm a full-stack developer, specialising in web platform and security. If you're a forward-thinking organisation that's supportive of diversity and great development practices, I'd love to hear from you!"
                  />
                </v-col>

                <v-col cols="12" class="py-0">
                  <step-actions
                    :currentStep="currentStep"
                    :maxStep="maxStep"
                    @back-step="backStep"
                    @next-step="nextStep"
                  ></step-actions>
                </v-col>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-row>
                <v-col cols="12" class="py-0"> Experience </v-col>
                <v-col cols="12" class="py-0">
                  <step-actions
                    :currentStep="currentStep"
                    :maxStep="maxStep"
                    @back-step="backStep"
                    @next-step="nextStep"
                  ></step-actions>
                </v-col>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-row>
                <v-col cols="12" class="py-0"> Projects </v-col>
                <v-col cols="12" class="py-0">
                  <step-actions
                    :currentStep="currentStep"
                    :maxStep="maxStep"
                    @back-step="backStep"
                    @next-step="nextStep"
                  ></step-actions>
                </v-col>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-row>
                <v-col cols="12" class="py-0"> Skills </v-col>
                <v-col cols="12" class="py-0">
                  <step-actions
                    :currentStep="currentStep"
                    :maxStep="maxStep"
                    @back-step="backStep"
                    @next-step="nextStep"
                  ></step-actions>
                </v-col>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="5">
              <v-row>
                <v-col cols="12" class="py-0"> Open Source </v-col>
                <v-col cols="12" class="py-0">
                  <step-actions
                    :currentStep="currentStep"
                    :maxStep="maxStep"
                    @back-step="backStep"
                    @next-step="nextStep"
                    @generate-resume="generateResume"
                  ></step-actions>
                </v-col>
              </v-row>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StepActions from '@/components/StepActions'

export default {
  name: 'Home',

  components: {
    StepActions,
  },

  data() {
    return {
      currentStep: 1,
      maxStep: 5,
      form: {
        fullName: '',
        jobTitle: '',
        biography: '',
      },
      stepNames: {
        1: 'About me',
        2: 'Experience',
        3: 'Projects',
        4: 'Skills',
        5: 'Open Source',
      },
    }
  },

  watch: {
    maxStep(val) {
      if (this.currentStep > val) {
        this.currentStep = val
      }
    },
  },

  methods: {
    onInput(val) {
      this.maxStep = parseInt(val)
    },

    backStep(n) {
      this.currentStep = n
    },

    nextStep(n) {
      this.currentStep = n
    },

    generateResume() {
      this.currentStep = 1
      console.log('generateResume')
    },
  },
}
</script>
