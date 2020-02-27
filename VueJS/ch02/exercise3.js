new Vue({
    el: "#exercise",
    data: {
        value: 0,
    },
    methods: {

    },
    computed: {
        result: function () {
            console.log('computed');
            return this.value == 37?'done':'not there yet';
        }
    },
    watch: {
        result: function (va) {
            console.log('watch');
            let vm = this;
            setTimeout(() => {
                vm.value = 0;
                console.log('setTimeout');
            }, 5000);
        }
    }
});