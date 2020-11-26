<template>
    <div class="main-content">
        <TopMenu>
        </TopMenu>
        <div>Coming soon...</div>
        <div class="footer-area">
            This site was created with Vue JS and Typescript.
        </div>

    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopMenu from "./TopMenu.vue";


@Component({components: {TopMenu}})
export default class Main extends Vue {}
</script>
<style>
.footer-area {
    margin: 1em;
}

.main-content {
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr auto;
}
</style>