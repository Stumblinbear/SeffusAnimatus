<template>
    <div class="w-full p-5 bg-white shadow rounded-lg text-gray-800">
        <s-header title="Can I pay using <payment method>?" />

        <s-card>
            Probably! As long as it's not too niche, just ask and I'll see what I can do :)
        </s-card>

        <s-header class="mt-5" title="How many can I order at once?" />

        <s-card>
            Yes.
        </s-card>

        <s-header class="mt-5" title="Can you animate 'liquids'?" />

        <s-card>
            No. I don't yet have the skill.
        </s-card>

        <s-header class="mt-5" title="Why the strict sticker restrictions?" />

        <s-card>
            Telegram is very restrictive on what they allow in the final sticker file, and the format they use isn't the most advanced.

            <router-link
                    class="font-bold text-blue-600"
                    :to="{ name: 'CommissionTelegram' }">
                Read More
            </router-link>
        </s-card>

        <s-header class="mt-5" title="Why do I have to get artist permission? I paid for it! It's mine!" />

        <s-card>
            <p>Let me preface by saying that I Am Not A Lawyer.</p>
            
            <p class="mt-3">
                The general rule of thumb for copyright law (it varies by country) is the artist in question retains rights to the artwork unless specified otherwise.

                This doesn't mean it's not "yours," it means, for example, that they have the sole right to modify and resell.
                
                I require permission for these reasons. I do not have the legal (or moral) right to modify someone else's work without authorization.
            </p>

            <p class="mt-3">
                This is not negotiable. Don't even ask.
            </p>
        </s-card>
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    import SHeader from '../components/SHeader.vue';
    import SCard from '../components/SCard.vue';
</script>