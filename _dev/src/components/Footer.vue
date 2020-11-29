<template>
    <div class="footer-area">
        This site was created with Vue JS and written, styled, and designed by Alan Atesoglu
    </div>
</template>
<style>
.footer-area {
    border-top: 1px solid lightgrey;

    padding: 1em;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {

}
</script>