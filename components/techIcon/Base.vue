<template>

    <div class="w-16 h-16 aspect-square flex items-center justify-center border border-borderColor rounded-xl p-2 text-primary
                transition-colors duration-500 cursor-pointer"
         @mouseenter="isHovered = true"
         @mouseleave="isHovered = false"
         :class="isHovered ? borderActiveClass : ''">

        <div class="w-full h-full flex items-center justify-center relative">
            <Transition>
                <slot name="svg" v-if="!isHovered"></slot>
                <slot name="coloredSvg" v-else></slot>
            </Transition>
        </div>


    </div>

</template>
<script lang="ts" setup>

    const isHovered: Ref<boolean> = ref(false);

    const props = defineProps({
        borderActiveClass: {
            type: String,
            required: true
        }
    });

</script>
<style scoped>
    .v-enter-active,
    .v-leave-active {
        transition: opacity .5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>