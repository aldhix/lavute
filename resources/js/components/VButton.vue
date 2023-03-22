<script>
export default {
    props: ["type", "name"],
    data() {
        return {
            listButton: {
                create: {
                    label: "Create",
                    color: "btn-primary",
                    icon: "fas fa-plus",
                },
                submit: {
                    label: "Submit",
                    color: "btn-primary",
                    icon: "fas fa-database",
                },
                edit: {
                    label: "Edit",
                    color: "btn-primary",
                    icon: "fas fa-Edit",
                },
                update: {
                    label: "Update",
                    color: "btn-primary",
                    icon: "fas fa-database",
                },
                deleted: {
                    label: "Delete",
                    color: "btn-danger",
                    icon: "fas fa-trash",
                },
                cancel: {
                    label: "Cancel",
                    color: "btn-default",
                },
                back: {
                    label: "Back",
                    color: "btn-default",
                    icon: "fas fa-chevron-left",
                },
            },
        };
    },
    computed: {
        button() {
            let name = this.name.toLowerCase().trim()
            name = name == 'delete' ? 'deleted' : name
            return this.listButton[name];
        },
    },
};
</script>
<template>
    <router-link class="btn" :class="button.color" v-if="type == 'link'">
        <i class="mr-2" :class="button.icon" v-if="button.icon"></i>
        <span v-if="button.label" v-html="button.label"></span>
    </router-link>
    <button class="btn" :type="type" :class="button.color" v-else>
        <i class="mr-2" :class="button.icon" v-if="button.icon"></i>
        <span v-if="button.label" v-html="button.label"></span>
    </button>
</template>
