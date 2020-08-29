<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" xl="8">
        <v-stepper v-model="currentStep" alt-labels>
          <v-stepper-header>
            <template v-for="stepNumber in maxStep">
              <v-stepper-step
                :key="`${stepNumber}-step`"
                :complete="currentStep > stepNumber"
                :step="stepNumber"
                :editable="true"
              >{{ stepNames[stepNumber] || 'Default Step' }}</v-stepper-step>

              <v-divider v-if="stepNumber !== maxStep" :key="stepNumber"></v-divider>
            </template>
          </v-stepper-header>

          <v-stepper-items>
            <!-- personal_details -->
            <v-stepper-content step="1">
              <v-row>
                <v-col cols="12" sm="6" class="py-0">
                  <v-text-field
                    v-model="form.jobTitle"
                    label="Job title"
                    placeholder="Software Engineer"
                    filled
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6" class="py-0">
                  <v-text-field
                    v-model="form.firstName"
                    label="First name"
                    placeholder="Mauricio Hernan"
                    filled
                  />
                </v-col>

                <v-col cols="12" sm="6" class="py-0">
                  <v-text-field
                    v-model="form.lastName"
                    label="Last name"
                    placeholder="Cabrera"
                    filled
                  />
                </v-col>

                <v-col cols="12" sm="6" class="py-0">
                  <v-text-field
                    v-model="form.email"
                    label="Job title"
                    placeholder="Software Engineer"
                    filled
                  />
                </v-col>

                <v-col cols="12" sm="6" class="py-0">
                  <v-text-field
                    v-model="form.phone"
                    label="Phone"
                    placeholder="5493794883889"
                    filled
                  />
                </v-col>

                <v-col cols="12" class="py-0">
                  <v-textarea
                    v-model="form.professionalSummary"
                    label="Professional Summary"
                    placeholder="I'm a full-stack developer, specialising in web platform and security. If you're a forward-thinking organisation that's supportive of diversity and great development practices, I'd love to hear from you!"
                    filled
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

            <!-- experience -->
            <v-stepper-content step="2">
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-expansion-panels multiple>
                    <v-expansion-panel v-for="job in form.jobs" :key="job.id">
                      <v-expansion-panel-header>
                        <v-row>
                          <v-col cols="12" class="py-0 mb-2">
                            <span class="d-block font-weight-bold">
                              {{ job.title? job.title : '(Not specified)' }}
                              {{ job.title && job.employer? 'at' : '' }}
                              {{ job.employer }}
                            </span>
                          </v-col>
                          <v-col cols="12" class="py-0">
                            <span
                              class="d-inline-block font-weight-medium grey--text text--lighten-1"
                            >
                              {{ job.startDate }}
                              {{ job.startDate && job.endDate? '-' : '' }}
                              {{ job.endDate }}
                            </span>
                            <span
                              class="d-inline-block font-weight-medium grey--text text--lighten-1"
                            ></span>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-header>

                      <v-expansion-panel-content>
                        <v-row>
                          <v-col cols="12" sm="6" class="py-0">
                            <v-text-field
                              v-model="job.title"
                              label="Job title"
                              placeholder="Core Developer"
                              filled
                            />
                          </v-col>

                          <v-col cols="12" sm="6" class="py-0">
                            <v-text-field
                              v-model="job.employer"
                              label="Employer"
                              placeholder="Bootstrap"
                              filled
                            />
                          </v-col>

                          <v-col cols="6" sm="3" class="py-0">
                            <v-menu
                              v-model="job.startDateOpen"
                              transition="scale-transition"
                              offset-y
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="job.startDate"
                                  label="Start date"
                                  readonly
                                  filled
                                  v-bind="attrs"
                                  v-on="on"
                                ></v-text-field>
                              </template>

                              <v-date-picker
                                v-model="job.startDate"
                                no-title
                                scrollable
                                type="month"
                              />
                            </v-menu>
                          </v-col>

                          <v-col cols="6" sm="3" class="py-0">
                            <v-menu
                              v-model="job.endDateOpen"
                              transition="scale-transition"
                              offset-y
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  clearable
                                  v-model="job.endDate"
                                  label="End date"
                                  placeholder="-"
                                  readonly
                                  filled
                                  v-bind="attrs"
                                  v-on="on"
                                ></v-text-field>
                              </template>

                              <v-date-picker
                                v-model="job.endDate"
                                no-title
                                scrollable
                                type="month"
                              />
                            </v-menu>
                          </v-col>

                          <v-col cols="12" sm="6" class="py-0">
                            <v-text-field
                              v-model="job.url"
                              label="Employer url"
                              placeholder="https://bootstrap.com"
                              filled
                            />
                          </v-col>

                          <v-col cols="12" class="py-0">
                            <v-textarea
                              v-model="job.description"
                              label="Description"
                              placeholder="Bootstrap is the most popular web framework in the world, emphasizing accessibility for design-oriented staff and reliability across browsers."
                              filled
                            />
                          </v-col>

                          <v-col cols="12" class="py-0 d-flex">
                            <v-spacer></v-spacer>
                            <v-btn
                              color="primary"
                              text
                              @click="deleteItem(form.jobs, job.id)"
                            >Delete</v-btn>
                            <v-spacer></v-spacer>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>

                <v-col cols="12">
                  <v-btn
                    color="primary"
                    text
                    block
                    class="d-flex justify-start"
                    @click="addItem(form.jobs)"
                  >
                    <v-icon class="mr-2">mdi-plus</v-icon>Add employment
                  </v-btn>
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

            <!-- education -->
            <v-stepper-content step="3">
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-expansion-panels multiple>
                    <v-expansion-panel v-for="education in form.educations" :key="education.id">
                      <v-expansion-panel-header>
                        <v-row>
                          <v-col cols="12" class="py-0 mb-2">
                            <span class="d-block font-weight-bold">
                              {{ education.degree? education.degree : '(Not specified)' }}
                              {{ education.degree && education.school? ',' : '' }}
                              {{ education.school }}
                            </span>
                          </v-col>
                          <v-col cols="12" class="py-0">
                            <span
                              class="d-inline-block font-weight-medium grey--text text--lighten-1"
                            >
                              {{ education.startDate }}
                              {{ education.startDate && education.endDate? '-' : '' }}
                              {{ education.endDate }}
                            </span>
                            <span
                              class="d-inline-block font-weight-medium grey--text text--lighten-1"
                            ></span>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-header>

                      <v-expansion-panel-content>
                        <v-row>
                          <v-col cols="12" sm="6" class="py-0">
                            <v-text-field
                              v-model="education.school"
                              label="School"
                              placeholder="Monash University"
                              filled
                            />
                          </v-col>

                          <v-col cols="12" sm="6" class="py-0">
                            <v-text-field
                              v-model="education.degree"
                              label="Degree"
                              placeholder="Bachelor of Science and Computer Science"
                              filled
                            />
                          </v-col>

                          <v-col cols="6" sm="3" class="py-0">
                            <v-menu
                              v-model="education.startDateOpen"
                              transition="scale-transition"
                              offset-y
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="education.startDate"
                                  label="Start date"
                                  readonly
                                  filled
                                  v-bind="attrs"
                                  v-on="on"
                                ></v-text-field>
                              </template>

                              <v-date-picker
                                v-model="education.startDate"
                                no-title
                                scrollable
                                type="month"
                              />
                            </v-menu>
                          </v-col>

                          <v-col cols="6" sm="3" class="py-0">
                            <v-menu
                              v-model="education.endDateOpen"
                              transition="scale-transition"
                              offset-y
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  clearable
                                  v-model="education.endDate"
                                  label="End date"
                                  placeholder="-"
                                  readonly
                                  filled
                                  v-bind="attrs"
                                  v-on="on"
                                ></v-text-field>
                              </template>

                              <v-date-picker
                                v-model="education.endDate"
                                no-title
                                scrollable
                                type="month"
                              />
                            </v-menu>
                          </v-col>

                          <v-col cols="12" sm="6" class="py-0">
                            <v-text-field
                              v-model="education.city"
                              label="City"
                              placeholder="United State"
                              filled
                            />
                          </v-col>

                          <v-col cols="12" class="py-0 d-flex">
                            <v-spacer></v-spacer>
                            <v-btn
                              color="primary"
                              text
                              @click="deleteItem(form.educations, education.id)"
                            >Delete</v-btn>
                            <v-spacer></v-spacer>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>

                <v-col cols="12">
                  <v-btn
                    color="primary"
                    text
                    block
                    class="d-flex justify-start"
                    @click="addItem(form.educations)"
                  >
                    <v-icon class="mr-2">mdi-plus</v-icon>Add education
                  </v-btn>
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

            <v-stepper-content step="4">
              <v-row>
                <v-col cols="12" class="py-0">Skills</v-col>
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
                <v-col cols="12" class="py-0">Open Source</v-col>
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
import { findIndex } from 'lodash'

