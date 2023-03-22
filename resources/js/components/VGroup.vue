<script>
export default {
    props:['label']
}
</script>
<template>
    <div class="form-group">
        <label v-if="label" v-html="label"></label>
        <slot></slot>
    </div>
</template>