<script>
	import FoodSecurity from "$lib/assets/images/FoodSecurity.jpg"
	import Monitor from "$lib/assets/images/Monitor.jpg"
	import Farming from "$lib/assets/images/Children.jpg"

	let { closeModal } = $props()

</script>

<div aria-label="button" class="fixed bg-black/50 backdrop-blur-sm inset-0 h-screen z-100">

	<div class="bg-white h-screen overflow-auto w-[300px] motion-preset-slide-right
	 motion-duration-500 pt-5 relative">

		<div class="flex items-center justify-between px-4">
			<h1 class="capitalize">Aglit</h1>

			<div class="p-2">
				<button onclick={closeModal} aria-label="button" class="flex items-center justify-center cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
				</button>
			</div>
		</div>

		<div class="border-b border-b-stone-700 pt-3"></div>

		<div class="py-10 px-4">
			<ul class="flex flex-col space-y-4">
				<li class="">
					<a href="/" class="flex items-center space-x-3 w-full hover:bg-primary-green hover:text-green-100 py-2 px-2 rounded-sm">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3v-5q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.712-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.412-.587T4 19m8-6.75"/></svg>
						<span class="capitalize">home</span>
					</a>
				</li>

				<li class="">
					<a href="/about-us" class="flex items-center space-x-3 w-full hover:bg-primary-green hover:text-green-100 py-2 px-2 rounded-sm">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M1 18q-.425 0-.712-.288T0 17v-.575q0-1.075 1.1-1.75T4 14q.325 0 .625.013t.575.062q-.35.525-.525 1.1t-.175 1.2V18zm6 0q-.425 0-.712-.288T6 17v-.625q0-.8.438-1.463t1.237-1.162T9.588 13T12 12.75q1.325 0 2.438.25t1.912.75t1.225 1.163t.425 1.462V17q0 .425-.287.713T17 18zm12.5 0v-1.625q0-.65-.162-1.225t-.488-1.075q.275-.05.563-.062T20 14q1.8 0 2.9.663t1.1 1.762V17q0 .425-.288.713T23 18zM4 13q-.825 0-1.412-.587T2 11q0-.85.588-1.425T4 9q.85 0 1.425.575T6 11q0 .825-.575 1.413T4 13m16 0q-.825 0-1.412-.587T18 11q0-.85.588-1.425T20 9q.85 0 1.425.575T22 11q0 .825-.575 1.413T20 13m-8-1q-1.25 0-2.125-.875T9 9q0-1.275.875-2.137T12 6q1.275 0 2.138.863T15 9q0 1.25-.862 2.125T12 12"/></svg>
						<span class="capitalize">about us</span>
					</a>
				</li>

				<li class="">
					<a href="/locations" class="flex items-center space-x-3 w-full hover:bg-primary-green hover:text-green-100 py-2 px-2 rounded-sm">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2q3.8 0 6.588 2.45t3.312 6.1q-.5-.25-1.037-.387T19.75 10q-.475-1.825-1.713-3.25T15 4.6V7h-4v3H8v2h6.875v.525q-.425.675-.65 1.425T14 15.5q0 1.575.813 2.925t1.662 2.525q-1.025.5-2.15.775T12 22m-1-2.05V18H9v-3l-4.8-4.8q-.075.45-.137.9T4 12q0 3.025 1.988 5.3T11 19.95M19.5 22q-.175 0-.3-.1t-.175-.25q-.275-.875-.775-1.625t-1.075-1.475q-.525-.65-.85-1.425T16 15.5q0-1.45 1.025-2.475T19.5 12t2.475 1.025T23 15.5q0 .85-.337 1.613t-.838 1.437q-.575.725-1.075 1.475t-.775 1.625q-.05.15-.175.25t-.3.1m0-2.825q.25-.425.55-.787t.575-.738q.35-.475.613-1.012T21.5 15.5q0-.825-.587-1.412T19.5 13.5t-1.412.588T17.5 15.5q0 .6.263 1.138t.612 1.012l.588.738q.287.363.537.787m0-2.425q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888t-.887.362"/></svg>
						<span class="capitalize">locations</span>
					</a>
				</li>

				<li class="">
					<a href="/" class="flex items-center space-x-3 w-full hover:bg-primary-green hover:text-green-100 py-2 px-2 rounded-sm">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 20l.4.4q.275.275.275.688t-.3.712q-.275.275-.7.275t-.7-.275l-2.1-2.1q-.15-.15-.213-.325T2.426 19t.063-.375t.212-.325l2.1-2.1q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L5.825 18h12.35l-.4-.4q-.275-.275-.275-.687t.3-.713q.275-.275.7-.275t.7.275l2.1 2.1q.15.15.213.325t.062.375t-.062.375t-.213.325l-2.1 2.1q-.275.275-.687.275T17.8 21.8q-.3-.3-.3-.712t.3-.713l.375-.375zM12 11q-1.25 0-2.125-.875T9 8t.875-2.125T12 5t2.125.875T15 8t-.875 2.125T12 11m-7 3q-.825 0-1.412-.587T3 12V4q0-.825.588-1.412T5 2h14q.825 0 1.413.588T21 4v8q0 .825-.587 1.413T19 14zm2-2h10q0-.825.588-1.412T19 10V6q-.825 0-1.412-.587T17 4H7q0 .825-.587 1.413T5 6v4q.825 0 1.413.588T7 12m-2 0V4z"/></svg>
						<span class="capitalize">donate</span>
					</a>
				</li>
			</ul>


			<div class="">
				<div class="grid grid-cols-2 gap-5 mt-14">
					<div class="">
						<img src={Farming} alt="Farming" class="h-full object-cover rounded-xl">
					</div>

					<div class="flex flex-col gap-3">
						<div>
							<img src={Monitor} alt="Monitor" class="h-full object-cover rounded-xl">
						</div>

						<div>
							<img src={FoodSecurity} alt="FoodSecurity" class="object-cover h-full rounded-xl">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="absolute bottom-0 px-4">
			<h1 class="text-gray-500 text-sm">Powered by&copy;stridemw</h1>
		</div>
	</div>
</div>