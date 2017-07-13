<template>
    <div>
        <span class="cooperation-project-sign free-consultation-sign" @click="openAlert(cooperationType.freeConsultation)"></span>
        <span class="cooperation-project-sign background-management-sign" @click="openAlert(cooperationType.backgroundManagement)"></span>
        <span class="cooperation-project-sign html5-page-sign" @click="openAlert(cooperationType.html5Page)"></span>
    </div>
</template>
<style>
    .cooperation-project-sign {
        position: relative;
        display: block;
        width: 200px;
        height: 200px;
        cursor: pointer;
        box-shadow: 0 0 10px #000;
        transition: transform .6s;
        -moz-transition: transform .6s; /* Firefox 4 */
        -webkit-transition: transform .6s; /* Safari 和 Chrome */
        -o-transition: transform .6s; /* Opera */
    }

    .cooperation-project-sign.free-consultation-sign {
        transform: scale(1, 1) rotate(-10deg);
        background: url("../../../lib/image/project.png") no-repeat 0 0;
        margin: 20px 0 0 75px;
    }

    .cooperation-project-sign.free-consultation-sign:hover {
        transform: scale(1.3, 1.3) rotate(-370deg);
    }

    .cooperation-project-sign.background-management-sign {
        transform: scale(1, 1) rotate(10deg);
        background: url("../../../lib/image/project.png") no-repeat -200px 0;
        margin: 0px 10px 0px 420px;
        top: -110px;
    }

    .cooperation-project-sign.background-management-sign:hover {
        transform: scale(1.3, 1.3) rotate(370deg);
    }

    .cooperation-project-sign.html5-page-sign {
        transform: scale(1, 1) rotate(-5deg);
        background: url("../../../lib/image/project.png") no-repeat -400px 0;
        margin: 0px 10px 0px 240px;
        top: -165px;
    }

    .cooperation-project-sign.html5-page-sign:hover {
        transform: scale(1.3, 1.3) rotate(365deg);
    }

</style>
<script>
    import controller from  '../../../lib/js/controller.js';
    window.cooperation = window.cooperation || {
            type: {
                backgroundManagement: {
                    status: false
                },
                freeConsultation: {
                    status: false
                },
                html5Page: {
                    status: false
                }
            }
        };

    var cooperationTypeConfig = {
        cooperationType: window.cooperation.type
    };
    export default{
        data(){
            return cooperationTypeConfig;
        },
        methods: {
            openAlert: function (type) {
                for (var typeName in window.cooperation.type) {
                    window.cooperation.type[typeName].status = false;
                }
                type.status = true;
                controller.alert.open('page/cooperation/cooperationAlertContent.html');
            }
        }
    }
</script>