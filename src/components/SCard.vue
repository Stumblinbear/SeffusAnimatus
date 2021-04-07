<template>
    <div :class="'w-full p-4 bg-gray-100 rounded-xl shadow-sm ' + props.class">
        <slot />
    </div>
</template>

<script setup>
    import { defineProps } from "vue";

    const props = defineProps({
        class: {
            type: String
        }
    })
</script>