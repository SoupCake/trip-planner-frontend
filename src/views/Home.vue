<template>
  <div class="section-1 py-10">
    <h1 class="main-title">Crafting Journeys That Inspire</h1>
    <p class="main-subtitle">Plan, organize and set your goal with ease</p>
  </div>

  <v-row class="py-10">
    <v-col cols="6">
      <v-img src="/images/homepage/van.webp" rounded class="trip-image-1"></v-img>
    </v-col>
    <v-col cols="6"></v-col>
    <v-col cols="6"></v-col>
    <v-col cols="6">
      <v-img src="/images/homepage/plan.webp" rounded class="trip-image-2"></v-img>
    </v-col>
  </v-row>

  <div class="my-10" v-if="$vuetify.display.mdAndUp">
    <v-timeline direction="horizontal" line-inset="12">
      <v-timeline-item v-for="(content, i) in timeline_contents" :key="i" dot-color="#72CAE2">
        <template v-slot:icon>
          <v-icon color="white">{{ content.icon }}</v-icon>
        </template>
        <template v-if="i % 2 != 0">
          <div class="timeline-content text-center">
            <p>{{ content.content }}</p>
          </div>
        </template>
        <template #opposite v-if="i % 2 == 0">
          <div class="timeline-content text-center">
            <p>{{ content.content }}</p>
          </div>
        </template>
      </v-timeline-item>
    </v-timeline>
  </div>
  <div class="my-10" v-else>
    <v-timeline>
      <v-timeline-item v-for="(content, i) in timeline_contents" :key="i" dot-color="#72CAE2">
        <template v-slot:icon>
          <v-icon color="white">{{ content.icon }}</v-icon>
        </template>
        <template #opposite v-if="i % 2 != 0">
          <div class="timeline-content">
            <p>{{ content.content }}</p>
          </div>
        </template>
        <template v-if="i % 2 == 0">
          <div class="timeline-content">
            <p>{{ content.content }}</p>
          </div>
        </template>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgColor: false,
      timeline_contents: [
        { icon: "mdi-map-marker", content: "Plan your destination" },
        { icon: "mdi-list-box", content: "List down your activities" },
        { icon: "mdi-airplane", content: "Travel to your holiday destination" },
        { icon: "mdi-format-list-checks", content: "Keep track of your activities" },
        { icon: "mdi-check", content: "Complete your journey!" },
      ]
    }
  }
}
</script>

<style scoped>
 .section-1 {
  text-align: center;
 }
</style>