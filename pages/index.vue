<template>
    <div class="flex flex-col justify-center px-12 md:px-32 child:py-40">
        <SectionHeader id="home" class="w-full min-h-[100vh]"/>
        <SectionAbout id="about" class="md:w-[50vw]"/>
        <SectionAbout id="about2" class="md:w-[50vw]"/>
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