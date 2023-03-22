<script>
import $ from 'jquery';
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['name']),
    },
    beforeMount(){
        document.title = `${this.name} | Login`
    },
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