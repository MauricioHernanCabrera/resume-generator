<template>
  <div class="profile">
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
          :href="`tel:+${profile.personalDetails.phone}`"
          class="profile__link"
        >{{ profile.personalDetails.phone }}</a>
      </div>
    </div>

    <div class="profile__main">
      <div class="profile__pre">
        <div class="profile__about">
          <h2 class="profile__title">About</h2>
          <p class="profile__text">{{ profile.personalDetails.professionalSummary }}</p>
        </div>

        <div class="profile__experience">
          <h3 class="profile__title">Experience</h3>

          <ul class="list_experience">
            <li class="list_experience__item" v-for="job in profile.jobs" :key="job.id">
              <h4 class="list_experience__title">
                {{ job.title }},
                <a :href="job.url" class="list_experience__link">{{ job.employer }}</a>
              </h4>

              <span
                class="list_experience__date"
              >{{ job.startDate }} — {{ job.endDate? job.endDate : 'present' }}</span>

              <p class="list_experience__description" v-html="nl2br(job.description)" />
            </li>
          </ul>
        </div>

        <div class="profile__education">
          <h3 class="profile__title">Education</h3>

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

              <span
                class="list_education__date"
              >{{ education.startDate }} — {{ education.endDate? education.endDate : 'present' }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="profile__append">
        <div class="profile__skills">profile__skills</div>
        <div class="profile__social_links">profile__social_links</div>
      </div>
    </div>
  </div>
</template>

<script>
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
}
</script>

<style lang="scss">
$color_light: #d8d8d8;
$color_dark: #2e2e2e;
$color_dark2: #000000;

$profile_divider_color: $color_light;
$profile_link_color: $color_dark;
$profile_title_border_color: $color_dark2;
$list_experience_link_color: $color_dark;

$grid-bp: (
  sm: 600px,
  md: 960px,
  lg: 1264px,
  xl: 1904px,
);

@mixin breakpoint($size) {
  @media screen and (min-width: map-get($grid-bp, $size)) {
    @content;
  }
}

* {
  margin: 0;
  padding: 0;
}

p {
  margin: 0 !important;
}

.profile {
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 64px;
  padding-right: 64px;
  color: $color_dark;
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
  border-bottom: 2px solid $profile_divider_color;
  padding-bottom: 38px;
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
  text-decoration: none;
}

.profile__main {
  display: grid;
  grid-template-columns: 3fr 1fr;
}

.profile__pre {
  border-right: 1px solid $profile_divider_color;
  padding-right: 38px;
  padding-top: 38px;
  padding-bottom: 38px;
}

.profile__about {
  border-bottom: 1px solid $profile_divider_color;
  padding-bottom: 38px;
}

.profile__experience {
  border-bottom: 1px solid $profile_divider_color;
  padding-top: 38px;
  padding-bottom: 38px;
}

.profile__education {
  padding-top: 38px;
}

.profile__append {
  padding-top: 38px;
  padding-left: 38px;
}

.profile__skills {
}

.profile__social_links {
}

.list_experience {
  list-style: none;
  padding: 0 !important;
  margin: 0 !important;
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
  color: $list_experience_link_color !important;
  text-decoration: none;
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
  padding: 0 !important;
  margin: 0 !important;
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
</style>