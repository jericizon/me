<script setup lang="ts">
const RESUME_URL =
  'https://drive.google.com/file/d/1wkw4vFjOgjhilkgHptbyQ3psOi3Rxpy5/view?usp=sharing'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const isOpen = ref(false)

const close = () => {
  isOpen.value = false
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') close()
}

watch(isOpen, (open) => {
  if (!import.meta.client) return
  document.documentElement.style.overflow = open ? 'hidden' : ''
  if (open) window.addEventListener('keydown', onKeydown)
  else window.removeEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  if (!import.meta.client) return
  document.documentElement.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-surface-border bg-base/80 backdrop-blur-md"
  >
    <nav
      class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      aria-label="Primary"
    >
      <div class="flex items-center gap-3">
        <a
          href="#top"
          class="font-display text-sm font-bold tracking-tight text-text-primary"
        >
          JERIC IZON
        </a>
        <BaseBadge variant="outline" dot class="hidden sm:inline-flex">
          Available
        </BaseBadge>
      </div>

      <ul class="hidden items-center gap-6 md:flex">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="hidden items-center gap-4 md:flex">
        <a
          href="https://github.com/jericizon"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          GitHub
        </a>
        <a
          :href="RESUME_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          Resume
          <Icon name="tabler:download" class="h-4 w-4" aria-hidden="true" />
        </a>
        <BaseButton href="#contact" variant="primary">Let's Talk</BaseButton>
      </div>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center text-text-primary md:hidden"
        :aria-expanded="isOpen"
        aria-controls="mobile-nav"
        :aria-label="isOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="isOpen = !isOpen"
      >
        <Icon
          :name="isOpen ? 'tabler:x' : 'tabler:menu-2'"
          class="h-6 w-6"
          aria-hidden="true"
        />
      </button>
    </nav>

    <div
      v-if="isOpen"
      id="mobile-nav"
      class="fixed inset-x-0 top-16 bottom-0 z-40 border-t border-surface-border bg-base md:hidden"
    >
      <nav aria-label="Mobile">
        <ul class="flex flex-col px-4 py-6 sm:px-6">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="flex min-h-[44px] items-center border-b border-surface-border/60 py-3 font-display text-lg text-text-primary"
              @click="close"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
        <div class="flex flex-col gap-3 px-4 pt-4 sm:px-6">
          <BaseButton href="#contact" variant="primary" @click="close">
            Let's Talk
          </BaseButton>
          <div class="flex items-center gap-6 pt-2">
            <a
              href="https://github.com/jericizon"
              target="_blank"
              rel="noopener noreferrer"
              class="min-h-[44px] text-sm text-text-secondary"
            >
              GitHub
            </a>
            <a
              :href="RESUME_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-[44px] items-center gap-1.5 text-sm text-text-secondary"
            >
              Resume
              <Icon name="tabler:download" class="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
