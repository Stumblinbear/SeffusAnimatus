<template>
    <div class="w-full p-5 bg-white shadow rounded-lg text-gray-800 space-y-5">
        <div class="space-y-2">
            <p>
                Being an animator (I can't draw for crap), I must work with artists regularly to do commissions.

                That's great, because I get to meet amazing artists and wonderful people regularly! :)
            </p>

            <p>
                That said, I <i>am</i> looking for a art partner to work with regularly.
            </p>

            <p>
                I really want to get into animating comic panels, so if you're an artist who draws these, absolutely hit me up!
            </p>
        </div>
        
        <div class="space-y-2">
            <s-header title="What it Entails" />

            <s-card>
                Basically, I need artists that can properly layer art so it can be animated.
                        
                This means there is some extra work required at drawing time, however many find this relatively straight-forward with little extra time added to the drawing process.
            </s-card>
        </div>
        
        <contact-me />
    </div>
</template>

<script setup>
    import SHeader from '../components/SHeader.vue';
    import SCard from '../components/SCard.vue';
    
    import ContactMe from '../components/ContactMe.vue';
</script>