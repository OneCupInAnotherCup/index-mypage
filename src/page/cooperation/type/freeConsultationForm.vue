<template>
    <form>
        <div class="form-item">
            <label for="projectName">项目名</label>
            <input id="projectName" placeholder="项目名">
        </div>
        <div class="form-item">
            <label for="email">邮箱</label>
            <input id="email" placeholder="邮箱">
        </div>
        <div class="form-item form-msg">
            <span>收到信息后，将在最短时间内通过邮件联系，请随时关注邮箱</span>
        </div>
        <div class="form-item form-button-group">
            <button class="form-button">提交</button>
        </div>
    </form>
</template>
<style>
    @import "../../../../lib/css/common.css";
    @import "../../../../lib/css/form.css";
</style>
<script>
    var freeConsultationConfig = {};
    export default{
        created: function () {
            window.addEventListener('load', function () {
                parent.alert.alertBodyHeight = document.body.scrollHeight + 'px';
            })
        },
        data(){
            return freeConsultationConfig;
        }
    }
</script>