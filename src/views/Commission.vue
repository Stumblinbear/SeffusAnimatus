<template>
    <div class="w-full p-5 bg-white shadow rounded-lg text-gray-800 space-y-5">
        <div class="p-3 bg-red-500 text-white text-center rounded-xl">
            I only work with <b>EXISTING</b> artwork.
        </div>
        
        <div class="space-y-2">
            <h2 class="text-2xl font-medium">Telegram Stickers</h2>

            <div class="flex">
                <div v-for="id in stickers" :key="id"
                        class="w-1/2 mx-8 sm:mx-12 md:mx-16 mb-3">
                    <s-sticker :sticker="id" />
                </div>
            </div>

            <prices :pricing="[
                    [ 'Base Price', '20 USD' ],
                    [ 'Additional Characters', '5-10 USD' ],
                    [ 'Extra Versions', '5-10 USD' ],
                    [ 'NSFW', '5 USD' ],
                ]" />

            <div class="flex">
                <router-link class="w-full" :to="{ name: 'CommissionTelegram' }">
                    <s-button
                            class="font-medium text-white bg-purple-400 hover:bg-purple-500"
                            size="xs">
                        <div class="flex-grow text-center">
                            Get More Information
                        </div>

                        <icon-right />
                    </s-button>
                </router-link>
            </div>
        </div>

        <div class="space-y-2">
            <s-header title="Full Animations" />

            <s-card class="space-y-2">
                <div class="flex">
                    <div class="w-full font-medium">Minimum Deposit</div>
                    <div class="w-full text-right">50 USD</div>
                </div>
                <div class="flex">
                    <div class="w-full font-medium">Hourly Rate</div>
                    <div class="w-full text-right">20 USD</div>
                </div>

                <hr />

                <div class="flex">
                    <div class="w-full font-medium">Average</div>
                    <div class="w-full text-right">75-125 USD</div>
                </div>
            </s-card>

            <s-card>
                Generally, I must work with the original artist to animate a full piece, however in some cases I may be able to work without it. Message me, and I'll let you know :)
            </s-card>
        </div>

        <div class="space-y-2">
            <s-header title="Discord Emojis" />

            <s-card>
                This is a new area for me, so message me and we'll work something out!
            </s-card>
        </div>
        
        <contact-me />
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    import SHeader from '../components/SHeader.vue';
    import SCard from '../components/SCard.vue';
    import SButton from '../components/SButton.vue';
    import SSticker from '../components/SSticker.vue';
    
    import Prices from '../components/Prices.vue';
    import ContactMe from '../components/ContactMe.vue';
    
    import IconRight from '../components/icons/Right.vue';

    const STICKERS = [ 'carry-the-yeen', 'corgin-shy', 'corgin-vr', 'doru-shy',
                       'seff-proud', 'sergeant-fluffy-headphone', 'shit-eating-grin', 'ych-fishing' ];
    
    function shuffle(array) {
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }

    const stickers = computed(() => {
        const stickies = shuffle([ ...STICKERS ]);

        return [ stickies.pop(), stickies.pop() ]
    });
</script>