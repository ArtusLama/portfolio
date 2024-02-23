<template>
    <div class="sticky top-0 z-50">
        <div class="flex justify-between items-center px-12 md:px-32 py-2 md:py-6 backdrop-blur md:backdrop-blur-lg relative z-20"
            :class="isMobileMenuOpen ? 'bg-backgroundColor' : 'bg-backgroundColor/[0.6]'">
            <div>
                <p class="text-primary font-bold text-2xl">{{ "< Artus >" }}</p>
            </div>

            <div v-if="currentScreenWidth >= maxMobileWidth" class="flex gap-10 text-textColor font-light text-lg child:cursor-pointer">
                <p @click="scrollTo('home')" class="hover:text-primary">Home</p>
                <p @click="scrollTo('about')" class="hover:text-primary">About</p>
                <p @click="scrollTo('projects')" class="hover:text-primary">Projects</p>
            </div>
            <div v-else class="pt-2 cursor-pointer" @click="isMobileMenuOpen = !isMobileMenuOpen">
                <span v-if="!isMobileMenuOpen" class="i-heroicons-bars-3 text-5xl bg-primary"></span>
                <span v-else class="i-heroicons-x-mark text-5xl bg-primary"></span>
            </div>


        </div>


        <div v-if="isMobileMenuOpen" class="absolute top-[69px] left-0 right-0 bg-backgroundLightColor select-none">
            <div class="w-full h-full flex flex-col items-center justify-center text-white relative py-10 px-[15vw]">
                <p @click="scrollTo('home')" class="w-full text-center h-full py-5 cursor-pointer hover:text-primary">Home</p>
                <p @click="scrollTo('about')" class="w-full text-center h-full py-5 cursor-pointer hover:text-primary">About</p>
                <p @click="scrollTo('projects')" class="w-full text-center h-full py-5 cursor-pointer hover:text-primary">Projects</p>
            </div>
        </div>


        <hr class="border-borderColor transition-all delay-100 ease-in-out"
            :class="scrollPosition > 0 ? 'opacity-50' : 'opacity-0'">
    </div>

</template>
<script lang="ts" setup>

    const scrollPosition: Ref<number> = ref(0);
    const maxMobileWidth: Ref<number> = ref(768); // 768px => tailwind md:...
    const currentScreenWidth: Ref<number> = ref(0);
    const isMobileMenuOpen: Ref<boolean> = ref(false);

    const scrollTo = (id: string) => {
        const target = document.getElementById(id);
        if (target) {
            isMobileMenuOpen.value = false;
            setTimeout(() => {
                target.scrollIntoView({ behavior: "smooth" });
            }, 100)
        }
    }

    onMounted(() => {
        currentScreenWidth.value = window.innerWidth;
        window.onresize = () => {
            if (currentScreenWidth.value > maxMobileWidth.value && isMobileMenuOpen.value) {
                isMobileMenuOpen.value = false;
            }
            currentScreenWidth.value = window.innerWidth;
        }
        window.onscroll = () => {
            scrollPosition.value = window.scrollY;
        }
    });

</script>