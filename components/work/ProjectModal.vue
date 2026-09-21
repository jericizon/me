<script setup lang="ts">
import type { Project } from '~/types/project'

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const withBasePath = useBasePath()

const panelRef = ref<HTMLElement | null>(null)
let previouslyFocused: HTMLElement | null = null

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

const close = () => emit('close')

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    event.preventDefault()
    close()
    return
  }

  if (event.key !== 'Tab' || !panelRef.value) return

  const focusable = Array.from(
    panelRef.value.querySelectorAll<HTMLElement>(FOCUSABLE),
  ).filter((el) => el.offsetParent !== null)
  if (!focusable.length) return

  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  const active = document.activeElement as HTMLElement | null

  if (event.shiftKey && (active === first || !panelRef.value.contains(active))) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && active === last) {
    event.preventDefault()
    first.focus()
  }
}

onMounted(() => {
  previouslyFocused = document.activeElement as HTMLElement | null
  document.documentElement.style.overflow = 'hidden'
  document.addEventListener('keydown', onKeydown)
  nextTick(() => {
    const target =
      panelRef.value?.querySelector<HTMLElement>(FOCUSABLE) ?? panelRef.value
    target?.focus()
  })
})

onBeforeUnmount(() => {
  document.documentElement.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
  previouslyFocused?.focus()
})
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="presentation"
      @click.self="close"
    >
      <div
        class="absolute inset-0 bg-base/80 backdrop-blur-sm"
        aria-hidden="true"
        @click="close"
      />

      <div
        ref="panelRef"
        role="dialog"
        aria-modal="true"
        :aria-label="`${props.project.title} case study`"
        tabindex="-1"
        class="relative flex max-h-[90dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-surface-border bg-surface shadow-2xl outline-none sm:rounded-2xl"
      >
        <div
          class="flex items-center justify-between gap-4 border-b border-surface-border px-6 py-4"
        >
          <div class="flex min-w-0 flex-col">
            <span
              class="font-mono text-xs uppercase tracking-widest text-accent"
            >
              {{ props.project.positioning }}
            </span>
            <h3
              class="truncate font-display text-xl font-bold tracking-tight text-text-primary"
            >
              {{ props.project.title }}
            </h3>
          </div>
          <button
            type="button"
            class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-surface-elevated hover:text-text-primary"
            aria-label="Close case study"
            @click="close"
          >
            <Icon name="tabler:x" class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div class="flex-1 overflow-y-auto px-6 py-6">
          <div
            v-if="props.project.metric"
            class="mb-6 flex items-baseline gap-3 rounded-lg border border-accent/30 bg-accent-dim px-4 py-3"
          >
            <span class="font-display text-3xl font-bold text-accent">
              {{ props.project.metric.value }}
            </span>
            <span class="text-sm text-text-secondary">
              {{ props.project.metric.label }}
            </span>
          </div>

          <section class="mb-8" aria-label="The problem">
            <h4
              class="mb-3 font-mono text-xs uppercase tracking-widest text-text-muted"
            >
              The Problem
            </h4>
            <p
              v-for="(paragraph, i) in props.project.caseStudy.problem"
              :key="i"
              class="mb-3 text-sm leading-relaxed text-text-secondary"
            >
              {{ paragraph }}
            </p>
          </section>

          <section class="mb-8" aria-label="The approach">
            <h4
              class="mb-3 font-mono text-xs uppercase tracking-widest text-text-muted"
            >
              The Approach
            </h4>
            <p
              v-for="(paragraph, i) in props.project.caseStudy.approach"
              :key="i"
              class="mb-3 text-sm leading-relaxed text-text-secondary"
            >
              {{ paragraph }}
            </p>
          </section>

          <section class="mb-8" aria-label="Architecture">
            <h4
              class="mb-3 font-mono text-xs uppercase tracking-widest text-text-muted"
            >
              Architecture
            </h4>
            <ArchitectureDiagram :nodes="props.project.architecture" />
          </section>

          <section class="mb-8" aria-label="Engineering decisions">
            <h4
              class="mb-3 font-mono text-xs uppercase tracking-widest text-text-muted"
            >
              Key Engineering Decisions
            </h4>
            <ul class="flex flex-col gap-4">
              <li
                v-for="decision in props.project.caseStudy.decisions"
                :key="decision.title"
                class="border-l-2 border-accent/40 pl-4"
              >
                <span class="block text-sm font-medium text-text-primary">
                  {{ decision.title }}
                </span>
                <span class="block text-sm leading-relaxed text-text-secondary">
                  {{ decision.detail }}
                </span>
              </li>
            </ul>
          </section>

          <section class="mb-6" aria-label="Outcomes">
            <h4
              class="mb-3 font-mono text-xs uppercase tracking-widest text-text-muted"
            >
              Outcomes
            </h4>
            <ul class="flex flex-col gap-2">
              <li
                v-for="outcome in props.project.caseStudy.outcomes"
                :key="outcome"
                class="flex items-start gap-2 text-sm text-text-secondary"
              >
                <Icon
                  name="tabler:check"
                  class="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                {{ outcome }}
              </li>
            </ul>
          </section>

          <div
            v-if="props.project.gallery?.length"
            class="mb-6 flex flex-col gap-3"
          >
            <img
              v-for="src in props.project.gallery"
              :key="src"
              :src="withBasePath(src)"
              :alt="`${props.project.title} additional screenshot`"
              loading="lazy"
              class="w-full rounded-lg border border-surface-border"
            />
          </div>
        </div>

        <div
          class="flex items-center justify-between gap-4 border-t border-surface-border px-6 py-4"
        >
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in props.project.stack"
              :key="tech"
              class="rounded bg-surface-border/50 px-2 py-0.5 font-mono text-xs text-text-secondary"
            >
              {{ tech }}
            </span>
          </div>
          <BaseButton
            v-if="props.project.liveUrl"
            :href="props.project.liveUrl"
            external
            variant="primary"
            class="shrink-0"
          >
            Visit live
            <Icon name="tabler:arrow-up-right" class="h-4 w-4" aria-hidden="true" />
          </BaseButton>
        </div>
      </div>
    </div>
  </Teleport>
</template>
