(function () {
    var Vue = require('vue')
    var index = require('./src/component/index/index.vue')
    window.addEventListener('load', function () {
        new Vue({
            el: '#content',
            components: {
                index: index
            }
        });
    })
})()