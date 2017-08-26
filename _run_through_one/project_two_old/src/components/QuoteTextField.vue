<template>
    <div class="container">
        <h4>Enter the title of your quote here</h4>
        <textarea @keyup="quoteTitle = $event.target.value" class="textareaTitle"></textarea>
        <h4>Enter your quote here</h4>
        <textarea @keyup="quoteText = $event.target.value" class="textareaQuote"></textarea>
        <h4>Enter the author of your quote here</h4>
        <textarea @keyup="quoteAuthor = $event.target.value" class="textareaAuthor"></textarea>
        <br>
        <button @click="addQuote" class="button">Add Quote</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quoteTitle: '',
                quoteText: '',
                quoteAuthor: ''
            }
        },
        methods: {
            addQuote: function() {
                console.log(this.quoteTitle);
                console.log(this.quoteText);
                console.log(this.quoteAuthor);
                quoteBus.$emit('quoteAdded', [this,quoteTitle])
            }
        }
    }
</script>

<style scoped>
    .container {
        text-align: center;
    }

    .textareaTitle {
        height: 50px;
        width: 800px;
    }

    .textareaQuote {
        height: 200px;
        width: 800px;
    }

    .textareaAuthor {
        height: 50px;
        width: 800px;
    }

    .button {
        margin-top: 10px;
        height: 50px;
        width: 400px;
        background-color: lightgreen;
    }
</style>