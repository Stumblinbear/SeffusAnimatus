<template>
    <svg 
            aria-hidden="true"
            :class="'w-' + wh + ' h-' + wh + ' mt-2'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32">
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="#FFF" />
    </svg>
</template>

<script setup>
    import { computed, defineProps } from "vue";

    const props = defineProps({
        size: {
            type: String,
            default: 'md'
        }
    });

    const wh = computed(() => {
        if(props.size == 'md') return '8';
        if(props.size == 'lg') return '12';
        if(props.size == 'sm') return '6';
        if(props.size == 'xs') return '4';
    })
</script>