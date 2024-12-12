<template>
    <div class="country-flag">
        <v-img :src="country.flag" alt="Malaysia Flag" :width="250" :height="250" class="trip-planner-country-flag"></v-img>
        <h2 class="text-center">{{ country.name }}</h2>
    </div>
    <div class="my-3 text-center">
        {{ country.start_date }} - {{ country.end_date }}
    </div>
    <div class="text-center">
        <div v-if="country.status == 0">
            <v-btn></v-btn>
        </div>
    </div>
    <v-row v-for="(state, i) in states" :key="i" class="align-center">
        <v-checkbox color="primary" hide-details></v-checkbox>
        {{ state.name }}
    </v-row>

</template>

<script>
export default {
    data() {
        return {
            country: {
                name: "Malaysia",
                flag: "/images/flags/malaysia.png",
                start_date: "9/10/2025",
                end_date: "15/10/2025",
                status: 0,
                budget: 2000
            },
            states: [
                { name: 'Kedah', date: "9/10/2025",},
                { name: 'Negeri Sembilan', date: "12/10/2025",},
                { name: 'Johor', date: "14/10/2025",},
                { name: 'Sabah', date: "15/10/2025",}
            ],
            lists: [
                { title: "Eat food at Sabah" },
                { title: "Visit local places in Johor" },
                { title: "Visit relative in Kedah" },
                { title: "Take photo in Negeri Sembilan" }
            ]
        }
    }
}
</script>