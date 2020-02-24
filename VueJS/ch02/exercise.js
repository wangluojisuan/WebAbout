new Vue({
    el: '#exercise',
    data: {
        YOUR_NAME: '王剑',
        AGE: 35,
        link: 'http://a2.att.hudong.com/36/48/19300001357258133412489354717.jpg'
    },
    methods: {
        outAge: function () {
            return this.AGE * 3;
        },
        outRandom: function () {
            return Math.random();
        },
        inputName: function (e) {
            e.target.value = '王剑';
        }
    }
});