<template>
    <div class="flex flex-col justify-center px-12 md:px-32 child:md:pt-40 child:pt-40 pb-20">
        <SectionHeader id="home" class="md:w-[80vw] w-full min-h-[25rem] !pt-20"/>
        <SectionAbout id="about" class="md:w-[50vw]"/>
        <SectionProjects id="projects" class="md:w-[85vw]"/>
        <SectionContact id="contact" class="md:w-[50vw]"/>
    </div>
</template>
<script lang="ts" setup>
    useSeoMeta({
        title: "Artus Portfolio",
        ogTitle: "Artus Portfolio",
        description: "I'm Artus, a Developer and Designer! Take a look at my Portfolio",
        ogDescription: "I'm Artus, a Developer and Designer! Take a look at my Portfolio",
        ogImage: "/images/ogImage.png",
        twitterCard: "summary_large_image",
    });
</script>