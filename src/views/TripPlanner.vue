<template>
    <h1>My Trip Planner - Malaysia</h1>
    <v-checkbox v-for="(state, i) in states" :key="i" :label="state.name" color="primary"></v-checkbox>
</template>

<script>
export default {
    data() {
        return {
            states: [
                { name: 'Kedah', date: "9/10/2025",},
                { name: 'Negeri Sembilan', date: "12/10/2025",},
                { name: 'Johor', date: "14/10/2025",},
                { name: 'Sabah', date: "15/10/2025",}
            ]
        }
    }
}
</script>