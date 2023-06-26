<script>
export default {
    inheritAttrs: false,
    props: ["modelValue", "errors", "helper", "displayError"],
    emits: ["update:modelValue"],
    computed:{
        label(){
            const label = 'Pilih file';
     
            try {
                return this.modelValue.name;
            } catch (error) {
                return label
            }
            
        }
    },
    watch:{
        label(newVal){
            if(newVal == "Pilih file"){
                this.$refs.fileupload.value = null;                
            }
        }
    },
    methods: {
        getDisplayError() {
            let errors = this.errors;
            let show = this.displayError;
            return errors && show != "false";
        },
        onChange(e){
            const file = e.target.files[0];
            this.$emit('update:modelValue',file)
        },
    },
};
</script>

<template>
    <div class="custom-file">
        <input
            ref="fileupload"
            type="file"
            class="custom-file-input"
            v-bind="$attrs"
            :class="{ 'is-invalid': errors }"
            @change="onChange($event)"
        />
        <label class="custom-file-label" v-html="label"></label>
        <div
            class="invalid-feedback"
            v-if="getDisplayError()"
            v-html="errors"
        ></div>
        <small
            v-html="helper"
            class="text-muted form-text"
            v-if="helper"
        ></small>
    </div>
</template>
