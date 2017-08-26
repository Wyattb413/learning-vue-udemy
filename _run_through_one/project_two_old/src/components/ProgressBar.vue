<template>
    <div class="progressBar">
        <div :style="{ width: progress + '%' }" class="progress">
            {{ progress / 10 }} / {{ total }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                progress: 20,
                total: 10
            }
        }
    }
</script>

<style scoped>
    .progressBar {
        width: 100%;
        background-color: lightgrey;
    }

    .progress {
        text-align: center;
        background-color: lightgreen;
    }
</style>