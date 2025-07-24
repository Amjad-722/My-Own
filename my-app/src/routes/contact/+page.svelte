<script>
	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	let isSubmitting = false;
	let submitMessage = '';

	

	export	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/Amjad-722',
			icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/amjadali72/',
			icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
		},
		{
			name: 'Upwork',
			url: 'https://www.upwork.com/freelancers/~01c4136c175ff03b3a',
			icon: 'M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.453-5.439-5.453z'
		},
		{
			name: 'Fiverr',
			url: 'https://fiverr.com/amjadali',
			icon: 'M23.004 15.588a.995.995 0 1 1 .002-1.99.995.995 0 0 1-.002 1.99zm-3.01-5.588h-.004c-2.15 0-3.89 1.74-3.89 3.89s1.74 3.89 3.89 3.89h.004c2.15 0 3.89-1.74 3.89-3.89s-1.74-3.89-3.89-3.89zm0 6.26c-1.31 0-2.37-1.06-2.37-2.37s1.06-2.37 2.37-2.37h.004c1.31 0 2.37 1.06 2.37 2.37s-1.06 2.37-2.37 2.37h-.004zm-6.99-6.26h-.004c-2.15 0-3.89 1.74-3.89 3.89s1.74 3.89 3.89 3.89h.004c2.15 0 3.89-1.74 3.89-3.89s-1.74-3.89-3.89-3.89zm0 6.26c-1.31 0-2.37-1.06-2.37-2.37s1.06-2.37 2.37-2.37h.004c1.31 0 2.37 1.06 2.37 2.37s-1.06 2.37-2.37 2.37h-.004zm-6.99-6.26h-.004c-2.15 0-3.89 1.74-3.89 3.89s1.74 3.89 3.89 3.89h.004c2.15 0 3.89-1.74 3.89-3.89s-1.74-3.89-3.89-3.89zm0 6.26c-1.31 0-2.37-1.06-2.37-2.37s1.06-2.37 2.37-2.37h.004c1.31 0 2.37 1.06 2.37 2.37s-1.06 2.37-2.37 2.37h-.004zM0 10h1.5v7.5H0V10z'
		}
		
	];

	async function handleSubmit() {
		isSubmitting = true;

		// Simulate form submission
		setTimeout(() => {
			isSubmitting = false;
			submitMessage = 'Thank you! Your message has been sent successfully.';
			formData = { name: '', email: '', subject: '', message: '' };

			setTimeout(() => {
				submitMessage = '';
			}, 5000);
		}, 2000);
	}
</script>

<svelte:head>
	<title>Contact - Amjad Ali</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
	

	<div class="container mx-auto px-4 py-12">
		<!-- Header -->
		<div class="mb-16 text-center">
			<h1 class="mb-6 text-5xl font-bold text-white md:text-6xl">
				Get In <span
					class="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
					>Touch</span
				>
			</h1>
			<p class="mx-auto max-w-3xl text-xl text-gray-300">
				Ready to start your project? Let's discuss how I can help bring your ideas to life
			</p>
		</div>

		<div class="grid gap-12 lg:grid-cols-2">
			<!-- Contact Form -->
			<div class="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
				<h2 class="mb-6 text-3xl font-bold text-white">Send Message</h2>

				{#if submitMessage}
					<div class="mb-6 rounded-lg border border-green-500/50 bg-green-500/20 p-4">
						<p class="text-green-300">{submitMessage}</p>
					</div>
				{/if}

				<form on:submit={handleSubmit} class="space-y-6">
					<div>
						<label for="name" class="mb-2 block font-medium text-white">Name</label>
						<input
							type="text"
							id="name"
							bind:value={formData.name}
							required
							class="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-purple-400 focus:outline-none"
							placeholder="Your Name"
						/>
					</div>

					<div>
						<label for="email" class="mb-2 block font-medium text-white">Email</label>
						<input
							type="email"
							id="email"
							bind:value={formData.email}
							required
							class="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-purple-400 focus:outline-none"
							placeholder="your@email.com"
						/>
					</div>

					<div>
						<label for="subject" class="mb-2 block font-medium text-white">Subject</label>
						<input
							type="text"
							id="subject"
							bind:value={formData.subject}
							required
							class="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-purple-400 focus:outline-none"
							placeholder="Project Subject"
						/>
					</div>

					<div>
						<label for="message" class="mb-2 block font-medium text-white">Message</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="5"
							class="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-purple-400 focus:outline-none"
							placeholder="Tell me about your project..."
						></textarea>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						class="w-full transform rounded-lg bg-gradient-to-r from-green-400 to-emerald-400 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-emerald-600 disabled:scale-100 disabled:from-gray-500 disabled:to-gray-600"
					>
						{isSubmitting ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			</div>

			<!-- Contact Info -->
			<div class="space-y-8">
				<!-- Contact Details -->
				<div class="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
					<h2 class="mb-6 text-3xl font-bold text-white">Contact Info</h2>
					<div class="space-y-6">
						<div class="flex items-center">
							<div
								class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<div>
								<p class="font-semibold text-white">Email</p>
								<p class="text-gray-300">aliamjadnagari@gmail.com</p>
							</div>
						</div>

						<div class="flex items-center">
							<div
								class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
							</div>
							<div>
								<p class="font-semibold text-white">Phone</p>
								<p class="text-gray-300">03109305472</p>
							</div>
						</div>

						<div class="flex items-center">
							<div
								class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<div>
								<p class="font-semibold text-white">Location</p>
								<p class="text-gray-300">Remote Worldwide</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Social Links -->
				<div class="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
					<h2 class="mb-6 text-2xl font-bold text-white">Follow Me</h2>
					<div class="flex gap-4">
						{#each socialLinks as link}
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								class="group flex h-12 w-12 transform items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
								title={link.name}
								aria-label={link.name}
							>
								<svg
									class="h-6 w-6 fill-current text-gray-300 transition-colors group-hover:text-white"
									viewBox="0 0 24 24"
								>
									<path d={link.icon} />
								</svg>
							</a>
						{/each}
					</div>
				</div>

				<!-- Availability -->
				<div class="rounded-2xl bg-gradient-to-r from-green-500 to-green-300 p-8">
					<h2 class="mb-4 text-2xl font-bold text-white">Available for Work</h2>
					<p class="mb-4 text-purple-100">
						I'm currently available for freelance projects and full-time opportunities.
					</p>
					<div class="flex items-center">
						<div class="mr-2 h-3 w-3 animate-pulse rounded-full bg-green-400"></div>
						<span class="font-semibold text-white">Online Now</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

