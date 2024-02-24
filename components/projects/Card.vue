<template>
    <div class="flex flex-col items-center border border-borderColor rounded-xl text-textColor p-5 max-w-[19rem]" :id=props.title>
        <img :src="imagePath" :alt="imagePath" class="w-full rounded-md">
        
        <p class="mt-4 text-2xl text-center text-titleColor font-semibold">{{ title }}</p>
        <p class="text-md text-center">{{ description }}</p>

        <div class="mt-6 flex justify-center gap-4 flex-wrap text-sm max-w-[75%]">
            <a v-for="tag in tags" :href="getLinkOrNull(tag) || undefined" target="_blank">{{ tag }}</a>
        </div>
        <div class="flex items-center mt-3 gap-4 text-textColor hover:child:child:text-titleColor child:child:cursor-pointer child:child:text-textColor child:child:transition-colors child:child:duration-200">
            <a :href="githubLink" target="_blank" v-if="githubLink !== undefined">
                <span class="i-bxl-github w-6 h-6"></span>
            </a>
            <a :href="externalLink" target="_blank" v-if="externalLink !== undefined">
                <span class="i-heroicons-arrow-top-right-on-square text-5xl w-7"></span>
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>




const tagLinks: Record<string, string> = {
    Tailwind: "https://tailwindcss.com/",
    Vue: "https://vuejs.org/",
    Typescript: "https://www.typescriptlang.org/",
    Javascript: "https://de.wikipedia.org/wiki/JavaScript",
    Java: "https://www.java.com",
    Python: "https://www.python.org/"
};
const getLinkOrNull = (tag: string): string | null => {
    const tagLink = tagLinks[tag];
    return tagLink || null;
};

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    tags: {
        type: Array as () => string[],
        required: true,
    },
    githubLink: {
        type: String,
        required: false
    },
    externalLink: {
        type: String,
        required: false
    }
});

</script>