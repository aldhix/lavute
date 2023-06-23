<script>
import VTable from './VTable.vue'
export default {
    components:{
        VTable
    }
}
</script>
<template>
    <div class="card card-outline card-primary">
        <div class="card-header form-inline" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="card-header form-inline" v-if="$slots.helper">
            <slot name="helper"></slot>
        </div>
        <div class="card-body p-0 table-responsive">
            <v-table>
                <slot></slot>
            </v-table>
        </div>
        <div class="card-footer form-inline pb-0" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
