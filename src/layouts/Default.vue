<script lang="ts" setup></script>

<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row class="fill-height" justify="center" align="center">
        <v-col class="text-center" cols="12" sm="10" md="8" lg="6">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
