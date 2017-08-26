new Vue({
    el: '#exercise',
    data: {
        value: 0,
    },
    computed: {
        result: function() {
            return this.value < 37 ? result = 'You haven\'t reached the target yet, keep going!' : result = 'Congrats! You\'re Done!';
        }
    },
    watch: {
        result: function() {
            var vi = this;
            setTimeout(function() {
                vi.value = 0;
            }, 5000);
        }
    }
});