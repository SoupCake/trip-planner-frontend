<template>
    <div class="container-base">
        <v-row class="pt-5">
            <v-col cols="8" class="px-0">
                <RouterLink to="/" class="nav-link">Home</RouterLink>
                <RouterLink to="/about" class="nav-link">About</RouterLink>
            </v-col>
            <v-col cols="4" class="text-right px-0">
                <RouterLink to="/login" class="nav-link">Login</RouterLink>
                <RouterLink to="/register">Register</RouterLink>
            </v-col>
            <v-divider></v-divider>
            <RouterView />
        </v-row>
    </div>
</template>