<template>
    <div class="container">
        <quoteTitle></quoteTitle>
        <progressBar></progressBar>
        <quoteTextField></quoteTextField>
        <quotesSection></quotesSection>
    </div>
</template>

<script>
    import QuoteTitle from './components/QuoteTitle.vue';
    import ProgressBar from './components/ProgressBar.vue';
    import QuoteTextField from './components/QuoteTextField.vue';
    import QuotesSection from './components/QuotesSection.vue';

    export default {
        components: {
            quoteTitle: QuoteTitle,
            progressBar: ProgressBar,
            quoteTextField: QuoteTextField,
            quotesSection: QuotesSection
        }
    }
</script>

<style>
</style>
