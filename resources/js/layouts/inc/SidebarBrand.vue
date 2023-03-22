<script>
import { mapState } from 'vuex';
import logo from "admin-lte/dist/img/AdminLTELogo.png"
export default {
    computed:{
        ...mapState(['name'])
    },
    data() {
        return {
            logo : logo
        }
    },
}
</script>
<template>
    <a href="#" class="brand-link">
        <img
            :src="logo"
            alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3"
            style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light">{{ name }}</span>
    </a>
</template>
