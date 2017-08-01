<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="activeComponent = 'appBlue' " class="btn btn-primary">Load Blue Template</button>
                <button @click="activeComponent = 'appGreen' " class="btn btn-success">Load Green Template</button>
                <button @click="activeComponent = 'appRed' " class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="activeComponent">
                    {{ content }}
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data() {
            return {
                content: "This is some radical content, man!",
                activeComponent: null
            }
        }
    }
</script>

<style>
</style>
