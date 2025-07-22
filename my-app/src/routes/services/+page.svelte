<script>
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      icon: '🌐',
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimized', 'SEO Friendly'],
      price: 'Starting at $500'
    },
    {
      title: 'React Development',
      description: 'Interactive React applications with state management and modern hooks',
      icon: '⚛️',
      features: ['Component Architecture', 'State Management', 'API Integration', 'Testing'],
      price: 'Starting at $800'
    },
    {
      title: 'Vue.js Development',
      description: 'Progressive Vue.js applications with Vuex and Vue Router',
      icon: '💚',
      features: ['Vue 3 Composition API', 'Vuex Store', 'Router Setup', 'Component Library'],
      price: 'Starting at $700'
    },
    {
      title: 'Svelte Development',
      description: 'Lightning-fast Svelte applications with minimal bundle size',
      icon: '🔥',
      features: ['SvelteKit', 'Stores Management', 'Server-Side Rendering', 'Animations'],
      price: 'Starting at $600'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that convert visitors',
      icon: '🎨',
      features: ['Figma Design', 'Prototyping', 'User Research', 'Design Systems'],
      price: 'Starting at $400'
    },
    {
      title: 'Website Optimization',
      description: 'Performance optimization and SEO improvements for existing sites',
      icon: '⚡',
      features: ['Speed Optimization', 'SEO Audit', 'Code Refactoring', 'Analytics Setup'],
      price: 'Starting at $300'
    }
  ];
</script>

<svelte:head>
  <title>Services - Amjad Ali</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
  <!-- Navigation -->
  <nav class="relative z-10 flex justify-center py-6">
    <ul class="flex gap-8 text-white font-medium">
      <li><a href="/" class="hover:text-green-300 transition-colors">Home</a></li>
      <li><a href="/services" class="text-green-400 font-semibold">Services</a></li>
      <li><a href="/contact" class="hover:text-green-300 transition-colors">Contact</a></li>
      <li><a href="/about" class="hover:text-green-300 transition-colors">About</a></li>
    </ul>
  </nav>

  <div class="container mx-auto px-4 py-12">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
        My <span class="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Services</span>
      </h1>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">
        Professional web development services to bring your ideas to life
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {#each services as service}
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
          <div class="text-4xl mb-4">{service.icon}</div>
          <h3 class="text-2xl font-bold text-white mb-4">{service.title}</h3>
          <p class="text-gray-300 mb-6">{service.description}</p>
          
          <ul class="space-y-2 mb-6">
            {#each service.features as feature}
              <li class="flex items-center text-gray-300">
                <svg class="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {feature}
              </li>
            {/each}
          </ul>
          
          <div class="border-t border-white/20 pt-4">
            <p class="text-green-400 font-bold text-lg">{service.price}</p>
          </div>
        </div>
      {/each}
    </div>

    <!-- Process Section -->
    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
      <h2 class="text-3xl font-bold text-white mb-8 text-center">My Process</h2>
      <div class="grid md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-white font-bold text-xl">1</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Discovery</h3>
          <p class="text-gray-300">Understanding your needs and requirements</p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-white font-bold text-xl">2</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Planning</h3>
          <p class="text-gray-300">Creating detailed project timeline</p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-white font-bold text-xl">3</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Development</h3>
          <p class="text-gray-300">Building with regular updates</p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-white font-bold text-xl">4</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Delivery</h3>
          <p class="text-gray-300">Testing, deployment, and support</p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-12">
      <h2 class="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
      <p class="text-green-100 mb-8 text-lg">Let's discuss how I can help bring your ideas to life</p>
      <a href="/contact" class="bg-white text-green-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors inline-block">
        Get In Touch
      </a>
    </div>
  </div>
</div>