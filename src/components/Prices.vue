<template>
    <s-card class="space-y-1">
        <h5 v-if="props.name" class="text-sm font-bold">{{ props.name }}</h5>

        <div v-for="(pair, i) in props.pricing" :key="i"
                class="flex">
            <div class="w-full font-medium">{{ pair[0] }}</div>
            <div class="w-full text-right">{{ pair[1] }}</div>
        </div>
    </s-card>
</template>

<script setup>
    import { defineProps } from 'vue';

    import SCard from './SCard.vue';

    const props = defineProps({
        name: String,
        pricing: {
            type: Array
        }
    })
</script>