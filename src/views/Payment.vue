<template>
    <div class="w-full p-5 bg-white shadow rounded-lg text-gray-800">
        <s-header title="Supported Payment Methods" />

        <s-card>
            <div class="flex flex-wrap font-medium text-center">
                <div class="w-1/3 p-3">Paypal</div>
                <div class="w-1/3 p-3">Venmo</div>
                <div class="w-1/3 p-3">CashApp</div>
                <div class="w-full p-3">Crypto</div>
                <div class="w-full p-3">Any Supported Asset on Stellar</div>
            </div>
        </s-card>
        
        <s-card class="mt-5 text-center">
            Is your favorite method not listed? Ask anyways, I'll see what I can do!
        </s-card>
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    import SHeader from '../components/SHeader.vue';
    import SCard from '../components/SCard.vue';
</script>