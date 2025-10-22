<script>
	import FoodSecurity from "$lib/assets/images/FoodSecurity.jpg"
	import Monitor from "$lib/assets/images/Monitor.jpg"
	import Farming from "$lib/assets/images/Farming.jpg"
	import Ground from "$lib/assets/images/Ground.jpg"
	import School from "$lib/assets/images/School.jpg"
	import Happy from "$lib/assets/images/Happy.jpg"

	const allImages = $state([
		FoodSecurity, Monitor, Farming, Happy, School, Ground
	])
</script>


<div class="wrapper px-5 pb-20">
	<div>
		<h1 class="text-3xl font-extrabold text-center capitalize py-20">Gallery</h1>
	</div>

	<div class="columns-1 lg:columns-2 space-y-5">
		{#each allImages as image (image)}
			<div class="relative">
				<img src={image} alt="{image}" class="h-full w-full object-cover">
				<div class="absolute bottom-4 px-4 py-5 bg-red-700 text-red-100">
					<h1 class="text-xl uppercase">Aglit</h1>
				</div>
			</div>
		{/each}
	</div>
</div>