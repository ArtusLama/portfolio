<template>
    <p class="sectionTitle tracking-wider" :class="boldSectionName ? 'font-semibold' : 'font-normal'">{{ sectionName }}</p>
    <p :class="boldSectionName ? 'title' : 'titleSmaller'">{{ title }}</p>
</template>
<script lang="ts" setup>

    defineProps({
        sectionName: String,
        boldSectionName: {
            default: false,
            type: Boolean
        },
        title: String,
    });

</script>