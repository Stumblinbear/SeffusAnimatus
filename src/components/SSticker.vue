<template>
    <div class="bg-gray-200 rounded-lg overflow-hidden" ref="container" />
</template>

<script setup>
    import { defineProps, getCurrentInstance, onMounted, ref } from 'vue';
    import player from 'lottie-web';

    defineProps({
        sticker: {
            type: String,
            required: true
        }
    });

    const { props } = getCurrentInstance();

    const container = ref(null);

    onMounted(() => {
        player.loadAnimation({
            container: container.value,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/assets/telegram/' + props.sticker + '.json'
        });
    });
</script>