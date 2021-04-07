<template>
    <div class="w-full p-5 bg-white shadow rounded-lg text-gray-800">
        <a href="https://patreon.com/Stumblinbear" target="_blank">
            <s-button>
                <icon-patreon class="mr-2" />

                <div>
                    Join my <span class="font-medium">Patreon</span>
                </div>
            </s-button>
        </a>
        
        <a class="block mt-3" href="https://discord.gg/cvGz3bmpsG" target="_blank">
            <s-button>
                <icon-discord class="mr-2" />

                <div>
                    Join the <span class="font-medium">Discord</span> group
                </div>
            </s-button>
        </a>
        
        <a class="block mt-3" href="https://t.me/SeffusAnimatus" target="_blank">
            <s-button>
                <icon-telegram class="mr-2" />

                <div>
                    Join the <span class="font-medium">Telegram</span> channel
                </div>
            </s-button>
        </a>

        <a class="block mt-3" href="https://t.me/SeffsChateau" target="_blank">
            <s-button size="sm">
                <icon-telegram class="ml-1 mr-3" size="sm" />

                <div>
                    Join the <span class="font-medium">Telegram</span> group
                </div>
            </s-button>
        </a>

        <hr class="my-3" />

        <a href="https://trello.com/b/cuazoiWm/animated-stickers" target="_blank">
            <s-button>
                <icon-trello class="mr-2" />

                <div>
                    Check my <span class="font-medium">Trello</span> board
                </div>
            </s-button>
        </a>
    </div>
</template>

<script setup>
    import SButton from '../components/SButton.vue';
    
    import IconPatreon from '../components/icons/Patreon.vue';
    import IconTelegram from '../components/icons/Telegram.vue';
    import IconDiscord from '../components/icons/Discord.vue';
    import IconTrello from '../components/icons/Trello.vue';
</script>