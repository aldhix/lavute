<script>
import ETable from './ETable.vue'
export default {
    components:{
        ETable
    }
}
</script>
<template>
    <div class="card card-outline card-primary">
        <div class="card-header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="card-body p-0">
            <e-table>
                <slot></slot>
            </e-table>
        </div>
        <div class="card-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
