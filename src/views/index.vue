<template>
  <HelloWorld />
  <Button :color='color.sulman'>asdasdasd</Button>
</template>

<script lang="ts" setup>
  import { useTheme } from 'vuetify'
  const $vuetify = useTheme()
  const color = $vuetify.current.value.colors;
</script>
<style lang="scss">
  @import '@/styles/settings.scss';
</style>