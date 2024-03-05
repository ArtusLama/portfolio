<template>
    <div class="flex max-w-[65rem]
                md:justify-between md:items-center md:flex-row md:pr-40 md:gap-0 gap-10 
                flex-col-reverse justify-between items-center">
        <div>
            <SectionTitle
                sectionName="Welcome, my name is"
                title="<p>Arthur Paucke</p>"
                :boldSectionName=true
            />
            <p class="mt-2 text-textColor">I’m a passionate Developer and UI/UX Designer</p>
            <div class="flex gap-4 mt-5">
                <button @click="scrollTo('projects')" class="flex gap-2 items-center primaryButton whitespace-nowrap !text-backgroundColor hover:brightness-[0.85] transition-all font-semibold">
                    <span class="i-heroicons-folder-20-solid w-5 h-5 mt-[1px]"></span>
                    My Projects
                </button>
                <button @click="scrollTo('contact')" class="flex gap-2 items-center whitespace-nowrap hover:brightness-[0.85] hover:bg-backgroundLightColor transition-all">
                    <span class="i-heroicons-envelope w-5 h-5 mt-[2px]"></span>
                    Contact Me
                </button>
            </div>

        </div>
        <div class="grid items-center md:w-fit w-52">
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face.png" alt="Grinning Face" />
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