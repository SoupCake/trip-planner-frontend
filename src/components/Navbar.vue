<template>
    <div class="container-base">
        <v-row class="py-5">
            <v-col
                class="d-flex align-center"
                cols="8"
                v-if="$vuetify.display.mdAndUp"
            >
                <RouterLink to="/" class="nav-link">Home</RouterLink>
                <RouterLink to="/about" class="nav-link">About</RouterLink>
                <span v-if="userToken">
                    <RouterLink to="/my-trip-planner" class="nav-link">My Trips</RouterLink>
                    <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
                </span>
            </v-col>
            <v-col cols="2" v-else>
                <div>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </div>
            </v-col>
            <v-col :cols="$vuetify.display.mdAndUp ? '4' : '10'" class="text-right">
                <RouterLink to="/login" class="nav-link">
                    <Button title="Login" class="nav-btn" />
                </RouterLink>
                <RouterLink to="/register">
                    <Button title="Register" class="nav-btn" />
                </RouterLink>

                <!-- <span v-if="!userToken">
                    <RouterLink to="/login" class="nav-link">
                        <Button title="Login" class="nav-btn" />
                    </RouterLink>
                    <RouterLink to="/register">
                        <Button title="Register" class="nav-btn" />
                    </RouterLink>
                </span>
                <span v-else>
                    <RouterLink to="/logout">
                        <Button title="Logout" class="nav-btn" />
                    </RouterLink>
                </span> -->
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
    },
    data() {
        return {
            "userToken": true
        }
    }
}
</script>