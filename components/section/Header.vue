<template>
    <div class="flex
                md:justify-between md:items-center md:flex-row md:pr-40
                flex-col-reverse justify-between items-center">
        <div>
            <SectionTitle
                sectionName="Welcome, my name is"
                title="Arthur Paucke"
                :boldSectionName=true
            />
            <p class="mt-2 text-textColor">I’m a Developer and UI/UX Designer</p>
            <div class="flex gap-4 mt-5">
                <button @click="scrollTo('projects')" class="primaryButton whitespace-nowrap !text-backgroundColor hover:brightness-[0.85] transition-all font-semibold">My Projects</button>
                <button @click="scrollTo('contact')" class="whitespace-nowrap hover:brightness-[0.85] hover:bg-backgroundLightColor transition-all">Contact Me</button>
            </div>

        </div>
        <div class="grid items-center">
            <p class="text-4xl text-textColor">lol</p>
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