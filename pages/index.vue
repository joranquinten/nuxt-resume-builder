<script setup lang="ts">

const { data: sections } = await useAsyncData('sections', () =>
  queryCollection('sections').order('order', 'ASC').all()
)

const highLightedItems = computed(() => sections.value?.filter(item => item.highlight) || [])
const otherItems = computed(() => sections.value?.filter(item => !item.highlight) || [])

const { data: rawExperience } = await useAsyncData('experience', () =>
  queryCollection('experience').all()
)

const experience = computed(() => {
  return rawExperience.value?.map(item => ({
    ...item,
    sortDate: item.dateTo || new Date('2099-12-31')
  })).sort((a, b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime()) || []
})


const { data: education } = await useAsyncData('education', () =>
  queryCollection('education').all()
)

const formatDate = (date?: string | Date) => {
  if (!date) return 'Present'
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}
</script>

<template>
  <div class="container">
    <div class="hero-item">
      <ContentRenderer v-for="section in highLightedItems" :key="section.id" :value="section" />
    </div>

    <div class="main">
      <div class="experience">
        <h2>Experience</h2>
        <div v-for="item in experience" :key="item.id" class="experience-item">
          <h3>{{ item.title }}</h3>
          <p v-if="item.companyUrl"><a :href="item.companyUrl" target="_blank" rel="noopener noreferrer">{{ item.company }}, {{ item.location }}</a></p>
          <p v-else>{{ item.company }}, {{ item.location }}</p>
          <p>{{ formatDate(item.dateFrom) }} - {{ formatDate(item.dateTo) }}</p>
          <ContentRenderer :value="item" />
        </div>
      </div>

      <div class="education">
        <h2>Education</h2>
        <div v-for="item in education" :key="item.id" class="experience-item">
          <h3>{{ item.title }}</h3>
          <p>{{ item.institution }}, {{ item.location }}</p>
          <p>{{ formatDate(item.dateFrom) }} - {{ formatDate(item.dateTo) }}</p>
          <ContentRenderer :value="item" />
        </div>
      </div>
    </div>

    <div class="extra">
      <ContentRenderer v-for="section in otherItems" :key="section.id" :value="section" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 32px;
  align-items: start;
  align-content: start;

  /* Mobile and tablet: single column layout */
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main"
    "extra"
    "footer";
}

/* Desktop breakpoint */
@media (min-width: 768px) {
  .container {
    grid-template-columns: 3fr minmax(240px, 1fr);
    grid-template-areas:
      "header header"
      "main extra"
      "footer footer";

    /* Ensure experience column doesn't get too small */
    grid-template-columns: minmax(240px, 3fr) minmax(240px, 1fr);
  }
}

/* Print media: use desktop layout */
@media print {
  .container {
    grid-template-columns: minmax(240px, 3fr) minmax(240px, 1fr);
    grid-template-areas:
      "header header"
      "main extra"
      "footer footer";
  }
}

/* Named grid areas for easy reference */
.header {
  grid-area: header;
}

.main {
  grid-area: main;
}

.extra {
  grid-area: extra;
}

.footer {
  grid-area: footer;
}

.hero-item {
  grid-area: header;
  max-width: 800px;
  margin-inline: auto;
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>