<script>
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import MobileNavigation from '$lib/components/navigations/MobileNavigation.svelte';

	const navigateToDonations = () => {
		goto("/donations")
	}

	// for toggling the menu here
	let toggleMenu = $state(false)

	const handleToggleMenu = () => {
		toggleMenu = !toggleMenu
	}

</script>

<nav class="flex items-center justify-between px-5 lg:px-10
 sticky top-0 z-100 bg-white/30 backdrop-blur-2xl lg:py-0 shadow-sm py-5">
	<div class="site__logo">
		<h1>logo</h1>
	</div>

	<div class="site__links">
		<ul class="hidden lg:flex items-center space-x-3 py-6">
			<li class="">
				<a href="/" class="{page.url.pathname === '/' ? 'bg-primary-green text-green-100' : ''}
					font-semibold capitalize hover:bg-primary-green py-6 px-4 hover:text-white">home</a>
			</li>

			<li class="">
				<a href="/about-us" class="{page.url.pathname === '/about-us' ? 'bg-primary-green text-green-100' : ''}
					font-semibold capitalize hover:bg-primary-green hover:text-white py-6 px-4">about us</a>
			</li>

			<li class="">
				<a href="/" class="{page.url.pathname === '/' ? 'bg-primary-green text-green-100' : ''}
					font-semibold capitalize hover:bg-primary-green hover:text-white py-6 px-4">partners</a>
			</li>

			<li class="">
				<a href="/locations" class="{page.url.pathname === '/locations' ? 'bg-primary-green text-green-100' : ''}
					font-semibold capitalize hover:bg-primary-green hover:text-white py-6 px-4">locations</a>
			</li>

			<li class="">
				<a href="/gallery" class="{page.url.pathname === '/gallery' ? 'bg-primary-green text-green-100' : ''}
					font-semibold capitalize hover:bg-primary-green hover:text-white py-6 px-4">gallery</a>
			</li>
		</ul>
	</div>

	<div class="hidden lg:block">
		<button onclick={navigateToDonations} aria-label="button" class="capitalize bg-primary-green
		 rounded-full
					 cursor-pointer text-sm hover:bg-primary-green/50
					 transition-all duration-300 px-4 py-2 text-white">
			donate
		</button>
	</div>

	<div class="lg:hidden">
		<button onclick={handleToggleMenu} aria-label="button"
						class="flex items-center justify-center cursor-pointer">
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>
		</button>
	</div>
</nav>

<div class="block lg:hidden">
	{#if toggleMenu}
		<MobileNavigation closeModal={handleToggleMenu}/>
	{/if}
</div>