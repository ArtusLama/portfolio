<template>
    <div>
        <SectionTitle
            sectionName="Contact"
            title="Let's get in touch"
        />
        <p class="mt-4 text-textColor">
            So what should I say? I’m a passionate Developer and Designer. Programming is what
            connects me with people and where I learn every day something new.
        </p>

        <form @mouseenter="isInContactSection = true" @mouseleave="isInContactSection = false"
                 @submit.prevent="sendMessage" class="mt-10 text-white flex flex-col gap-4 justify-between sm:w-[50%] sm:pr-0 pr-10 md:max-w-[20rem]">
            <div>
                <label class="block text-textColor font-semibold ml-3" for="fullname">Your Name:</label>
                <input v-model="nameInput" :required="isInContactSection" type="text" id="fullname" class="w-full mt-1 ml-2 rounded-md bg-backgroundLightColor 
                    outline-1 outline-none focus:outline-primary
                    invalid:!outline-red-400 invalid:text-red-100
                    py-1 pl-2">
            </div>
         
            <div>
                <label class="block text-textColor font-semibold ml-3" for="email">Your E-Mail:</label>
                <input v-model="mailInput" :required="isInContactSection" type="email" id="email" class="w-full mt-1 ml-2 rounded-md bg-backgroundLightColor 
                    outline-1 outline-none focus:outline-primary
                    invalid:!outline-red-400 invalid:text-red-100
                    py-1 pl-2">
            </div>

            <div>
                <label class="block text-textColor font-semibold ml-3" for="message">Tell me something:</label>
                <textarea v-model="messageInput" :required="isInContactSection" id="message" class="w-full h-[100px] min-h-[60px] mt-1 ml-2 rounded-md bg-backgroundLightColor
                    outline-1 outline-none focus:outline-primary
                    py-1 pl-2"></textarea>
            </div>

            <button type="submit" class="ml-4 hover:brightness-[0.85] primaryButton transition-all">Send Message</button>
            <p v-if="messageSent" class="ml-4 -mt-3 text-textColor tracking-tighter text-center">Thank you for your message!</p>
            
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
            
            

            nameInput.value = "";
            mailInput.value = "";
            messageInput.value = "";
        }
    }

</script>
