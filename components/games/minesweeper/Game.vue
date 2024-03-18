<template>
    
    <div>
        <SectionTitle title="Bug Alarm" sectionName="WATCH OUT"/>
        <p class="text-textColor text-xl mt-5">Hey traveller, somewhere here are bugs. <br>Don't touch them, because then they will destroy your code!</p>

        <div class="flex mt-8 relative w-fit">
            <div class="grid gap-x-1" :style="{ 'grid-template-columns': 'repeat(' + grid.length + ', minmax(0, 1fr))' }" @contextmenu.prevent>

                <div class="grid gap-y-1" v-for="(row, x) of grid">
                    <GamesMinesweeperCell :key="rerenderKey" :cellPosition="[x, y]" :shouldSwitchCells="shouldSwitchCells" :content="c" v-for="(c, y) of row" @handleCellClick="handleCellClick(x, y)" @bombClicked="onGameOver()"/>
                </div>

            </div>
        </div>
        <div class="text-textColor mt-10">
            <p><kbd>LMB</kbd> to reveal.</p>
            <p><kbd>RMB</kbd> to mark as bomb.</p>
        </div>
    </div>
    
    
</template>

<script lang="ts" setup>

    const shouldSwitchCells: Ref<Array<Array<number>>> = ref([]);
    const rerenderKey: Ref<number> = ref(0);

    const generateGridArray = (size: number) => {
        // generate empty array
        const rows = new Array(size);
        for (let i = 0; i < size; i++) {
            rows[i] = new Array(size);
        }
        // generate bombs
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                rows[y][x] = Math.random() > 0.85 ? -1 : 1;
            }
        }
        // generate numbers
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                if (rows[y][x] == -1) continue;
                let nearbyBombs: number = 0;
                const checkMatrix: Array<Array<number>> = [[-1, -1], [0, -1], [1, -1],
                                                            [-1, 0],           [1, 0],
                                                            [-1, 1], [0, 1], [1, 1]];
                for (let check of checkMatrix) {
                    try {
                        if (rows[y + check[1]][x + check[0]] == -1) nearbyBombs++;
                    } catch (e) {}
                }
                rows[y][x] = nearbyBombs;
            }
        }

        return rows;
    }
    const grid = ref(generateGridArray(10));


    const isInArray = (arr: Array<any>, search: any) => {
        let found = false;
        for (let e of arr) {
            if (JSON.stringify(e) == JSON.stringify(search)) found = true;
            if (found) break;
        }
        return found;
    }
    const addChecked = (add: Array<number>) => {
        if (!isInArray(checkedCells, add)) checkedCells.push(add);
    }
    const addShouldSwitch = (add: Array<number>) => {
        if (!isInArray(shouldSwitchCells.value, add)) shouldSwitchCells.value.push(add);
    }

    let checkedCells: Array<Array<number>> = [];
    const handleCellClick = (x: number, y: number) => {
        addChecked([x, y]);
        addShouldSwitch([x, y]);
        try {
            if (grid.value[x][y] != 0) return;


            
            const checkMatrix: Array<Array<number>> = [[-1, -1], [0, -1],  [1, -1],
                                                        [-1, 0],            [1, 0],
                                                        [-1, 1],  [0, 1],   [1, 1]]
                                                            
            for (let check of checkMatrix) {

                const tx = x + check[0];
                const ty = y + check[1];

                if (isInArray(checkedCells, [tx, ty])) continue;

                setTimeout(() => handleCellClick(tx, ty), 0);


            }
        } catch(e) {}

        



    }

    const onGameOver = () => {     
        for (let y = 0; y < grid.value.length; y++) {
            for (let x = 0; x < grid.value.length; x++) {            
                shouldSwitchCells.value.push([x, y]);
            }
        }
        setTimeout(() => {
            checkedCells = [];
            shouldSwitchCells.value = [];
            grid.value = generateGridArray(10);
            rerenderKey.value += 1;
        }, 5000);
    }




</script>