<template>
    <div class="w-full p-5 bg-white shadow rounded-lg text-gray-800">
        <div class="flex">
            <div v-for="id in stickers" :key="id"
                    class="w-1/3">
                <sticker :sticker="id" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import Sticker from '../components/SSticker.vue';

    const STICKERS = [ 'AAAAAAAA', 'carry-the-yeen', 'corgin-shy', 'corgin-vr',
                       'doru-shy', 'seff-proud', 'sergeant-fluffy-headphone', 'shit-eating-grin',
                       'ych-fishing', 'yeen-peek' ];
    
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

        return [ stickies.pop(), stickies.pop(), stickies.pop() ]
    });
</script>