const DEFAULT_JOB = {
  title: '',
  url: '',
  employer: '',
  startDate: new Date().toISOString().substr(0, 7),
  endDate: null,
  startDateOpen: false,
  endDateOpen: false,
  city: '',
  description: '',
}

const DEFAULT_EDUCATION = {
  school: '',
  degree: '',
  startDate: new Date().toISOString().substr(0, 7),
  endDate: null,
  startDateOpen: false,
  endDateOpen: false,
  city: '',
}

export default {
  name: 'Home',

  components: {
    StepActions,
  },

  data() {
    return {
      currentStep: 2,
      maxStep: 5,
      form: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        phone: '',
        email: '',
        jobs: [
          {
            id: '1',
            ...DEFAULT_JOB,
          },
        ],
        educations: [
          {
            id: '1',
            ...DEFAULT_EDUCATION,
          },
        ],
      },
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      stepNames: {
        1: 'Personal Details',
        2: 'Experience',
        3: 'Education',
        4: 'Projects',
        5: 'Skills',
        6: 'Open Source',
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

    addItem(array) {
      array.push({
        id: Date.now(),
        ...DEFAULT_JOB,
      })
    },

    deleteItem(array, id) {
      const arrayIndex = findIndex(array, ['id', id])
      array.splice(arrayIndex, 1)
    },
  },
}
</script>
