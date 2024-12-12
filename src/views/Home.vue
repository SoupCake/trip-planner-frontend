<template>
  <div class="section-1 py-10">
    <h1 class="main-title">Crafting Journeys That Inspire</h1>
    <p class="main-subtitle">Plan, organize and set your goal with ease</p>
  </div>

  <v-row class="py-10">
    <v-col cols="6">
      <v-img src="/images/homepage/van.jpg" rounded class="trip-image-1"></v-img>
    </v-col>
    <v-col cols="6"></v-col>
    <v-col cols="6"></v-col>
    <v-col cols="6">
      <v-img src="/images/homepage/plan.jpg" rounded class="trip-image-2"></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      bgColor: false,
    }
  }
}
</script>

<style scoped>
 .section-1 {
  text-align: center;
 }
</style>