<script>
import $ from 'jquery';
import SidebarBrand from './SidebarBrand.vue';
import SidebarTreeview from "./SidebarTreeview.vue";
import SidebarNavitem from "./SidebarNavitem.vue";
export default {
    components: {
        SidebarBrand,
        SidebarNavitem,
        SidebarTreeview,
    },
    data() {
        return {
            menus: [],
            homeMenu: [
                {
                    name: "Dashboard",
                    icon: "fas fa-home",
                    routes:['home']
                },
            ],
            aboutMenu: [
                {
                    name: "About",
                    icon: "fas fa-info-circle",
                    routes:['about'],
                },
            ],
        };
    },
    mounted() {
        // if condition treeview not working after reach
        this.$nextTick(()=>{
            $('[data-widget="treeview"]').Treeview("init");
        })        
    },
    beforeMount() {
        this.menus = this.homeMenu.concat(this.aboutMenu);
        let { menus } = this;
        menus.forEach(function (menu, index) {
            if (menu.children) {
                let active = [];
                menu.children.forEach(function (child) {
                    active.push(child.to.name);
                    if (child.active) {
                        child.active.forEach(function (value) {
                            active.push(value);
                        });
                    }
                });
                menus[index].active = active;
            }
        });
    },
};
</script>
<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <sidebar-brand />
        <div class="sidebar">
            <nav class="mt-2">
                <ul
                    class="nav nav-pills nav-sidebar flex-column nav-child-indent nav-flat text-sm"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                >
                    <template v-for="(menu, i) in menus" :key="i">
                        <sidebar-navitem
                            :name="menu.name"
                            :icon="menu.icon"
                            :routes="menu.routes"
                            v-if="!menu.submenu"
                        />
                        <sidebar-treeview
                            :name="menu.name"
                            :icon="menu.icon"
                            :submenu="menu.submenu"
                            v-else
                        />
                    </template>
                </ul>
            </nav>
        </div>
    </aside>
</template>
