<template>
    <div class="login-page">
        <h1>Login</h1>
        <v-sheet>
            <v-form @submit.prevent>
                <v-text-field
                    v-model="username"
                    label="Username"
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
                ></v-text-field>
                <ButtonComponent title="Login" color="success" type="submit" class="w-100 mb-3" />
            </v-form>
        </v-sheet>
        <v-row>
            <v-col cols="6">
                <RouterLink to="/login">Forgot your password?</RouterLink>
            </v-col>
            <v-col cols="6" class="text-right">
                <RouterLink to="/register">Don't have an account? Register now!</RouterLink>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

// import Button from '@/components/BaseButton.vue';
const ButtonComponent = defineAsyncComponent(() =>
    import("@/components/BaseButton.vue")
);
export default {
    components: {
        ButtonComponent
    }
}
</script>