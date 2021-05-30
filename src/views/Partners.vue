<template>
    <div class="w-full p-5 bg-white shadow rounded-lg text-gray-800 space-y-5">
        <div class="flex">
            <router-link class="w-full" :to="{ name: 'Collaborate' }">
                <s-button
                        class="font-medium text-white bg-purple-500 hover:bg-purple-600"
                        size="xs">
                    <div class="flex-grow text-center">
                        Become a Partner
                    </div>

                    <icon-right />
                </s-button>
            </router-link>
        </div>

        <div class="p-3 mb-3 bg-red-500 text-white text-center rounded-xl">
            Each partner has a different open schedule!
        </div>
        
        <div class="space-y-2">
            <div class="flex items-center space-x-4">
                <img class="h-16 rounded-lg bg-gray-300 shadow-xl" src="/assets/partners/felisrandomis.png" />

                <h2 class="text-2xl font-medium mb-3">FelisRandomis</h2>
            </div>

            <div class="flex">
                <div v-for="id in stickers" :key="id"
                        class="w-1/2 mx-8 sm:mx-12 md:mx-16 mb-3">
                    <s-sticker :sticker="id" />
                </div>
            </div>

            <div class="flex space-x-2">
                <s-sticker class="w-48" sticker="felisrandomis" />

                <div class="w-full space-y-4">
                    <prices :pricing="[
                            [ 'Base Price', '40 USD' ],
                            [ 'Additional Characters', '5 USD' ],
                            [ 'NSFW', '5 USD' ],
                        ]" />

                    <a class="block" href="https://furaffinity.net/user/FelisRandomis" target="_blank">
                        <s-button
                                class="font-medium text-white bg-purple-400 hover:bg-purple-500"
                                size="xs">
                            <div class="flex-grow text-center">
                                Go to FurAffinity
                            </div>

                            <icon-right />
                        </s-button>
                    </a>
                </div>
            </div>
        </div>

        <hr />
        
        <div class="space-y-2">
            <div class="flex items-center space-x-4">
                <img class="h-16 rounded-lg bg-gray-300 shadow-xl" src="/assets/partners/cozyyote.jpg" />

                <h2 class="text-2xl font-medium mb-3">CozyYote</h2>
            </div>

            <div class="flex space-x-2">
                <s-sticker class="w-48" sticker="cozyyote" />

                <div class="w-full space-y-4">
                    <prices :pricing="[
                            [ 'Base Price', '30 USD' ],
                            [ 'Additional Characters', '5-10 USD' ],
                            [ 'NSFW', 'Ask' ],
                        ]" />

                    <a class="block" href="https://furaffinity.net/user/CozyYote" target="_blank">
                        <s-button
                                class="font-medium text-white bg-purple-400 hover:bg-purple-500"
                                size="xs">
                            <div class="flex-grow text-center">
                                Go to FurAffinity
                            </div>

                            <icon-right />
                        </s-button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import SHeader from '../components/SHeader.vue';
    import SCard from '../components/SCard.vue';
    import SButton from '../components/SButton.vue';
    import SSticker from '../components/SSticker.vue';
    
    import Prices from '../components/Prices.vue';
    import ContactMe from '../components/ContactMe.vue';
    
    import IconRight from '../components/icons/Right.vue';
</script>