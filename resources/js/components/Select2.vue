<script>
export default {
    inheritAttrs: false,
    props: ["id", "modelValue", "errors", "helper", "displayError"],
    emits: ["update:modelValue"],
    computed: {
        value: {
            get() {
                return this.modelValue ? this.modelValue : "";
            },
            set(value) {
                this.$emit("update:modelValue", value);
            },
        },
        idHastag() {
            return "#" + this.id;
        },
        dataError() {
            return this.errors;
        },
    },
    data() {
        return {
            invalid: false,
        };
    },
    watch: {
        errors: {
            immediate: true,
            deep: true,
            handler(newValue) {
                if (newValue) {
                    this.invalid = true;
                } else {
                    this.invalid = false;
                }
            },
        },
        invalid(newVal) {
            if (newVal) {
                $(`${this.idHastag}`).addClass("is-invalid");
            } else {
                $(`${this.idHastag}`).removeClass("is-invalid");
            }
        },
    },
    mounted() {
        this.initSelect();
    },
    methods: {
        getDisplayError() {
            let errors = this.errors;
            let show = this.displayError;
            return errors && show != "false";
        },
        initSelect() {
            const app = this;
            $(`${app.idHastag}`).select2();
            $(`${app.idHastag}`).on("select2:select", function (e) {
                const val = $(this).val();
                app.value = val;
            });
            if (app.errors) {
                $(`${app.idHastag}`).addClass("is-invalid");
            } else {
                $(`${app.idHastag}`).removeClass("is-invalid");
            }
        },
    },
};
</script>

<template>
    <select :id="id" class="form-control" v-bind="$attrs">
        <slot></slot>
    </select>
    <div
        class="invalid-feedback d-block"
        v-if="getDisplayError()"
        v-html="errors"
    ></div>
    <small v-html="helper" class="text-muted form-text" v-if="helper"></small>
</template>
