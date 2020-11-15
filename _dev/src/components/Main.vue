<template>
    <div class="main-content">
        <div>Welcome to my professional site</div>
        <div>I'll put stuff here eventually</div>
        <div>This site was created with Vue JS and not a whole lot else</div>

    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Main extends Vue {}
</script>
<style>
.main-content {
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr auto;
}
</style>