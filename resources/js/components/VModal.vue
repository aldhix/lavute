<script>
export default {
    props: ["title", "icon", "id", "size"],
    emits: ["modalClose"],
    methods: {
        modalClose() {
            this.$emit("modalClose");
        },
    },
};
</script>
<template>
    <Teleport to="body">
        <div class="modal fade" :id="id" tabindex="-1">
            <div class="modal-dialog" :class="size">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <i class="mr-1" :class="icon" v-if="icon"></i>
                            <span v-html="title"></span>
                        </h5>
                        <button
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
                    <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>
