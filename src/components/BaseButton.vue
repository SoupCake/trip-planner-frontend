<template>
    <v-btn>
        <slot name="icon"></slot>
        <slot name="baseBtn">{{ title }}</slot>
    </v-btn>
</template>

<script>
export default {
    props: ['title']
}
</script>