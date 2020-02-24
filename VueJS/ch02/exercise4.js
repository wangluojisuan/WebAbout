new Vue({
    el: '#exercise',
    data: {
        isUsed: false
    },
    methods: {
        startEffect: function (event) {
            this.isUsed = !this.isUsed;
        },
        startProgress: function () {

        }
    }
});