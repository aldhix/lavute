<script>
export default {
    props: ["title", "icon"],
};
</script>
<template>
    <div class="content-header mb-2">
        <div class="container-fluid">
            <h1 class="m-0">
                <i class="mr-1" :class="icon" v-if="icon"></i>
                {{ title }}
            </h1>
        </div>
    </div>

    <div class="content">
        <div class="container-fluid">
            <slot></slot>
        </div>
    </div>
</template>