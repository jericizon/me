<script setup lang="ts">
import { projects } from '~/data/projects'
import type { Project } from '~/types/project'

const selected = ref<Project | null>(null)

const open = (id: string) => {
  selected.value = projects.find((p) => p.id === id) ?? null
}

const close = () => {
  selected.value = null
}
</script>

<template>
  <section id="work" class="scroll-mt-20 py-20 md:py-28" aria-label="Selected work">
    <AppContainer>
      <SectionHeader
        eyebrow="Selected Work"
        title="Products, platforms and systems I've designed and built."
      />

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @select="open"
        />
      </div>
    </AppContainer>

    <ProjectModal
      v-if="selected"
      :project="selected"
      @close="close"
    />
  </section>
</template>
