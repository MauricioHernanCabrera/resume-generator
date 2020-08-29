<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6" class="py-0">
        <v-row class="px-15">
          <!-- personal_details -->
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <h2 class="text-h6 font-weight-bold">Personal details</h2>
              </v-col>
            </v-row>

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
                  v-model="form.personalDetails.firstName"
                  label="First name"
                  placeholder="Mauricio Hernan"
                  filled
                />
              </v-col>

              <v-col cols="12" sm="6" class="py-0">
                <v-text-field
                  v-model="form.personalDetails.lastName"
                  label="Last name"
                  placeholder="Cabrera"
                  filled
                />
              </v-col>

              <v-col cols="12" sm="6" class="py-0">
                <v-text-field
                  v-model="form.personalDetails.email"
                  label="Job title"
                  placeholder="Software Engineer"
                  filled
                />
              </v-col>

              <v-col cols="12" sm="6" class="py-0">
                <v-text-field
                  v-model="form.personalDetails.phone"
                  label="Phone"
                  placeholder="5493794883889"
                  filled
                />
              </v-col>

              <v-col cols="12" class="py-0">
                <v-textarea
                  v-model="form.personalDetails.professionalSummary"
                  label="Professional Summary"
                  placeholder="I'm a full-stack developer, specialising in web platform and security. If you're a forward-thinking organisation that's supportive of diversity and great development practices, I'd love to hear from you!"
                  filled
                />
              </v-col>
            </v-row>
          </v-col>

          <!-- experience -->
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <h2 class="text-h6 font-weight-bold">Employment History</h2>
                <p
                  class="text-subtitle-2 font-weight-normal grey--text text--lighten-1"
                >Include your last 10 years of relevant experience and dates in this section. List your most recent position first.</p>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="py-0">
                <v-expansion-panels inset>
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
                            class="text-subtitle-2 d-inline-block font-weight-normal grey--text text--lighten-1"
                          >
                            {{ job.startDate }}
                            {{ job.startDate && job.endDate? '-' : '' }}
                            {{ job.endDate }}
                          </span>
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
                          <v-menu v-model="job.endDateOpen" transition="scale-transition" offset-y>
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

                            <v-date-picker v-model="job.endDate" no-title scrollable type="month" />
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
                            class="text-none font-weight-bold"
                            @click="deleteItem(form.jobs, job.id)"
                          >Delete</v-btn>
                          <v-spacer></v-spacer>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>

              <v-col cols="12" class="pb-0">
                <v-btn
                  color="primary"
                  text
                  block
                  class="d-flex justify-start text-none font-weight-bold"
                  @click="addItem(form.jobs, DEFAULT_JOB)"
                >
                  <v-icon class="mr-2">mdi-plus</v-icon>Add employment
                </v-btn>
              </v-col>
            </v-row>
          </v-col>

          <!-- education -->
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <h2 class="text-h6 font-weight-bold">Education</h2>
                <p
                  class="text-subtitle-2 font-weight-normal grey--text text--lighten-1"
                >If relevant, include your most recent educational achievements and the dates here</p>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="py-0">
                <v-expansion-panels inset>
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
                            class="text-subtitle-2 d-inline-block font-weight-normal grey--text text--lighten-1"
                          >
                            {{ education.startDate }}
                            {{ education.startDate && education.endDate? '-' : '' }}
                            {{ education.endDate }}
                          </span>
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
                            class="text-none font-weight-bold"
                            @click="deleteItem(form.educations, education.id)"
                          >Delete</v-btn>
                          <v-spacer></v-spacer>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>

              <v-col cols="12" class="pb-0">
                <v-btn
                  color="primary"
                  text
                  block
                  class="d-flex justify-start text-none font-weight-bold"
                  @click="addItem(form.educations, DEFAULT_EDUCATION)"
                >
                  <v-icon class="mr-2">mdi-plus</v-icon>Add education
                </v-btn>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <h2 class="text-h6 font-weight-bold">Websites & Social Links</h2>
                <p
                  class="text-subtitle-2 font-weight-normal grey--text text--lighten-1"
                >You can add links to websites you want hiring managers to see! Perhaps It will be a link to your portfolio, LinkedIn profile, or personal website</p>
              </v-col>
            </v-row>
          </v-col>

          <!-- skills -->
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <h2 class="text-h6 font-weight-bold">Skills</h2>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="py-0">
                <v-expansion-panels inset>
                  <v-expansion-panel v-for="skill in form.skills" :key="skill.id">
                    <v-expansion-panel-header>
                      <v-row>
                        <v-col cols="12" class="py-0 mb-2">
                          <span
                            class="d-block font-weight-bold"
                          >{{ skill.name? skill.name : '(Not specified)' }}</span>
                        </v-col>
                        <v-col cols="12" class="py-0">
                          <span
                            class="text-subtitle-2 d-inline-block font-weight-normal grey--text text--lighten-1"
                          >{{ skill.category }}</span>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                      <v-row>
                        <v-col cols="12" sm="6" class="py-0">
                          <v-text-field
                            v-model="skill.name"
                            label="Skill"
                            placeholder="Javascript"
                            filled
                          />
                        </v-col>

                        <v-col cols="12" sm="6" class="py-0">
                          <v-combobox
                            v-model="skill.category"
                            :items="categories"
                            clearable
                            filled
                            label="Category"
                            placeholder="Frontend"
                          />
                        </v-col>

                        <v-col cols="12" class="py-0 d-flex">
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            text
                            class="text-none font-weight-bold"
                            @click="deleteItem(form.skills, skill.id)"
                          >Delete</v-btn>
                          <v-spacer></v-spacer>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>

              <v-col cols="12" class="pb-0">
                <v-btn
                  color="primary"
                  text
                  block
                  class="d-flex justify-start text-none font-weight-bold"
                  @click="addItem(form.skills, DEFAULT_SKILL)"
                >
                  <v-icon class="mr-2">mdi-plus</v-icon>Add skill
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="6">Preview</v-col>
    </v-row>
  </v-container>
</template>

<script>
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

const DEFAULT_SKILL = {
  name: '',
  category: '',
}

export default {
  name: 'Home',

  data() {
    return {
      DEFAULT_JOB,
      DEFAULT_EDUCATION,
      DEFAULT_SKILL,
      form: {
        personalDetails: {
          firstName: '',
          lastName: '',
          jobTitle: '',
          phone: '',
          email: '',
        },
        jobs: [],
        educations: [],
        skills: [],
        links: [],
      },
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      stepNames: {
        1: 'Personal Details',
        2: 'Experience',
        3: 'Education',
        4: 'Skills',
      },
      chips: null,
      items: ['Streaming', 'Eating'],
    }
  },

  computed: {
    categories() {
      return this.form.skills
        .map(({ category }) => category)
        .filter((item) => !!item)
    },
  },

  methods: {
    addItem(array, defaultItem) {
      array.push({
        id: Date.now(),
        ...defaultItem,
      })
    },

    deleteItem(array, id) {
      const arrayIndex = findIndex(array, ['id', id])
      array.splice(arrayIndex, 1)
    },
  },
}
</script>
