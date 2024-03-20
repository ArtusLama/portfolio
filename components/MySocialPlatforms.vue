<script setup lang="ts">

    const props = defineProps({
        showGmail: {
            required: false,
            default: true,
            type: Boolean
        }
    })


</script>

<template>

    <div class="mt-2 child:!text-textColor hover:child:cursor-pointer hover:child:brightness-125 hover:child:transition-all child:child:w-8 child:child:h-8
                        flex gap-4">
        <a href="https://discord.com/users/713455158625042433" target="_blank"><span class="i-bxl-discord-alt"></span></a>
        <a href="https://github.com/ArtusLama" target="_blank"><span class="i-bxl-github"></span></a>
        <a v-if="props.showGmail" href="mailto:arthur.paucke" target="_blank"><span class="i-bxl-gmail"></span></a>
        <a href="https://www.linkedin.com/in/arthur-paucke-b541532b7/" target="_blank"><span class="i-bxl-linkedin-square"></span></a>
    </div>

</template>