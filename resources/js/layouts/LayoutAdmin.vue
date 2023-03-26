<script>
import $ from 'jquery';
import { mapState } from 'vuex';
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
    computed:{
        ...mapState(['name']),
        titlePage(){
            return this.title ? `${this.name} | ${this.title}` : this.name;
        }
    },
    beforeMount(){
        document.title = this.titlePage
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
                <slot></slot>
            </v-content>            
        </div>
        <v-footer/>
    </div>
</template>