<template>
    <div class="container">
        <div class="row">
            <my-title></my-title>
        </div>
        <hr>
        <div class="row">
            <my-serverList></my-serverList>
            <my-serverDetails></my-serverDetails>
        </div>
        <hr>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import Title from './Title.vue';
    import ServerList from './ServerList.vue';
    import Footer from './Footer.vue';
    import ServerDetails from './ServerDetails.vue';

    export default {
        components: {
            'my-title': Title,
            'my-serverList': ServerList,
            'my-serverDetails': ServerDetails,
            'my-footer': Footer
        }
    }
</script>

<style>

</style>
