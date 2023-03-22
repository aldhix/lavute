<script>
export default {
    inheritAttrs: false,
    props: ["modelValue", "errors", "icon"],
    emits: ["update:modelValue"],
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit("update:modelValue", value);
            },
        },
    },
};
</script>

<template>
    <div class="input-group">
        <input
            class="form-control"
            v-bind="$attrs"
            v-model="value"
            :class="{ 'is-invalid': errors }"
        />
        <div class="input-group-append">
            <div class="input-group-text">
                <span :class="icon"></span>
            </div>
        </div>
    </div>
    <div class="invalid-feedback d-block" v-if="errors" v-html="errors"></div>
</template>
