<script>
export default {
    props: ["title", "icon", "id", "size"],
    emits: ["modalClose","formSubmit"],
    methods: {
        modalClose() {
            this.$emit("modalClose");
        },
        formSubmit(){
            this.$emit("formSubmit")
        }
    },
};
</script>
<template>
    <Teleport to="body">
        <div class="modal fade" :id="id" data-backdrop="static" data-keyboard="false" tabindex="-1">
            <form class="modal-dialog" :class="size" @submit.prevent="formSubmit()">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <i class="mr-2" :class="icon" v-if="icon"></i>
                            <span v-html="title"></span>
                        </h5>
                        <button
                            title="Close"
                            type="button"
                            class="close"
                            aria-label="Close"
                            @click="modalClose()"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div class="modal-footer" v-if="$slots.footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </form>
        </div>
    </Teleport>
</template>
