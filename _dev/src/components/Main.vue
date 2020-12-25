<template>
    <div class="main-content">
        <TopMenu>
        </TopMenu>
        <ContentArea />
        <Footer />
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopMenu from "./TopMenu.vue";
import ContentArea from "./ContentArea.vue";
import Footer from "./Footer.vue";

@Component({components: {TopMenu, Footer, ContentArea}})
export default class Main extends Vue {}
</script>
<style>
.main-content {
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr auto;
}
</style>