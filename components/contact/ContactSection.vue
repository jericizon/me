<script setup lang="ts">
const RESUME_URL =
  'https://drive.google.com/file/d/1Ap6DL7NR7G9-ZzfFGag_CEcJ5hvutAcC/view?usp=sharing'
const EMAIL_URL =
  'mailto:im.jericizon@gmail.com?subject=Senior%20Full-Stack%20Engineering%20Opportunity'

const { trackEvent } = useAnalytics()
</script>

<template>
  <section
    id="contact"
    class="scroll-mt-20 border-t border-surface-border py-20 md:py-28"
    aria-label="Contact"
  >
    <AppContainer>
      <div class="flex max-w-3xl flex-col gap-6">
        <span class="font-mono text-xs uppercase tracking-widest text-accent">
          Contact
        </span>
        <h2
          class="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
        >
          Let's build something useful.
        </h2>
        <p class="text-lg leading-relaxed text-text-secondary">
          Looking for a senior engineer who can take ownership beyond writing
          tickets? I'm open to senior full-stack engineering opportunities,
          long-term product work and technically interesting projects.
        </p>

        <div class="flex flex-wrap items-center gap-3 pt-2">
          <BaseButton
            :href="EMAIL_URL"
            variant="primary"
            @click="trackEvent('contact_email_click', { section: 'contact' })"
          >
            Email me
            <Icon name="tabler:mail" class="h-4 w-4" aria-hidden="true" />
          </BaseButton>
          <BaseButton
            href="https://www.linkedin.com/in/jericizon"
            external
            variant="secondary"
          >
            LinkedIn
          </BaseButton>
          <BaseButton
            href="https://github.com/jericizon"
            external
            variant="secondary"
          >
            GitHub
          </BaseButton>
          <BaseButton
            :href="RESUME_URL"
            external
            variant="ghost"
            @click="trackEvent('download_cv', { section: 'contact' })"
          >
            Download Resume
            <Icon name="tabler:download" class="h-4 w-4" aria-hidden="true" />
          </BaseButton>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
