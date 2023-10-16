<template>
    <div class="sticky top-0">
        <div class="flex justify-between items-center px-24 py-4 bg-backgroundColor/[0.8] backdrop-blur-lg">
            <div>
                <p class="text-primary font-bold text-2xl">{{ "< Artus >" }}</p>
            </div>

            <div class="flex gap-10 text-textColor font-light text-lg">
                <p>Home</p>
                <p>About</p>
                <p>Projects</p>
            </div>
        </div>
        <hr class="border-borderColor transition-all delay-100 ease-in-out"
            :class="scrollPosition > 0 ? 'opacity-50' : 'opacity-0'">
    </div>
</template>
<script lang="ts" setup>

    const scrollPosition: Ref<Number> = ref(0);

    onMounted(() => {
        window.onscroll = () => {
            scrollPosition.value = window.scrollY;
        }
    });

</script>