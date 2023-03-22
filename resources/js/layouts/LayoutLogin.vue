<script>
import $ from 'jquery';
export default {
    mounted(){
        this.$nextTick(()=>{
            $('body').addClass('hold-transition login-page').Layout('fixLoginRegisterHeight')
        })
    },
}
</script>
<template>
    <div class="login-box">
        <slot></slot>
    </div>
</template>