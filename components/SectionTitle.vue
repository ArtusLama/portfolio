<template>
    <p class="sectionTitle" :class="boldSectionName ? 'font-bold' : 'font-thin'">{{ sectionName }}</p>
    <p class="title mt-2">{{ title }}</p>
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