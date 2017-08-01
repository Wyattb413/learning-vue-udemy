<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <template v-else>
            <p>Server Selected: {{ server.serverName }} 
                    <br>Location: {{ server.location }}
                    <br>Status: {{ server.status }}</p>
            <hr>
            <p>Change Status:</p>
            <button @click="changeStatus(server.serverName, 'ok')" class="btn bg-success">Ok</button>
            <button @click="changeStatus(server.serverName, 'unknown')" class="btn bg-warning">Unknown</button>
            <button @click="changeStatus(server.serverName, 'critical')" class="btn bg-danger">Critical</button>
        </template>
    </div>

</template>

<script>
    import { serverBus } from '../../main.js';

    export default {
        data() {
            return {
                server: null
            }
        },
        created() {
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        },
        methods: {
            changeStatus(serverName, status) {
                this.server.status = status;
            }
        }
    }
</script>

<style>

</style>
