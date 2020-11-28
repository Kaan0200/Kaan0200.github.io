<template>
    <div class="wrapper">
        <div class="content">
            <div>Welcome</div>
             <Spacer/>
            <div>Skills</div>
            <Spacer/>
            <div>Links</div>
             <Spacer/>
            <div>Contact</div>
        </div>
    </div>
</template>
<style>
.wrapper {
    padding: 1em;
    border-bottom: 1px solid black;
    box-shadow: 0 0 1em black;

    background-color: #CF8E26; 
}
.content {
    display: flex;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Spacer from "./utilities/spacer.vue";

@Component({components: {Spacer}})
export default class TopMenu extends Vue {}

</script>