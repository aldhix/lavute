<template>
    <form class="card card-outline card-primary">
        <div class="card-header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
        <div class="card-footer form-inline" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </form>
</template>
