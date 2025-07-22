<script>
  let showMore = false;
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/amjadali',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/amjadali',
    },
    {
      name: 'Upwork',
      url: 'https://upwork.com/freelancers/amjadali',
    },
    {
      name: 'Fiverr',
      url: 'https://fiverr.com/amjadali',
    },
    {
      name: 'Reddit',
      url: 'https://reddit.com/u/amjadali',
    }
  ];
</script>

<!-- Hero Section -->
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-20"></div>
  
  <!-- Navigation -->
  <nav class="relative z-10 flex justify-center py-6">
    <ul class="flex gap-8 text-white font-medium">
      <li><a href="#home" class="hover:text-purple-300 transition-colors cursor-pointer">Home</a></li>
      <li><a href="#services" class="hover:text-purple-300 transition-colors cursor-pointer">Services</a></li>
      <li><a href="#contact" class="hover:text-purple-300 transition-colors cursor-pointer">Contact</a></li>
      <li><a href="#about" class="hover:text-purple-300 transition-colors cursor-pointer">About</a></li>
    </ul>
  </nav>

  <!-- Main Content -->
  <div class="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
    <!-- Profile Image Placeholder -->
    <div class="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mb-8 flex items-center justify-center shadow-2xl">
      <span class="text-4xl font-bold text-white">AA</span>
    </div>

    <!-- Main Heading -->
    <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
      Hi, I'm <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Amjad Ali</span>
    </h1>
    
    <!-- Subtitle -->
    <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
      A passionate <span class="text-purple-400 font-semibold">Front-End Developer</span> crafting beautiful, responsive web experiences with modern technologies.
    </p>

    <!-- CTA Button -->
    <button 
      on:click={() => showMore = !showMore}
      class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-12"
    >
      {showMore ? 'Show Less' : 'More About Me'}
    </button>

    <!-- Additional Info (Toggleable) -->
    {#if showMore}
      <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mb-12 border border-white/20">
        <h3 class="text-2xl font-bold text-white mb-4">About Me</h3>
        <p class="text-gray-300 leading-relaxed">
          I specialize in creating modern, responsive websites using cutting-edge technologies like React, Vue, Svelte, and more. 
          With a keen eye for design and a passion for clean code, I bring ideas to life through engaging user experiences.
        </p>
        <div class="mt-6 flex flex-wrap gap-3 justify-center">
          <span class="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
          <span class="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
          <span class="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Vue.js</span>
          <span class="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Svelte</span>
          <span class="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
        </div>
      </div>
    {/if}

    <!-- Social Links -->
    <div class="flex gap-6">
      {#each socialLinks as link}
        <a 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20 group"
          title={link.name}
        >
          
        </a>
      {/each}
    </div>
  </div>

  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
    </svg>
  </div>
</div>