<template>
    <span class="link">
        <slot></slot>
    </span>
</template>
<style>
.link:hover {
    color: white;
    cursor: pointer;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default class ClickText extends Vue {}
</script>