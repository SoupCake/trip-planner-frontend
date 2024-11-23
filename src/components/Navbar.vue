<template>
    <div class="container-base">
        <v-row class="py-5">
            <v-col cols="8">
                <RouterLink to="/" class="nav-link">Home</RouterLink>
                <RouterLink to="/about" class="nav-link">About</RouterLink>
                <RouterLink to="/my-trip-planner" class="nav-link">My Trips</RouterLink>
            </v-col>
            <v-col cols="4" class="text-right">
                <RouterLink to="/login" class="nav-link">
                    <Button title="Login" class="nav-btn" />
                </RouterLink>
                <RouterLink to="/register">
                    <!-- <v-btn class="nav-btn">Register</v-btn> -->
                    <Button title="Register" class="nav-btn" />
                </RouterLink>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-container class="px-0">
            <RouterView />
        </v-container>
    </div>
</template>

<script>
import Button from './BaseButton.vue';
export default {
    components: {
        Button
    }
}
</script>