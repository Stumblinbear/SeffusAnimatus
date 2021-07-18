<template>
    <div class="w-full p-5 bg-white shadow rounded-lg text-gray-800 space-y-5">
        <div class="p-3 bg-blue-400 text-white text-center rounded-xl">
            Shipping is <b>FREE</b> for United States addresses.
        </div>

        <div class="space-y-2">
            <s-card>
                Pricing is based on <b>3x3 prints</b>, and are <b>approximate</b> for brevity! Contact me if you have any questions, and for final quotes!
            </s-card>
        </div>

        <div class="space-y-2">
            <h2 class="text-2xl font-medium">Vynl Stickers & Magnets</h2>

            <prices :pricing="[
                    [ '5 Stickers', '~2.50 USD Each' ],
                    [ '10 Stickers', '~2.00 USD Each' ],
                    [ '20 Stickers', '~1.75 USD Each' ],
                    [ '50+ Stickers', '~1.50 USD Each' ],
                ]" />
        </div>

        <div class="space-y-2">
            <h2 class="text-2xl font-medium">3D Prints, Stickers, & Magnets</h2>

            <div class="flex space-x-2">
                <div class="w-48">
                    <video class="rounded-lg overflow-hidden" autoplay loop>
                        <source src="/assets/lenticular.mp4" type="video/mp4" />
                    </video>
                </div>

                <prices :pricing="[
                        [ '5 Stickers', '~6.50,  USD Each' ],
                        [ '10 Stickers', '~5.50,  USD Each' ],
                        [ '20 Stickers', '~5.00 USD Each' ],
                        [ '50+ Stickers', '~4.50 USD Each' ],
                    ]" />
            </div>
        </div>

        <contact-me />
    </div>
</template>

<script setup>
    import SHeader from '../components/SHeader.vue';
    import SCard from '../components/SCard.vue';
    import SButton from '../components/SButton.vue';
    import SSticker from '../components/SSticker.vue';
    
    import Prices from '../components/Prices.vue';
    import ContactMe from '../components/ContactMe.vue';
</script>