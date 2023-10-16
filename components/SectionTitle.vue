<template>
    <p class="sectionTitle" :class="{ 'font-bold': boldSectionName }">{{ sectionName }}</p>
    <p class="title mt-4">{{ title }}</p>
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