<template>
    <div class="layout">
        <main>
            <div class="container">
                <ResumeHero class="hero" />
                <div class="main">
                    <NuxtPage />
                </div>
                <ResumeFooter class="footer" />
            </div>
        </main>
    </div>
</template>
<style lang="css" scoped>
.layout {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    min-width: 340px;
}

@media print {
    .layout {
        margin: 0;
        padding: 0;
    }

    .main {
        padding-block: 0;
    }
}

.hero {
    background: #fff;
    z-index: 10;
    position: sticky;
}

.main {
    padding-inline: 2rem;
    max-width: 960px;
    margin-inline: auto;
    z-index: 1;
}
</style>