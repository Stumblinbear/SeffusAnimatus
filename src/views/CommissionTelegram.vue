<template>
    <div class="w-full p-5 bg-white shadow rounded-lg text-gray-800">
        <telegram-prices />

        <s-header class="mt-5" title="Sticker Restrictions" />

        <s-card>
            <p>
                All animations are limited to <b>3 seconds</b> in length.
            </p>
            <p class="mt-3">
                The best stickers to animate are ones with thick lines and no gradients (including shadows).
            </p>
            <p class="mt-3">
                Stickers have a hard <b>64kb size limit</b>, enforced by Telegram. This doesn't mean your PNG needs to be less than that, it means the final result needs to be. Complex characters or ones will many colors will have to have their overall quality reduced to meet this requirement.
            </p>
        </s-card>
        
        <contact-me />
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    import SHeader from '../components/SHeader.vue';
    import SCard from '../components/SCard.vue';
    
    import TelegramPrices from '../components/TelegramPrices.vue';
    import ContactMe from '../components/ContactMe.vue';
</script>