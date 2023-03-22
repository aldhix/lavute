<script>
import Navbar from './inc/Navbar.vue';
import Sidebar from './inc/Sidebar.vue';
import VFooter from './inc/VFooter.vue';
export default {
    components:{
        Navbar,
        Sidebar,
        VFooter
    },
    mounted(){
        $('body').Layout('fixLayoutHeight')
    }
}
</script>
<template>
    <div class="wrapper">
        <navbar />
        <sidebar/>
        <div class="content-wrapper">
            <slot></slot>
        </div>
        <v-footer/>
    </div>
</template>