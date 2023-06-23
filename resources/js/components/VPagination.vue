<script>
export default {
    props : ['meta'],
    computed:{
        links(){
            return this.meta.links
        }
    }
}
</script>
<template>
    <ul class="pagination pagination-sm" v-if="meta.total">
        <template v-for="(link, index) in links" :key="index">
            <li class="page-item" :class="{ active : link.active }" v-if="link.url">
                <router-link class="page-link" :to="link.url"><span v-html="link.label"></span></router-link>
            </li>
            <li class="page-item disabled" v-else>
                <a class="page-link"><span v-html="link.label"></span></a>
            </li>
        </template>
    </ul>
</template>
