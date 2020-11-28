<template>
    <div class="main-content">
        <div class="header-area">
            Welcome to my professional site
        </div>
        <div class="abilities">
            <div class="section">
                 <div style="font-size: 100px;">
                    <i class='bx bxs-category-alt'></i>
                </div>
                <div>
                    I understand a wide veriaty of technologies, topics, and skills.
                </div>
            </div>
            <div class="section">
                <div style="font-size: 100px;">
                    <i class='bx bxs-brain'></i>
                </div>
                <div>
                    I enjoy numerous programming projects and puzzles and love to try to familiarize many new technologies.  Mostly because it's a good brain workout!
                </div>
            </div>
            <div class="section">
                <div style="font-size: 100px;">
                    <i class='bx bxs-network-chart'></i>
                </div>
                <div>
                    I relish in testing my skills and knowledge through freelance work, developing, discussing, and creating solutions! 
                </div>
            </div>
        </div>
        <div class="footer-area">
            This site was created with Vue JS and written, styled, and designed by Alan Atesoglu
        </div>

    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Main extends Vue {}
</script>
<style>
.abilities {
    display: flex;
    align-content: center;
    margin: auto;
}
.section {
    width: 200px;
}
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