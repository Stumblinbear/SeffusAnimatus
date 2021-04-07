<template>
  <div class="min-w-screen min-h-screen bg-gray-800 flex flex-col items-center px-5 py-32">
    <div class="flex flex-col w-full" style="max-width: 600px">
      <div class="flex flex-col items-center w-full p-4 bg-white rounded-t-3xl md:flex-row">
        <div class="-mt-28 md:-my-16 md:mr-4" style="clip-path: url(#roundedPolygon)">
          <img
            class="w-auto h-48"
            src="/assets/profile.jpg"
            alt="Stumblinbear" />
          
          <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="roundedPolygon">
                <path d="M79 6.237604307034a32 32 0 0 1 32 0l52.870489570875 30.524791385932a32 32 0 0 1 16 27.712812921102l0 61.049582771864a32 32 0 0 1 -16 27.712812921102l-52.870489570875 30.524791385932a32 32 0 0 1 -32 0l-52.870489570875 -30.524791385932a32 32 0 0 1 -16 -27.712812921102l0 -61.049582771864a32 32 0 0 1 16 -27.712812921102" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div class="flex flex-col space-y-4">
          <div class="flex flex-col items-center md:items-start">
            <h2 class="text-xl font-medium">Stumblinbear</h2>
            <p class="text-base font-medium text-gray-400">Animator</p>
          </div>

          <div class="flex items-center justify-center space-x-3 md:justify-start">
            <a
                href="https://twitter.com/theStumblinbear"
                target="_blank"
                class="transition-transform transform hover:scale-125">
              <span class="sr-only">Twitter</span>

              <icon-twitter />
            </a>

            <a
                href="https://discord.gg/cvGz3bmpsG"
                target="_blank"
                class="transition-transform transform hover:scale-125">
              <span class="sr-only">Discord</span>

              <icon-discord />
            </a>

            <a
                href="https://t.me/Stumblinbear"
                target="_blank"
                class="transition-transform transform hover:scale-125">
              <span class="sr-only">Telegram</span>

              <icon-telegram />
            </a>

            <a
                href="https://patreon.com/Stumblinbear"
                target="_blank"
                class="transition-transform transform hover:scale-125">
              <span class="sr-only">Patreon</span>

              <icon-patreon />
            </a>
          </div>
        </div>
      </div>
      
      <div class="w-full p-1 pt-8 mb-5 bg-white shadow rounded-b-lg text-gray-800">
        <div class="flex">
          <router-link
              class="w-full p-3 m-1 text-center font-semibold bg-gray-200 rounded-md hover:bg-gray-300"
              active-class="bg-gray-300"
              :to="{ name: 'Home' }">
            Home
          </router-link>

          <router-link
              class="w-full p-3 m-1 text-center font-semibold bg-gray-200 rounded-md hover:bg-gray-300"
              active-class="bg-gray-300"
              :to="{ name: 'Commission' }">
            Commission
          </router-link>

          <router-link
              class="w-full p-3 m-1 text-center font-semibold bg-gray-200 rounded-md hover:bg-gray-300"
              active-class="bg-gray-300"
              :to="{ name: 'Collaborate' }">
            Collaborate
          </router-link>
        </div>

        <div class="flex">
          <!--<router-link
              class="w-full p-3 m-1 text-center font-semibold bg-gray-200 rounded-md hover:bg-gray-300"
              active-class="bg-gray-300"
              :to="{ name: 'Gallery' }">
            Gallery
          </router-link>-->

          <router-link
              class="w-full p-3 m-1 text-center font-semibold bg-gray-200 rounded-md hover:bg-gray-300"
              active-class="bg-gray-300"
              :to="{ name: 'Payment' }">
            Payment
          </router-link>

          <router-link
              class="w-full p-3 m-1 text-center font-semibold bg-gray-200 rounded-md hover:bg-gray-300"
              active-class="bg-gray-300"
              :to="{ name: 'FAQ' }">
            FAQ
          </router-link>
        </div>
      </div>
      
      <router-view />
    </div>
  </div>
</template>

<script setup>
    import IconTwitter from './components/icons/Twitter.vue';
    import IconPatreon from './components/icons/Patreon.vue';
    import IconTelegram from './components/icons/Telegram.vue';
    import IconDiscord from './components/icons/Discord.vue';
</script>