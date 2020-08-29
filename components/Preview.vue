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

        <div class="profile__experience">profile__experience</div>
        <div class="profile__education">profile__education</div>
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
}
</script>

<style lang="scss" scoped>
$color_light: #d8d8d8;
$color_dark: #2e2e2e;
$color_dark2: #000000;

$profile_divider_color: $color_light;
$profile_title_color: $color_dark;
$profile_subtitle_color: $color_dark;
$profile_text_color: $color_dark;
$profile_fullname_color: $color_dark;
$profile_job_title_color: $color_dark;
$profile_link_color: $color_dark;
$profile_title_border_color: $color_dark2;

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

p {
  margin: 0;
}

.profile {
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 64px;
  padding-right: 64px;
}

.profile__title {
  font-weight: 500;
  font-size: 22px;
  line-height: 34px;
  text-transform: uppercase;
  color: $profile_subtitle_color;
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
  color: $profile_text_color;
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
  color: $profile_fullname_color;
  margin-bottom: 12px;
}

.profile__job_title {
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: $profile_job_title_color;
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
</style>