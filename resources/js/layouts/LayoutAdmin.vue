<script>
import $ from 'jquery';
import Navbar from './inc/Navbar.vue';
import Sidebar from './inc/Sidebar.vue';
import VFooter from './inc/VFooter.vue';
import VContent from '../components/VContent.vue';
export default {
    props:['title','icon'],
    components:{
        Navbar,
        Sidebar,
        VFooter,
        VContent
    },
    mounted(){
        this.$nextTick(()=>{
            $('body').addClass('hold-transition sidebar-mini').Layout('fixLayoutHeight')
        })
    },
}
</script>
<template>
    <div class="wrapper">
        <navbar />
        <sidebar/>
        <div class="content-wrapper">
            <v-content :title="title" :icon="icon">
                <router-view></router-view>
            </v-content>            
        </div>
        <v-footer/>
    </div>
</template>