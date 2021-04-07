<template>
    <div class="w-full p-5 bg-white shadow rounded-lg text-gray-800">
        <div class="p-3 mb-3 bg-red-500 text-white text-center rounded-xl">
            I only work with <b>EXISTING</b> artwork.
        </div>
        
        <div>
            <h2 class="text-2xl font-medium mb-3">Telegram Stickers</h2>

            <div class="flex">
                <div v-for="id in stickers" :key="id"
                        class="w-1/2 mx-8 sm:mx-12 md:mx-16 mb-3">
                    <sticker :sticker="id" />
                </div>
            </div>

            <div class="w-full p-2 bg-gray-200 rounded-xl">
                <div class="flex p-2">
                    <div class="w-full font-medium">Base Price</div>
                    <div class="w-full text-right">20 USD</div>
                </div>
                <div class="flex p-2">
                    <div class="w-full font-medium">Additional Characters</div>
                    <div class="w-full text-right">5-10 USD</div>
                </div>
                <div class="flex p-2">
                    <div class="w-full font-medium">Extra Versions</div>
                    <div class="w-full text-right">5-10 USD</div>
                </div>
                <div class="flex p-2">
                    <div class="w-full font-medium">NSFW</div>
                    <div class="w-full text-right">5 USD</div>
                </div>
            </div>
        </div>
        
        <div class="mt-5">
            <h2 class="text-2xl font-medium mb-3">Discord Emojis</h2>

            <div class="w-full p-2 bg-gray-200 rounded-xl">
                <div class="flex p-2">
                    This is a new area for me, so message me and we'll work something out!
                </div>
            </div>
        </div>

        <div class="mt-5">
            <h2 class="text-2xl font-medium mb-3">Full Animations</h2>

            <div class="w-full p-2 bg-gray-200 rounded-xl">
                <div class="flex p-2">
                    Generally, I must work with the original artist to animate a full piece, however in some cases I may be able to work without it. Message me, and I'll let you know :)
                </div>
            </div>
        </div>
        
        <div class="mt-5">
            <h2 class="text-2xl font-medium mb-3">Contact Me</h2>

            <div class="w-full p-2 bg-gray-200 rounded-xl">
                <div class="p-2">
                    You can message me on <a href="https://t.me/Stumblinbear" class="font-medium text-blue-500">Telegram</a> or on <a href="https://discord.gg/cvGz3bmpsG" class="font-medium text-blue-800">Discord</a> any time! :)
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import Sticker from '../components/Sticker.vue';

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