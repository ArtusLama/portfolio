<template>
    <div>
        <SectionTitle
            sectionName="Contact"
            title="Let's get in touch"
        />
        <p class="mt-4 text-textColor">
            I would enjoy to get in touch with you. If you have any questions about me or my projetcs feel free to message me.
            Also if you want to hire me for a project or something similar just text me :D

        </p>

        <form @mouseenter="isInContactSection = true" @mouseleave="isInContactSection = false"
                 @submit.prevent="sendMessage" class="mt-10 text-white flex flex-col gap-4 justify-between md:w-[50%] md:max-w-[20rem] md:min-w-[25rem]">
            <div>
                <label class="block text-textColor font-semibold ml-1" for="fullname">Your Name:</label>

                <div class="relative">
                    <span class="i-heroicons-user absolute text-textColor top-[55%] translate-y-[-50%] left-2"></span>
                    <input v-model="nameInput" :required="isInContactSection" type="text" id="fullname" class="w-full mt-1 rounded-md bg-backgroundLightColor 
                        outline-1 outline-none focus:outline-primary
                        invalid:!outline-red-400 invalid:text-red-100
                        py-1 pl-7">
                </div>
            </div>
         
            <div>
                <label class="block text-textColor font-semibold ml-1" for="email">Your E-Mail:</label>
                
                <div class="relative">
                    <span class="i-heroicons-envelope absolute text-textColor top-[55%] translate-y-[-50%] left-2"></span>
                    <input v-model="mailInput" :required="isInContactSection" type="email" id="email" class="w-full mt-1 rounded-md bg-backgroundLightColor 
                        outline-1 outline-none focus:outline-primary
                        invalid:!outline-red-400 invalid:text-red-100
                        py-1 pl-7">
                </div>
            </div>

            <div>
                <label class="block text-textColor font-semibold ml-1" for="message">Tell me something:</label>
                <textarea v-model="messageInput" :required="isInContactSection" id="message" class="w-full h-[100px] min-h-[60px] mt-1 rounded-md bg-backgroundLightColor
                    outline-1 outline-none focus:outline-primary
                    py-1 pl-2"></textarea>
            </div>

            <button type="submit" class="hover:brightness-[0.85] primaryButton transition-all inline-flex items-center justify-center gap-4"><p>Send Message</p><span class="i-heroicons-paper-airplane mt-1"></span></button>
            <p v-if="messageSent" class="-mt-3 text-textColor tracking-tighter text-center">Thank you for your message!</p>
            
        </form>

    </div>
</template>

<script setup lang="ts">
import { useDiscordWebhook } from '~/composables/useDiscordWebhook';


    const messageSent = ref(false);
    const isInContactSection = ref(false);

    const nameInput = ref("");
    const mailInput = ref("");
    const messageInput = ref("");

    const sendMessage = () => {

        if (nameInput.value != "" && mailInput.value != "" && messageInput.value != "") {
            messageSent.value = true;
            setTimeout(() => messageSent.value = false, 4000);

            
            useDiscordWebhook().sendContactMessage(nameInput.value, mailInput.value, messageInput.value);
            
            
            messageInput.value = "";
        }
    }

</script>
