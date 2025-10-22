<script>
	import { onMount } from 'svelte';

	let mapContainer;

	onMount(async () => {
		const L = await import("leaflet")

		const map = L.map(mapContainer, {
			attributionControl: false
		}).setView([51.505, -0.09], 13)

		L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)
	})
</script>


<div class="wrapper px-5">
	<div>
		<h1 class="text-3xl font-extrabold text-center capitalize py-20">
			locations
		</h1>
	</div>

	<div class="h-[700px] rounded-3xl mb-10 z-0" bind:this={mapContainer}>

	</div>
</div>