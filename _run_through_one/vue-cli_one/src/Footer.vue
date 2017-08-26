<template>
    <div>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>{{ footerMessage }}</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                footerMessage: 'All Servers are managed here'
            }
        }
    }
</script>

<style>

</style>
