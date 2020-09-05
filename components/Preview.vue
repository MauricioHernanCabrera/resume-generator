<template>
  <div class="profile">
    <span class="profile__no_preview" v-if="!isValid">{{ $t('components.preview.invalid') }}</span>

    <template v-else>
      <div class="profile__header">
        <div class="profile__personal_details">
          <h1
            class="profile__fullname"
          >{{ profile.personalDetails.firstName }} {{ profile.personalDetails.lastName }}</h1>
          <p class="profile__job_title">{{ profile.personalDetails.jobTitle }}</p>
        </div>

        <div class="profile__contact">
          <a
            :href="`mailto:${profile.personalDetails.email}`"
            class="profile__link"
          >{{ profile.personalDetails.email }}</a>
          <a
            :href="`tel:${profile.personalDetails.phone}`"
            class="profile__link"
          >{{ profile.personalDetails.phone }}</a>
        </div>
      </div>

      <div class="profile__main">
        <div class="profile__pre">
          <template v-if="profile.personalDetails.professionalSummary.length > 0">
            <div class="profile__section profile__section--about">
              <h2 class="profile__title">{{ $t('components.preview.about') }}</h2>
              <p class="profile__text">{{ profile.personalDetails.professionalSummary }}</p>
            </div>
          </template>

          <template v-if="profile.jobs.length > 0">
            <div class="profile__section profile__section--experience">
              <h3 class="profile__title">{{ $t('components.preview.experience') }}</h3>

              <ul class="list_experience">
                <li class="list_experience__item" v-for="job in profile.jobs" :key="job.id">
                  <h4 class="list_experience__title">
                    {{ job.title }},
                    <a
                      :href="job.url"
                      class="list_experience__link"
                    >{{ job.employer }}</a>
                  </h4>

                  <span class="list_experience__date">
                    {{ job.startDate | monthYear }} —
                    <template
                      v-if="job.endDate"
                    >{{ job.endDate | monthYear }}</template>
                    <template v-else>{{ $t('shared.present') }}</template>
                  </span>

                  <p class="list_experience__description" v-html="nl2br(job.description)" />
                </li>
              </ul>
            </div>
          </template>

          <template v-if="profile.educations.length > 0">
            <div class="profile__section profile__section--education">
              <h3 class="profile__title">{{ $t('components.preview.education') }}</h3>

              <ul class="list_education">
                <li
                  class="list_education__item"
                  v-for="education in profile.educations"
                  :key="education.id"
                >
                  <h4 class="list_education__title">
                    {{ education.degree }}
                    {{ education.degree && education.school? ', ' : '' }}
                    {{ education.school }}
                    {{ education.school && education.city? ', ' : '' }}
                    {{ education.city }}
                  </h4>

                  <span class="list_education__date">
                    {{ education.startDate | monthYear }} —
                    <template
                      v-if="education.endDate"
                    >{{ education.endDate | monthYear }}</template>
                    <template v-else>{{ $t('shared.present') }}</template>
                  </span>
                </li>
              </ul>
            </div>
          </template>
        </div>

        <div class="profile__append">
          <template v-if="profile.skills.length > 0">
            <div class="profile__section profile__section--skills">
              <h3 class="profile__title">{{ $t('components.preview.skill') }}</h3>

              <ul class="list_category">
                <li class="list_category__item" v-for="category in categories" :key="category.name">
                  <h4 class="list_category__title">{{ category.name }}</h4>

                  <ul class="list_skill">
                    <li
                      class="list_skill__item"
                      v-for="skill in category.skills"
                      :key="`${category.name}_${skill}`"
                    >{{ skill }}</li>
                  </ul>
                </li>
              </ul>
            </div>
          </template>

          <template v-if="profile.links.length > 0">
            <div class="profile__section profile__section--social_links">
              <h3 class="profile__title">{{ $t('components.preview.contact') }}</h3>

              <ul class="list_contact">
                <li class="list_contact__item" v-for="link in profile.links" :key="link.id">
                  <a :href="link.link" class="list_contact__link">{{ link.label }}</a>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import arrayToObject from '@/helpers/arrayToObject'
import { monthYear } from '@/helpers/moment'

export default {
  name: 'Preview',

  props: {
    profile: {
      type: Object,
      required: true,
    },
  },

  methods: {
    nl2br(str) {
      return `${str.replace(/\n/g, '<br/>')}`
    },
  },

  computed: {
    isValid() {
      const validations = [
        this.profile.personalDetails.firstName.length > 0,
        this.profile.personalDetails.lastName.length > 0,
        this.profile.personalDetails.jobTitle.length > 0,
      ]
      return validations.every((item) => item)
    },

    categories() {
      const { skills } = this.profile

      const _categories = skills
        .map(({ category }) => category)
        .filter((category) => !!category)
      const uniqueCategories = [...new Set(_categories)]

      const skillCategories = uniqueCategories.map((category) => {
        return {
          name: category,
          skills: skills
            .filter((skill) => skill.category == category)
            .map((skill) => skill.name),
        }
      })

      return skillCategories
    },
  },

  filters: {
    monthYear,
  },
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/utils.scss';

.profile {
  * {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0 !important;
  }

  color: $color_dark;
  padding: 32px;

  @include breakpoint(sm) {
    padding: 48px 64px;
  }

  .profile__title {
    font-weight: 500;
    font-size: 22px;
    line-height: 34px;
    text-transform: uppercase;
    letter-spacing: 3px;
    position: relative;
    margin-bottom: 27px;

    &:after {
      margin-top: 8px;
      width: 38px;
      height: 4px;
      content: '';
      display: block;
      background-color: $profile_title_border_color;
    }
  }

  .profile__subtitle {
  }

  .profile__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }

  .profile__header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 38px;
    border-bottom: 2px solid $profile_divider_color;
  }

  .profile__personal_details {
  }

  .profile__fullname {
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 12px;
  }

  .profile__job_title {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }

  .profile__contact {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .profile__link {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: $profile_link_color;
  }

  .profile__main {
    display: grid;
    grid-template-columns: minmax(0, 3fr) minmax(0, 1fr);
  }

  .profile__pre {
    padding-right: 38px;
    border-right: 1px solid $profile_divider_color;
  }

  .profile__section {
    border-bottom: 1px solid $profile_divider_color;

    &:last-child {
      border-bottom: 0;
    }
  }

  .profile__section--about {
    padding-top: 38px;
    padding-bottom: 38px;
  }

  .profile__section--experience {
    padding-top: 38px;
    padding-bottom: 38px;
  }

  .profile__section--education {
    padding-top: 38px;
    padding-bottom: 38px;
  }

  .profile__append {
    padding-left: 38px;
  }

  .profile__section--skills {
    padding-top: 38px;
    padding-bottom: 38px;
  }

  .profile__section--social_links {
    padding-top: 38px;
    padding-bottom: 38px;
  }

  .list_experience {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .list_experience__item {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .list_experience__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .list_experience__link {
    color: $list_experience_link_color;
  }

  .list_experience__date {
    display: block;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 10px;
  }

  .list_experience__description {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }

  // list_education
  .list_education {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .list_education__item {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .list_education__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .list_education__date {
    display: block;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 10px;
  }

  // list_category
  .list_category {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .list_category__item {
    margin-bottom: 26px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  .list_category__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .list_skill {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .list_skill__item {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }

  // list_contact
  .list_contact {
    padding: 0;
    margin: 0;
    list-style: none;
    word-wrap: break-word;
  }

  .list_contact__item {
  }

  .list_contact__link {
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: $profile_link_color;
  }
}
</style>