<template>

    <div class="bg-backgroundLightColor w-screen flex md:flex-row flex-col md:items-start items-center md:gap-32 gap-14 justify-start md:pl-24 md:pr-28 py-16">

        <div class="md:max-w-[25%] max-w-[50%] flex flex-col md:items-start items-center">
            <p class="text-primary font-bold text-3xl">{{ "< Artus >" }}</p>
            <p class="text-textColor md:text-left text-center">Nothing is as important as passion. No matter what you want to do with your life, be passionate.</p>
            <p class="text-textColor tracking-tighter text-[15px]">Copyright © 2024</p>
        </div>



        <div class="md:max-w-[25%] max-w-[50%] flex flex-col md:items-start items-center md:mt-4">
            <p class="text-titleColor font-semibold tracking-tight">Useful links:</p>
            <ul class="text-textColor hover:child:cursor-pointer hover:child:brightness-125 hover:child:transition-all flex flex-col md:items-start items-center">
                <p @click="scrollTo('about')">About</p>
                <p @click="scrollTo('projects')">Projects</p>
                <p @click="scrollTo('contact')">Contact</p>
            </ul>
        </div>



        <div class="md:max-w-[25%] max-w-[50%] flex flex-col md:items-start items-center md:mt-4">
            <p class="text-titleColor font-semibold tracking-tight">Find me on:</p>
            <div class="mt-2 child:!text-textColor hover:child:cursor-pointer hover:child:brightness-125 hover:child:transition-all child:child:w-8 child:child:h-8
                        flex gap-4">
                <a href="https://discord.com/users/713455158625042433" target="_blank"><span class="i-bxl-discord-alt"></span></a>
                <a href="https://github.com/ArtusLama" target="_blank"><span class="i-bxl-github"></span></a>
                <a href="mailto:arthur.paucke" target="_blank"><span class="i-bxl-gmail"></span></a>
                <a href="https://www.linkedin.com/in/arthur-paucke-b541532b7/" target="_blank"><span class="i-bxl-linkedin-square"></span></a>
            </div>
            <p></p>
        </div>

    </div>

</template>
<script setup lang="ts">

    const scrollTo = (id: string) => {
        const target = document.getElementById(id);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: "smooth" });
            }, 100)
        }
    }


</script>