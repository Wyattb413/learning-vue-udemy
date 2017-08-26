<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="server in servers" :server="server">
            </app-server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';

    export default {
        data() {
            return {
                servers: [
                    {
                        serverName: 'us-east',
                        location: 'west virginia',
                        status: 'critical'
                    },
                    {
                        serverName: 'us-west',
                        location: 'california',
                        status: 'unknown'
                    },
                    {
                        serverName: 'us-south',
                        location: 'texas',
                        status: 'ok'
                    }
                ]
            }
        },
        components: {
            appServer: Server
        }
    }
</script>

<style>

</style>
