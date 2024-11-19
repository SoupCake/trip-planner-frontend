<template>
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
            <Button title="Login" color="success" type="submit" />
        </v-form>
    </v-sheet>
    <div>
        <RouterLink to="/login">Forgot your password?</RouterLink>
    </div>
    <div>
        <RouterLink to="/register">Don't have an account? Register now!</RouterLink>
    </div>
</template>

<script>
import Button from '@/components/BaseButton.vue';
export default {
    components: {
        Button
    }
}
</script>