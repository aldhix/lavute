<script>
export default {
    inheritAttrs: false,
    props: ["modelValue", "errors", "helper", "displayError"],
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
    methods: {
        getDisplayError() {
            let errors = this.errors;
            let show = this.displayError;
            return errors && show != "false";
        },
    },
};
</script>

<template>
    <input
        class="form-control"
        v-bind="$attrs"
        v-model="value"
        :class="{ 'is-invalid': errors }"
    />
    <div
        class="invalid-feedback"
        v-if="getDisplayError()"
        v-html="errors"
    ></div>
    <small v-html="helper" class="text-muted form-text" v-if="helper"></small>
</template>
