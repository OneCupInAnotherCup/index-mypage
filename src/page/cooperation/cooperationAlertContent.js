/**
 * Created by ttl on 2017/7/12.
 */
(function () {
    var Vue = require('vue');
    var backgroundManagement = require('./type/backgroundManagermentForm.vue');
    var freeConsultation = require('./type/freeConsultationForm.vue');
    var html5Page = require('./type/html5PageForm.vue');

    new Vue({
        el: '#cooperationAlertContent',
        components: {
            backgroundManagement: backgroundManagement,
            freeConsultation: freeConsultation,
            html5Page: html5Page
        },
        data: {
            type: parent.cooperation.type
        }
    });
})()