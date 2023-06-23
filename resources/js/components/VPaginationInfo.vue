<script>
export default {
    props : ['meta']
}
</script>
<template>
    <span v-if="meta.total">
    Data ke <strong class="mx-1" v-html="meta.from"></strong> s.d <strong class="mx-1" v-html="meta.to"></strong> 
    dari total <strong class="ml-1" v-html="meta.total"></strong>
    </span>
</template>
