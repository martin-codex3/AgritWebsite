<script>
	import "/src/app.css"
	import TopNavigation from '$lib/components/navigations/TopNavigation.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	let { children } = $props()
</script>

<TopNavigation/>
{@render children?.()}
<Footer/>