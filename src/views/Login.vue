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
            <v-btn color="primary" type="submit">Submit</v-btn>
        </v-form>
    </v-sheet>
    <div>
        <RouterLink to="/login">Forgot your password?</RouterLink>
    </div>
    <div>
        <RouterLink to="/register">Don't have an account? Register now!</RouterLink>
    </div>
</template>