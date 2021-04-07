<template>
    <h2 :class="'text-2xl font-medium mb-3 ' + props.class">{{ props.title || 'No Title' }}</h2>
</template>

<script setup>
    import { defineProps } from "vue";

    const props = defineProps({
        class: {
            type: String
        },
        title: {
            type: String
        }
    })
</script>