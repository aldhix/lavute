<script>
export default {
    props: ["label", "value", "icon", "to", "bgColor"],
};
</script>
<template>
    <div class="small-box" :class="bgColor">
        <div class="inner">
            <h3 v-html="value"></h3>
            <p v-html="label"></p>
        </div>
        <div class="icon">
            <i :class="icon"></i>
        </div>
        <router-link :to="to" class="small-box-footer"
            >More info <i class="fas fa-arrow-circle-right"></i
        ></router-link>
    </div>
</template>
