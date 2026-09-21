<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-surface-border">
    <AppContainer>
      <div
        class="flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between"
      >
        <div class="flex flex-col gap-2">
          <span class="font-display text-sm font-bold tracking-tight text-text-primary">
            JERIC IZON
          </span>
          <span class="text-sm text-text-secondary">Senior Full-Stack Engineer</span>
          <span class="font-mono text-xs tracking-wide text-text-muted">
            Laravel - Vue/Nuxt - NestJS - AWS
          </span>
        </div>

        <ul class="flex items-center gap-6">
          <li>
            <a
              href="https://github.com/jericizon"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jericizon"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:jericizon@gmail.com"
              class="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Email
            </a>
          </li>
        </ul>
      </div>

      <div
        class="flex flex-col gap-2 border-t border-surface-border/60 py-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <span class="font-mono text-xs text-text-muted">
          &copy; {{ year }} Jeric Izon
        </span>
        <span class="font-mono text-xs text-text-muted">
          Built with Nuxt. Deployed on the edge.
        </span>
      </div>
    </AppContainer>
  </footer>
</template>
