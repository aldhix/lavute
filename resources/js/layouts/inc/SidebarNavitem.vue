<script>
export default {
  props: ["name", "icon","routes"],
  methods: {
    isActive() {
      let isself = this.routes[0];
      let current = this.$route.name;
      let active = this.routes ? this.routes : [];
      return current != isself ? active.includes(current) : true
    },
  },
};
</script>
<template>
  <li class="nav-item">
    <router-link :to="{ name : routes[0] }" class="nav-link" :class="{ active: isActive() }">
      <i class="nav-icon" :class="icon"></i>
      <p>
        {{ name }}
      </p>      
    </router-link>
  </li>
</template>