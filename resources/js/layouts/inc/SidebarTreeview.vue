<script>
import SidebarNavitem from "./SidebarNavitem.vue";
export default {
  props: ["name", "icon", "submenu"],
  components: {
    SidebarNavitem,
  },
  computed:{
    isActive() {
      let current = this.$route.name;
      let menu = this.submenu;
      let active = [];
      menu.forEach(function (child) {
        if (child.routes) {
          child.routes.forEach(function (value) {
            active.push(value);
          });
        }
      });
      return active.includes(current)
    },
  }
};
</script>
<template>
  <li class="nav-item menu-open" v-if="submenu">
    <a href="#" class="nav-link" :class="{ active: isActive }">
      <i class="nav-icon" :class="icon"></i>
      <p>
        {{ name }}
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
      <sidebar-navitem
        v-for="(menu, i) in submenu"
        icon="far fa-circle"
        :key="i"
        :name="menu.name"
        :routes="menu.routes"
      />
    </ul>
  </li>
</template>