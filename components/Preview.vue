<template>
  <div class="profile">
    <div class="profile__header">
      <div class="profile__personal_details">profile__personal_details</div>
      <div class="profile__contact">profile__contact</div>
    </div>

    <div class="profile__main">
      <div class="profile__pre">
        <div class="profile__about">profile__about</div>
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
$profile_divider_color: #d8d8d8;
$profile_title_color: #2e2e2e;
$profile_subtitle_color: #2e2e2e;
$profile_text_color: #2e2e2e;

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

.profile {
}

.profile__title {
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  color: $profile_title_color;
}

.profile__subtitle {
  font-weight: 500;
  font-size: 22px;
  line-height: 34px;
  color: $profile_subtitle_color;
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

.profile__contact {
}

.profile__main {
  display: grid;
  grid-template-columns: 3fr 1fr;
}

.profile__pre {
  border-right: 2px solid $profile_divider_color;
  padding-right: 38px;
  padding-top: 38px;
  padding-bottom: 38px;
}

.profile__about {
  border-bottom: 2px solid $profile_divider_color;
  padding-bottom: 38px;
}

.profile__experience {
  border-bottom: 2px solid $profile_divider_color;
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