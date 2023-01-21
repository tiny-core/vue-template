<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

//------------------------------------------------------------------------------------------------
//  Variables
//------------------------------------------------------------------------------------------------
const { t } = useI18n({
  useScope: 'local',
  inheritLocale: true
})
</script>

<template>
  <div>{{ t('title') }}</div>
</template>

<style scoped></style>

<i18n lang="yaml">
pt-BR:
  title: Vue Template
</i18n>
