<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let amount = $state(0)
	const toggleAmount = (selectedAmount) => {
		amount = selectedAmount
		console.log(amount);
	}

</script>

<section transition:slide class="wrapper px-5">
	<div>
		<h1 class="text-3xl font-extrabold text-center capitalize py-20">donate to AGLIT</h1>
	</div>

	<div class="grid grid-col-1 lg:grid lg:grid-cols-12 w-full lg:max-w-3xl lg:mx-auto gap-5">
		<div class="col-span-7">
			<form use:enhance action="?/donate" method="post">
				<div class="lg:mb-20">
					<div class="bg-gray-200 w-full py-5 px-5">
						<h1 class="capitalize font-semibold">choose amount</h1>
					</div>

					<div class="border border-gray-200 px-7 py-3 space-y-8">
						<div class="grid grid-cols-3 gap-3">
							<button onclick={() => toggleAmount(10)} aria-label="button" class="px-4 py-3 rounded-sm text-center border flex items-center
							justify-center space-x-2 cursor-pointer border-gray-400">
								<span class="uppercase text-sm">usd</span>
								<span class="text-xl">10</span>
							</button>

							<button onclick={() => toggleAmount(25)} aria-label="button" class="px-4 py-3 rounded-sm text-center border flex items-center
							justify-center space-x-2 cursor-pointer border-gray-400">
								<span class="uppercase text-sm">usd</span>
								<span class="text-xl">25</span>
							</button>

							<button onclick={() => toggleAmount(50)} aria-label="button" class="px-4 py-3 rounded-sm text-center border flex items-center
						justify-center space-x-2 cursor-pointer border-gray-400">
								<span class="uppercase text-sm">usd</span>
								<span class="text-xl">50</span>
							</button>
						</div>


						<div class="grid grid-cols-3 gap-3">
							<button onclick={() => toggleAmount(75)} aria-label="button" class="px-4 py-3 rounded-sm text-center border flex items-center
						justify-center space-x-2 cursor-pointer border-gray-400">
								<span class="uppercase text-sm">usd</span>
								<span class="text-xl">75</span>
							</button>

							<button onclick={() => toggleAmount(100)} aria-label="button" class="px-4 py-3 rounded-sm text-center border flex items-center
					justify-center space-x-2 cursor-pointer border-gray-400">
								<span class="uppercase text-sm">usd</span>
								<span class="text-xl">100</span>
							</button>

							<button onclick={() => toggleAmount(250)} aria-label="button" class="px-4 py-3 rounded-sm text-center border flex items-center
							justify-center space-x-2 cursor-pointer border-gray-400">
								<span class="uppercase text-sm">usd</span>
								<span class="text-xl">250</span>
							</button>

							<input type="hidden" name="amount" bind:value={amount}>
						</div>

						<div>
							<input type="number" name="custom_amount" value="0" placeholder="Custom Amount"
										 class="w-full border border-gray-400 ring-0 focus:ring
					focus:ring-green-500 transition-all duration-200 px-2 py-5 rounded-sm">
						</div>

						<div>
							<label for="comment">Write us a comment</label>
							<textarea name="comment" class="w-full border border-gray-400 ring-0 focus:ring
					focus:ring-green-500 transition-all duration-200 px-2 py-5 rounded-sm appearance-auto"></textarea>
						</div>

						<div class="mb-5">
							<button aria-label="button" class="flex items-center justify-center space-x-2 bg-green-500
						capitalize px-2 py-2 rounded-sm w-full font-semibold text-lg cursor-pointer hover:shadow-xl">
								<span>next</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
							</button>
						</div>
					</div>

				</div>
			</form>
		</div>

		<div class="col-span-5">
			<h1>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Delectus sed iusto quaerat recusandae natus error, possimus,
				quae facere velit, incidunt cupiditate dolorem! Magni vel
				repudiandae placeat tenetur ex officia ea!
			</h1>

			<h1>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Delectus sed iusto quaerat recusandae natus error, possimus,
				quae facere velit, incidunt cupiditate dolorem! Magni vel
				repudiandae placeat tenetur ex officia ea!
			</h1>
		</div>
	</div>
</section>