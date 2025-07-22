<script>
  import { onMount } from 'svelte';
  
  let skills = [
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'Vue.js', level: 85, color: 'bg-green-500' },
    { name: 'Svelte', level: 88, color: 'bg-orange-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-600' },
    { name: 'CSS/Tailwind', level: 92, color: 'bg-purple-500' }
  ];

  let animatedSkills = skills.map(skill => ({ ...skill, animatedLevel: 0 }));
  
  onMount(() => {
    setTimeout(() => {
      animatedSkills = animatedSkills.map(skill => ({ ...skill, animatedLevel: skill.level }));
    }, 500);
  });
</script>

<svelte:head>
  <title>About - Amjad Ali</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
  <!-- Navigation -->
  <nav class="relative z-10 flex justify-center py-6">
    <ul class="flex gap-8 text-white font-medium">
      <li><a href="/" class="hover:text-green-300 transition-colors">Home</a></li>
      <li><a href="/services" class="hover:text-green-300 transition-colors">Services</a></li>
      <li><a href="/contact" class="hover:text-green-300 transition-colors">Contact</a></li>
      <li><a href="/about" class="text-green-400 font-semibold">About</a></li>
    </ul>
  </nav>

  <div class="container mx-auto px-4 py-12">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
        About <span class="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Me</span>
      </h1>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">
        Passionate front-end developer creating beautiful web experiences
      </p>
    </div>

    <!-- Main Content -->
    <div class="grid lg:grid-cols-2 gap-12 mb-16">
      <!-- Story -->
      <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <h2 class="text-3xl font-bold text-white mb-6">My Journey</h2>
        <div class="space-y-4 text-gray-300">
          <p>
            Hi! I'm Amjad Ali, a passionate front-end developer with over 3 years of experience 
            creating modern, responsive web applications. My journey started with curiosity about 
            how websites work, and it has evolved into a deep passion for crafting exceptional user experiences.
          </p>
          <p>
            I specialize in modern JavaScript frameworks and have a keen eye for design. 
            I believe that great code should be both functional and beautiful.
          </p>
        </div>
      </div>

      <!-- Profile & Facts -->
      <div class="space-y-8">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
          <div class="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-green-400/50">
            <img src="/my-profile.png" alt="Amjad Ali" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">Amjad Ali</h3>
          <p class="text-green-400 font-semibold">Front-End Developer</p>
        </div>

        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 class="text-2xl font-bold text-white mb-6">Quick Facts</h3>
          <div class="space-y-4">
            <div class="flex justify-between">
              <span class="text-gray-300">Experience:</span>
              <span class="text-white font-semibold">3+ Years</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">Projects:</span>
              <span class="text-white font-semibold">50+</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">Clients:</span>
              <span class="text-white font-semibold">25+</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <h2 class="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
      <div class="grid md:grid-cols-2 gap-6">
        {#each animatedSkills as skill}
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-white font-medium">{skill.name}</span>
              <span class="text-gray-300">{skill.level}%</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-3">
              <div 
                class="h-3 rounded-full transition-all duration-1000 ease-out {skill.color}"
                style="width: {skill.animatedLevel}%"
              ></div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>