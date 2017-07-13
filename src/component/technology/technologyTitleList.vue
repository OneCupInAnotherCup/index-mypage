<template>
    <ul class="technology-title-list" @mousewheel.native,passive="listWheel($event.currentTarget, $event.wheelDelta)">
        <li class="technology-title-list-content" v-for="technologyObject in technologyObjectList">
            <div class="technology-title-body">
                <span>{{technologyObject.titleParentName}}</span>
                <div class="technology-title-content">
                    <ul>
                        <li class="technology-title" v-for="titleChild in technologyObject.titleChildren">{{titleChild.title}}<span class="update-time">更新：{{titleChild.updateTime}}</span></li>
                        <li class="technology-title-footer" @click="openView()">前往阅读系列文章</li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
</template>
<style>
    .technology-title-list {
        height: 400px;
        font-size: 36px;
        font-family: 'Dancing Script';
        font-weight: bold;
        color: #353535;
        text-align: center;
        padding: 50px 0px;
        cursor: default;
        overflow: hidden;
    }

    .technology-title-list .technology-title-list-content:before {
        content: '';
        display: inline-block;
        margin-right: 20px;
        vertical-align: top;
        width: 86px;
        height: 36px;
        background: url("../../../lib/image/title_sign.png") no-repeat 0 0;
    }

    .technology-title-list .technology-title-list-content:after {
        content: '';
        display: inline-block;
        margin-left: 20px;
        vertical-align: top;
        width: 86px;
        height: 36px;
        background: url("../../../lib/image/title_sign.png") no-repeat -86px 0;
    }

    .technology-title-body {
        display: inline-block;
        vertical-align: top;
        width: 500px;
        overflow: hidden;
    }

    .technology-title-content {
        text-align: left;
        font-size: 20px;
        font-weight: bold;;
        font-family: 'Microsoft JhengHei';
        padding: 20px 0;
    }

    .technology-title {
        margin-bottom: 5px;
        padding: 0 10px;
        box-shadow: 0 0 2px #000;
    }

    .technology-title-footer {
        background: #353535;
        color: #fff;
        font-size: 15px;
        padding: 5px 10px;
        margin-bottom: 5px;
        box-shadow: 0 0 2px #000;
        cursor: pointer;
    }

    .technology-title .update-time {
        float: right;
        font-size: 15px;
        line-height: 27px;
    }
</style>
<script>
    import controller from '../../../lib/js/controller.js';
    var technologyObjectList = [{
        titleParentName: 'eureka',
        titleChildren: [{
            title: 'eureka从入门到精通',
            updateTime: '2017-02-02'
        }, {
            title: 'eureka从入门到精通',
            updateTime: '2017-02-02'
        }]
    }, {
        titleParentName: 'mybatis',
        titleChildren: [{
            title: 'mybatis从入门到精通',
            updateTime: '2017-02-02'
        }, {
            title: 'mybatis从入门到精通',
            updateTime: '2017-02-02'
        }]
    }, {
        titleParentName: 'spring',
        titleChildren: [{
            title: 'spring从入门到精通',
            updateTime: '2017-02-02'
        }, {
            title: 'spring从入门到精通',
            updateTime: '2017-02-02'
        }]
    }, {
        titleParentName: 'jpa',
        titleChildren: [{
            title: 'jpa从入门到精通',
            updateTime: '2017-02-02'
        }, {
            title: 'jpa从入门到精通',
            updateTime: '2017-02-02'
        }]
    }];
    export default {
        created: function () {
        },
        data(){
            return {
                technologyObjectList: technologyObjectList
            }
        },
        methods: {
            listWheel: function (el, wheelDelta) {
                if (wheelDelta < 0)
                    el.scrollTop += 20;
                else
                    el.scrollTop -= 20
            },
            openView: function () {
                controller.readView.open();
            }
        }
    }

</script>