<template>
    <div class="w-full p-5 bg-white shadow rounded-lg text-gray-800 space-y-5">
        <prices :pricing="[
                [ 'Base Price', '20 USD' ],
                [ 'Additional Characters', '5-10 USD' ],
                [ 'Extra Versions', '5-10 USD' ],
                [ 'NSFW', '5 USD' ],
            ]" />

        <div class="space-y-2">
            <s-header title="Sticker Restrictions" />

            <s-card class="space-y-3">
                <p>
                    All animations are limited to <b>3 seconds</b> in length.
                </p>
                <p>
                    The best stickers to animate are ones with thick lines and no gradients (including shadows).
                </p>
                <p>
                    Stickers have a hard <b>64kb size limit</b>, enforced by Telegram. This doesn't mean your PNG needs to be less than that, it means the final result needs to be. Complex characters or ones will many colors will have to have their overall quality reduced to meet this requirement.
                </p>
            </s-card>
        </div>
        
        <contact-me />
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    import SHeader from '../components/SHeader.vue';
    import SCard from '../components/SCard.vue';
    
    import Prices from '../components/Prices.vue';
    import ContactMe from '../components/ContactMe.vue';
</script>