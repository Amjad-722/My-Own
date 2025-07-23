

<script lang="ts">
  import { page } from '$app/stores';
  
  $: currentPath = $page.url.pathname;
  
  function isActive(path : any) {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  }
</script>

<div class="overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
  <nav class="relative z-10 flex justify-center py-6">
    <ul class="flex gap-8 font-medium text-white">
      <li>
        <a 
          href="/" 
          class="{isActive('/') ? 'font-semibold text-green-400' : 'transition-colors hover:text-green-300'}"
        >
          Home
        </a>
      </li>
      <li>
        <a 
          href="/services" 
          class="{isActive('/services') ? 'font-semibold text-green-400' : 'transition-colors hover:text-green-300'}"
        >
          Services
        </a>
      </li>
      <li>
        <a 
          href="/about" 
          class="{isActive('/about') ? 'font-semibold text-green-400' : 'transition-colors hover:text-green-300'}"
        >
          About
        </a>
      </li>
      <li>
        <a 
          href="/contact" 
          class="{isActive('/contact') ? 'font-semibold text-green-400' : 'transition-colors hover:text-green-300'}"
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>
</div>