<template>
    <div class="main-content">
        <div class="header-area">
            Welcome to my professional site
        </div>
        <div>Coming soon...</div>
        <div class="footer-area">
            This site was created with Vue JS and not a whole lot else
        </div>

    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Main extends Vue {}
</script>
<style>
.header-area {
    margin: 1em;
}
.footer-area {
    margin: 1em;
}

.main-content {
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr auto;
}
</style>