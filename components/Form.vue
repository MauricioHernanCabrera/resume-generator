<template>
  <v-row class="form">
    <!-- personal_details -->
    <v-col cols="12" class="py-0 px-0">
      <v-row>
        <v-col cols="12" class="pt-0">
          <h2 class="text-h6 font-weight-bold">{{ $t('components.form.personalDetails.title') }}</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="form.personalDetails.jobTitle"
            :label="$t('components.form.personalDetails.fields.jobTitle.label')"
            :placeholder="$t('components.form.personalDetails.fields.jobTitle.placeholder')"
            filled
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="form.personalDetails.firstName"
            :label="$t('components.form.personalDetails.fields.firstName.label')"
            placeholder="Mauricio Hernan"
            filled
          />
        </v-col>

        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="form.personalDetails.lastName"
            :label="$t('components.form.personalDetails.fields.lastName.label')"
            placeholder="Cabrera"
            filled
          />
        </v-col>

        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="form.personalDetails.email"
            :label="$t('components.form.personalDetails.fields.email.label')"
            placeholder="bardihardorow@gmail.com"
            filled
          />
        </v-col>

        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="form.personalDetails.phone"
            :label="$t('components.form.personalDetails.fields.phone.label')"
            placeholder="5493794883889"
            filled
          />
        </v-col>

        <v-col cols="12" class="py-0">
          <v-textarea
            v-model="form.personalDetails.professionalSummary"
            :label="$t('components.form.personalDetails.fields.professionalSummary.label')"
            :placeholder="$t('components.form.personalDetails.fields.professionalSummary.placeholder')"
            filled
          />
        </v-col>
      </v-row>
    </v-col>

    <!-- experience -->
    <v-col cols="12" class="px-0">
      <v-row>
        <v-col cols="12">
          <h2 class="text-h6 font-weight-bold">{{ $t('components.form.experience.title') }}</h2>
          <p
            class="text-subtitle-2 font-weight-normal grey--text text--lighten-1"
          >{{ $t('components.form.experience.subtitle') }}</p>
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
                      {{ job.title? job.title : `(${$t('shared.notSpecified')})` }}{{ job.title && job.employer? ', ' : '' }}
                      {{ job.employer }}
                    </span>
                  </v-col>

                  <v-col cols="12" class="py-0">
                    <span
                      class="text-subtitle-2 d-inline-block font-weight-normal grey--text text--lighten-1"
                    >
                      <template v-if="job.startDate">{{ job.startDate | monthYear }}</template>
                      {{ job.startDate && job.endDate? '—' : '' }}
                      {{ job.startDate && !job.endDate? `— ${$t('shared.present')}` : '' }}
                      <template
                        v-if="job.endDate"
                      >{{ job.endDate | monthYear }}</template>
                    </span>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-row>
                  <v-col cols="12" sm="6" class="py-0">
                    <v-text-field
                      v-model="job.title"
                      :label="$t('components.form.experience.fields.title.label')"
                      :placeholder="$t('components.form.experience.fields.title.placeholder')"
                      filled
                    />
                  </v-col>

                  <v-col cols="12" sm="6" class="py-0">
                    <v-text-field
                      v-model="job.employer"
                      :label="$t('components.form.experience.fields.employer.label')"
                      :placeholder="$t('components.form.experience.fields.employer.placeholder')"
                      filled
                    />
                  </v-col>

                  <v-col cols="6" sm="3" class="py-0">
                    <v-menu v-model="job.startDateOpen" transition="scale-transition" offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="job.startDate"
                          :label="$t('components.form.experience.fields.startDate.label')"
                          readonly
                          filled
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>

                      <v-date-picker v-model="job.startDate" no-title scrollable type="month" />
                    </v-menu>
                  </v-col>

                  <v-col cols="6" sm="3" class="py-0">
                    <v-menu v-model="job.endDateOpen" transition="scale-transition" offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          clearable
                          v-model="job.endDate"
                          :label="$t('components.form.experience.fields.endDate.label')"
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
                      :label="$t('components.form.experience.fields.url.label')"
                      placeholder="https://bootstrap.com"
                      filled
                    />
                  </v-col>

                  <v-col cols="12" class="py-0">
                    <v-textarea
                      v-model="job.description"
                      :label="$t('components.form.experience.fields.description.label')"
                      :placeholder="$t('components.form.experience.fields.description.placeholder')"
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
                    >{{ $t('components.form.experience.deleteItem') }}</v-btn>
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
            <v-icon class="mr-2">mdi-plus</v-icon>
            {{ $t('components.form.experience.addItem') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>

    <!-- education -->
    <v-col cols="12" class="px-0">
      <v-row>
        <v-col cols="12">
          <h2 class="text-h6 font-weight-bold">{{ $t('components.form.education.title') }}</h2>
          <p
            class="text-subtitle-2 font-weight-normal grey--text text--lighten-1"
          >{{ $t('components.form.education.subtitle') }}</p>
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
                      {{ education.degree? education.degree : `(${$t('shared.notSpecified')})` }}
                      {{ education.degree && education.school? ',' : '' }}
                      {{ education.school }}
                    </span>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <span
                      class="text-subtitle-2 d-inline-block font-weight-normal grey--text text--lighten-1"
                    >
                      <template v-if="education.startDate">{{ education.startDate | monthYear }}</template>
                      {{ education.startDate && education.endDate? '—' : '' }}
                      {{ education.startDate && !education.endDate? `— ${$t('shared.present')}` : '' }}
                      <template
                        v-if="education.endDate"
                      >{{ education.endDate | monthYear }}</template>
                    </span>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-row>
                  <v-col cols="12" sm="6" class="py-0">
                    <v-text-field
                      v-model="education.school"
                      :label="$t('components.form.education.fields.school.label')"
                      :placeholder="$t('components.form.education.fields.school.placeholder')"
                      filled
                    />
                  </v-col>

                  <v-col cols="12" sm="6" class="py-0">
                    <v-text-field
                      v-model="education.degree"
                      :label="$t('components.form.education.fields.degree.label')"
                      :placeholder="$t('components.form.education.fields.degree.placeholder')"
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
                          :label="$t('components.form.education.fields.startDate.label')"
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
                    <v-menu v-model="education.endDateOpen" transition="scale-transition" offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          clearable
                          v-model="education.endDate"
                          :label="$t('components.form.education.fields.endDate.label')"
                          placeholder="-"
                          readonly
                          filled
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>

                      <v-date-picker v-model="education.endDate" no-title scrollable type="month" />
                    </v-menu>
                  </v-col>

                  <v-col cols="12" sm="6" class="py-0">
                    <v-text-field
                      v-model="education.city"
                      :label="$t('components.form.education.fields.city.label')"
                      :placeholder="$t('components.form.education.fields.city.placeholder')"
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
                    >{{ $t('components.form.education.deleteItem') }}</v-btn>
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
            <v-icon class="mr-2">mdi-plus</v-icon>
            {{ $t('components.form.education.addItem') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>

    <!-- links -->
    <v-col cols="12" class="px-0">
      <v-row>
        <v-col cols="12">
          <h2 class="text-h6 font-weight-bold">{{ $t('components.form.link.title') }}</h2>
          <p
            class="text-subtitle-2 font-weight-normal grey--text text--lighten-1"
          >{{ $t('components.form.link.subtitle') }}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="py-0">
          <v-expansion-panels inset>
            <v-expansion-panel v-for="link in form.links" :key="link.id">
              <v-expansion-panel-header>
                <v-row>
                  <v-col cols="12" class="py-0 mb-2">
                    <span
                      class="d-block font-weight-bold"
                    >{{ link.label? link.label : `(${$t('shared.notSpecified')})` }}</span>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <span
                      class="text-subtitle-2 d-inline-block font-weight-normal grey--text text--lighten-1"
                    >{{ link.link }}</span>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-row>
                  <v-col cols="12" sm="6" class="py-0">
                    <v-text-field
                      v-model="link.label"
                      :label="$t('components.form.link.fields.label.label')"
                      :placeholder="$t('components.form.link.fields.label.placeholder')"
                      filled
                    />
                  </v-col>

                  <v-col cols="12" sm="6" class="py-0">
                    <v-text-field
                      v-model="link.link"
                      :label="$t('components.form.link.fields.link.label')"
                      placeholder="https://github.com/mauriciohernancabrera"
                      filled
                    />
                  </v-col>

                  <v-col cols="12" class="py-0 d-flex">
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      text
                      class="text-none font-weight-bold"
                      @click="deleteItem(form.links, link.id)"
                    >{{ $t('components.form.link.deleteItem') }}</v-btn>
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
            @click="addItem(form.links, DEFAULT_LINK)"
          >
            <v-icon class="mr-2">mdi-plus</v-icon>
            {{ $t('components.form.link.addItem') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>

    <!-- skills -->
    <v-col cols="12" class="px-0">
      <v-row>
        <v-col cols="12">
          <h2 class="text-h6 font-weight-bold">{{ $t('components.form.skill.title') }}</h2>
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
                    >{{ skill.name? skill.name : `(${$t('shared.notSpecified')})` }}</span>
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
                      :label="$t('components.form.skill.fields.name.label')"
                      :placeholder="$t('components.form.skill.fields.name.placeholder')"
                      filled
                    />
                  </v-col>

                  <v-col cols="12" sm="6" class="py-0">
                    <v-combobox
                      v-model="skill.category"
                      :items="categories"
                      clearable
                      filled
                      :label="$t('components.form.skill.fields.category.label')"
                      :placeholder="$t('components.form.skill.fields.category.placeholder')"
                    />
                  </v-col>

                  <v-col cols="12" class="py-0 d-flex">
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      text
                      class="text-none font-weight-bold"
                      @click="deleteItem(form.skills, skill.id)"
                    >{{ $t('components.form.skill.deleteItem') }}</v-btn>
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
            <v-icon class="mr-2">mdi-plus</v-icon>
            {{ $t('components.form.skill.addItem') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { findIndex } from 'lodash'
import { DEFAULT_LINK } from '@/const/link'
import { DEFAULT_JOB } from '@/const/job'
import { DEFAULT_EDUCATION } from '@/const/education'
import { DEFAULT_SKILL } from '@/const/skill'
import { monthYear } from '@/helpers/moment'

export default {
  name: 'Form',

  props: {
    form: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      DEFAULT_JOB,
      DEFAULT_EDUCATION,
      DEFAULT_SKILL,
      DEFAULT_LINK,
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

  filters: {
    monthYear,
  },
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/utils.scss';
.form {
  padding: 32px;

  @include breakpoint(sm) {
    padding: 48px 64px;
  }
}
</style>