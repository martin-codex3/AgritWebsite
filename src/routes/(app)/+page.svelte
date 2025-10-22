<script>
import HeroSection from '$lib/components/hero-section/HeroSection.svelte';
import IntroPage from '$lib/components/intro/IntroPage.svelte';
import Empowerment from '$lib/components/empowerment/Empowerment.svelte';
import StoriesComponent from '$lib/components/stories/StoriesComponent.svelte';
import Locations from '$lib/components/locations/Locations.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>


<main>
	<HeroSection/>
	<section class="mx-4 lg:mx-10 space-y-14">
		<IntroPage/>
		<Empowerment/>
		<StoriesComponent/>
		<Locations/>
	</section>
</main>