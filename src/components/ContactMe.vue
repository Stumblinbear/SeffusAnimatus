<template>
    <div class="space-y-2">
        <s-header title="Contact Me" />

        <s-card>
            You can message me on <a href="https://t.me/Stumblinbear" target="_blank" class="font-medium text-blue-500">Telegram</a> or on <a href="https://discord.gg/cvGz3bmpsG" target="_blank" class="font-medium text-blue-800">Discord</a> any time! :)
        </s-card>
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    import SHeader from '../components/SHeader.vue';
    import SCard from '../components/SCard.vue';
</script>