<template>
    <div class="container">
        <div class="row">
            <myTitle></myTitle>
        </div>
        <hr>
        <div class="row">
            <myServerList></myServerList>
            <myServerDetails></myServerDetails>
        </div>
        <hr>
        <myFooter></myFooter>
    </div>
</template>

<script>
    import Title from './Title.vue';
    import ServerList from './ServerList.vue';
    import Footer from './Footer.vue';
    import ServerDetails from './ServerDetails.vue';

    export default {
        components: {
            'myTitle': Title,
            'myServerList': ServerList,
            'myServerDetails': ServerDetails,
            'myFooter': Footer
        }
    }
</script>

<style>

</style>
