<script setup lang="ts">
const services = [
  {
    number: '01',
    title: 'SaaS Platforms',
    description: 'Full-stack SaaS applications with multi-tenancy, billing, admin dashboards, and scalable architecture.',
    deliverables: ['Multi-tenant auth', 'Subscription management', 'Admin dashboards', 'API design', 'CI/CD pipeline'],
    timeline: '4-12 weeks'
  },
  {
    number: '02',
    title: 'Admin Dashboards',
    description: 'Internal tools that streamline operations — data viz, user management, reporting, and workflow automation.',
    deliverables: ['Role-based access', 'Real-time data', 'Export & reporting', 'Workflow automation', 'Integrations'],
    timeline: '3-8 weeks'
  },
  {
    number: '03',
    title: 'API Systems',
    description: 'RESTful and GraphQL APIs designed for performance, security, and developer experience.',
    deliverables: ['API architecture', 'Auth & security', 'Rate limiting', 'Documentation', 'Monitoring'],
    timeline: '2-6 weeks'
  },
  {
    number: '04',
    title: 'MVP Development',
    description: 'Rapid prototyping to validate your idea fast. Core features built to gather feedback and secure funding.',
    deliverables: ['Core feature set', 'User onboarding', 'Payment integration', 'Analytics', 'Launch ready'],
    timeline: '3-6 weeks'
  },
  {
    number: '05',
    title: 'E-Commerce',
    description: 'Custom ordering systems with inventory, payments, fulfillment, and customer management.',
    deliverables: ['Product catalog', 'Cart & checkout', 'Payment processing', 'Order management', 'Customer portal'],
    timeline: '4-10 weeks'
  },
  {
    number: '06',
    title: 'AI Integration',
    description: 'Applications leveraging LLMs and AI APIs for content generation, analysis, and automation.',
    deliverables: ['AI feature integration', 'Prompt engineering', 'Data pipelines', 'Cost optimization'],
    timeline: '3-8 weeks'
  }
]

const activeService = ref<string | null>(null)
</script>

<template>
  <section id="services-section" class="relative py-24 lg:py-32">
    <!-- Section number watermark -->
    <div class="absolute top-8 right-8 lg:right-16 font-display font-bold text-[12rem] lg:text-[16rem] text-base-50/[0.02] leading-none select-none pointer-events-none">
      02
    </div>

    <div class="relative z-10 px-6 lg:px-16">
      <!-- Section header -->
      <div class="mb-16 lg:mb-24">
        <div class="flex items-center gap-4 mb-6">
          <span class="font-mono text-xs text-coral-500">02</span>
          <span class="w-12 h-px bg-coral-500"></span>
          <span class="font-mono text-xs text-base-400 tracking-wider uppercase">Services</span>
        </div>
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 class="font-display font-bold text-4xl lg:text-6xl text-base-50 leading-tight tracking-tight max-w-2xl">
            What I can build for you
          </h2>
          <p class="text-base-400 max-w-md">
            End-to-end systems, not just code. Every engagement includes architecture, implementation, deployment, and documentation.
          </p>
        </div>
      </div>

      <!-- Services list -->
      <div class="space-y-0">
        <div
          v-for="(service, index) in services"
          :key="service.number"
          class="group border-t border-base-600/30 last:border-b"
          @mouseenter="activeService = service.number"
          @mouseleave="activeService = null"
        >
          <div class="py-8 lg:py-10 cursor-pointer">
            <div class="flex items-start gap-6 lg:gap-12">
              <!-- Number -->
              <span class="font-mono text-xs text-coral-500 pt-2">{{ service.number }}</span>
              
              <!-- Content -->
              <div class="flex-1">
                <div class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                  <h3 class="font-display font-bold text-2xl lg:text-4xl text-base-50 group-hover:text-coral-500 transition-colors duration-300">
                    {{ service.title }}
                  </h3>
                  
                  <!-- Arrow indicator -->
                  <div class="hidden lg:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span class="w-8 h-px bg-coral-500"></span>
                    <Icon name="tabler:arrow-right" class="w-4 h-4 text-coral-500" />
                  </div>
                </div>

                <!-- Expanded content -->
                <div 
                  class="grid transition-all duration-500 ease-out"
                  :class="activeService === service.number ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'"
                >
                  <div class="overflow-hidden">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-4">
                      <!-- Description -->
                      <div class="lg:col-span-2">
                        <p class="text-base-300 leading-relaxed max-w-xl">
                          {{ service.description }}
                        </p>
                      </div>
                      
                      <!-- Meta -->
                      <div class="space-y-4">
                        <div>
                          <div class="font-mono text-xs text-base-500 mb-2">DELIVERABLES</div>
                          <div class="flex flex-wrap gap-2">
                            <span 
                              v-for="item in service.deliverables" 
                              :key="item"
                              class="text-xs text-base-400"
                            >
                              {{ item }}<span class="text-base-600">,</span>
                            </span>
                          </div>
                        </div>
                        <div>
                          <div class="font-mono text-xs text-base-500 mb-1">TIMELINE</div>
                          <div class="text-sm text-coral-500">{{ service.timeline }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 lg:mt-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 p-8 border border-base-600/30 bg-surface-elevated/30">
        <div>
          <div class="font-mono text-xs text-amber-500 mb-2">LIMITED AVAILABILITY</div>
          <p class="text-base-300">Currently accepting select projects. Partner with 2-3 clients at a time for focused attention.</p>
        </div>
        <button
          @click="useContactForm().openContactForm()"
          class="group flex items-center gap-3 px-6 py-3 border border-coral-500 text-coral-500 hover:bg-coral-500 hover:text-surface transition-all duration-300 whitespace-nowrap"
        >
          <span class="font-medium text-sm tracking-wide">Discuss your project</span>
          <Icon name="tabler:arrow-up-right" class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  </section>
</template>
