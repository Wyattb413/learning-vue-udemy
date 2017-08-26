<template>
    <div>
        <div v-for="quote in quotes" class="quoteDiv">
            <h4 class="quoteTitle">{{ quote.title }}</h4>
            <p class="quoteQuote">"{{ quote.quote }}"</p>
            <p class="quoteAuthor">- {{ quote.author }}</p>
        </div>
    </div>
</template>

<script>
    import { quoteBus } from '../main.js';

    export default {
        data() {
            return {
                quotes: [
                    {
                        'title': 'No Science Like Physics',
                        'quote': "There is no science in this world like physics. Nothing comes close to the precision with which physics enables you to understand the world around you. It's the laws of physics that allow us to say exactly what time the sun is going to rise. What time the eclipse is going to begin. What time the eclipse is going to end.",
                        'author': 'Neil deGrasse Tyson'
                    },
                    {
                        'title': 'Something No One Knew Before',
                        'quote': "No one undertakes research in physics with the intention of winning a prize. It is the joy of discovering something no one knew before.",
                        'author': 'Stephen Hawking'
                    }
                ]
            }
        },
        created() {
            quoteBus.$on('quoteAdded', (quote) => {
                this.quotes.push(quote)
            });
        }
    }
</script>

<style>
    .quoteDiv {
        vertical-align: top;
        display: inline-block;
        background-color: #eee8f3;
        height: auto;
        min-height: 200px;
        width: 500px;
        margin: 20px;
        padding: 10px;
    }

    .quoteTitle {
        text-decoration: underline;
    }

    .quoteQuote {
        font-style: italic;
    }

    .quoteAuthor {
        float: right;
        bottom: 0;
    }
</style>