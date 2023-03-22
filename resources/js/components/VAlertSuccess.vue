<script>
export default {
    props: ["index"],
    methods: {
        close() {
            this.$store.state.alerts.splice(this.index, 1);
        },
    },
};
</script>
<template>
    <div class="alert alert-success alert-dismissible">
        <button type="button" class="close" @click="close()">×</button>
        <h5><i class="icon fas fa-check"></i> Alert!</h5>
        Success alert preview. This alert is dismissable.
    </div>
</template>
