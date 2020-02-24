new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        btnClick: function (event) {
            alert('alert!');
        },
        inputKeydown: function (event) {
            this.value = event.target.value;
        }
    }
});