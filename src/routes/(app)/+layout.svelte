<script>
	import "/src/app.css"
	import TopNavigation from '$lib/components/navigations/TopNavigation.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	let { children } = $props()
	import { navigating } from '$app/state';

	let navigation = $state(false)

	$effect(() => {
		if(navigating.to){
			navigation = true
		}
		else {
			navigation = false
		}
	})
</script>

<TopNavigation/>
{@render children?.()}
<Footer/>

{#if navigation}
	<div class="bg-black/50 h-screen inset-0 z-100 fixed">
		<h1 class="text-center">loading</h1>
	</div>
{/if}