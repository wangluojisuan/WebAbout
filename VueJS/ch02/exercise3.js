new Vue({
    el: "#exercise",
    data: {
        value: 0,
    },
    methods: {

    },
    computed: {
        result: function () {
            if (this.value > 37) {
                return 'done';
            }
        }
    },
    watch: {
        value: function (va) {
            let vm = this;
            setTimeout(() => {
                vm.value = 0;
            }, 5000);
        }
    }
});