<template>
    <h1 class="mb-5">My Dashboard</h1>

    <v-row class="d-flex align-center">
        <v-col cols="1" class="pr-0">
            <RouterLink to="/my-trip-planner">
                <v-btn color="success">+ Create</v-btn>
            </RouterLink>
        </v-col>
        <v-col cols="11">
            <v-toolbar
                dense
                floating
                class="search-bar-section"
            >
                <v-text-field
                    class="search-bar-icon"
                    prepend-icon="mdi-magnify"
                    hide-details
                    single-line
                    placeholder="Search..."
                ></v-text-field>
            </v-toolbar>
        </v-col>
    </v-row>

    <div
        v-if="trip_lists.length > 0"
        class="trip-lists"
    >
        <div v-for="(list, i) in trip_lists" :key="i">
            <RouterLink to="/my-trip-planner">
                <h1>{{ list.title }}</h1>
            </RouterLink>
        </div>
    </div>
    <div v-else class="text-center mt-15">
        <h1 class="mb-5">Your list is empty</h1>
        <RouterLink to="/my-trip-planner">
            <v-btn color="success">Create your first trip now!</v-btn>
        </RouterLink>
    </div>

</template>

<script>
export default {
    data() {
        return {
            // trip_lists: [
            //     { title: "Malaysia" },
            //     { title: "Denmark" },
            //     { title: "Taiwan" },
            //     { title: "Australia" }
            // ],
            trip_lists: [],
        }
    }
}
</script>

<style scoped>
.search-bar-section {
    background-color: unset;
}

::v-deep(.search-bar-section .v-toolbar__content) {
    border-radius: 10px;
}

::v-deep(.search-bar-icon .v-input__prepend) {
    margin: 0px;
    padding: 0px 15px;
    background-color: #72cae2;
}
</style>