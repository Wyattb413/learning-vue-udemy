new Vue ({
    el: '#exercise',
    data: {
        name: 'Wyatt',
        age: '18',
        catLink: 'http://static2.businessinsider.com/image/5654150584307663008b4ed8/this-tech-recruiter-owns-the-most-hipster-cat-on-instagram.jpg'
    },
    methods: {
        timesThree: function (number) {
            return number * 3
        },
        randomFloat: function (minimum, maximum) {
            return Math.random() * (maximum - minimum) + minimum
        }
    }
})