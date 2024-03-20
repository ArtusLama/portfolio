<template>

    <div ref="element" @click="onCellClick(false)" @contextmenu.prevent="onRightClick()" class="cursor-pointer flex items-center justify-center hover:brightness-90 md:w-10 md:h-10 w-8 h-8 md:rounded rounded-sm" :class='{ "bg-white": showContent, "bg-primary": !showContent, "!bg-red-500": markedAsBomb && !showContent }'>
        <p v-if="showContent && props.content > 0" class="select-none font-semibold">{{ props.content }}</p>
        <span v-if="showContent && props.content == -1" class="i-heroicons-bug-ant-solid w-5 h-5 text-red-500"></span>
        <span v-if="markedAsBomb && !showContent" class="i-heroicons-flag-solid text-white"></span>
        <!--<p>{{ props.cellPosition[0] }}, {{ props.cellPosition[1] }} = {{ props.content }}</p>-->
    </div>

</template>

<script lang="ts" setup>


    const showContent: Ref<boolean> = ref(false);
    const markedAsBomb: Ref<boolean> = ref(false);
    const element: Ref<HTMLElement | null> = ref(null);


    const props = defineProps({
        content: {
            required: true,
            type: Number,
            validator: (c: number) => -1 <= c && c <= 8,
        },
        shouldSwitchCells: {
            required: true,
            type: Array<Array<number>>,
        },
        cellPosition: {
            required: true,
            type: Array<number>,
        },
    });

    

    watch(() => props.shouldSwitchCells, async (oldValue, newValue) => {

        for (const cell of props.shouldSwitchCells) {
            if (JSON.stringify(cell) == JSON.stringify(props.cellPosition)) onCellClick(true);
        }

    }, { deep: true });


    const emit = defineEmits(["handleCellClick", "bombClicked"]);
    const onCellClick = (openAnyways: boolean) => {
        if (showContent.value) return;
        if (markedAsBomb.value && !openAnyways) {
            element.value?.classList.toggle("animate-shake");
            setTimeout(() => element.value?.classList.toggle("animate-shake"), 100);
            return;
        }
        showContent.value = true;
        if (props.content == -1 && !openAnyways) emit("bombClicked");

        if (!openAnyways) emit("handleCellClick");
    }

    const onRightClick = () => {
        if (showContent.value) {
            markedAsBomb.value = false;
            return;
        }
        markedAsBomb.value = !markedAsBomb.value;        
    }


</script>