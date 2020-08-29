<template>
  <div>{{ profile }}</div>
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
</style>