<template>
    <div :class="'flex items-center w-full px-3 py-' + py + ' bg-gray-200 rounded-md hover:bg-gray-300 ' + props.class">
        <slot />
    </div>
</template>

<script setup>
    import { computed, defineProps } from "vue";

    const props = defineProps({
        class: String,
        size: {
            type: String,
            default: 'md'
        }
    });

    const py = computed(() => {
        if(props.size == 'md') return '5';
        if(props.size == 'lg') return '7';
        if(props.size == 'sm') return '2';
        if(props.size == 'xs') return '0';
    })
</script>