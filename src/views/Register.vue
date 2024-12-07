<template>
    <div class="register-page">
        <h1>Register</h1>
        <v-sheet>
            <v-form @submit.prevent>
                <v-text-field
                    v-model="username"
                    label="Username"
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    label="Email"
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
                ></v-text-field>
                <v-text-field
                    v-model="confirmPassword"
                    :rules="rules"
                    label="Confirm Password"
                ></v-text-field>
                <Button title="Register" color="success" type="submit" class="w-100 mb-3" />
            </v-form>
        </v-sheet>
        <div>
            <RouterLink to="/login">Already have an account? Login now!</RouterLink>
        </div>
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