<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let amounts = $state([10, 20, 30, 50, 100, 200, 300, 400, 500, 1000])
	let currentAmount = $state(0)

	const toggleAmount = (selectedAmount) => {
		currentAmount = selectedAmount
		handleToggleModal()
	}

	// for the locations modal here
	let toggleModal = $state(false)

	const handleToggleModal = () => {
		toggleModal =!toggleModal
	}

</script>

<section transition:slide class="wrapper">
	<div>
		<h1 class="text-3xl font-extrabold text-center capitalize py-20">donate to AGLIT</h1>
	</div>

	<div class="grid grid-cols-2 lg:grid lg:grid-cols-3 max-w-3xl mx-auto gap-3 px-5 mb-10">
		{#each amounts as amount (amount)}
			<button onclick={() => toggleAmount(amount)} aria-label="button"
							class="border border-gray-300 text-lg font-semibold py-7 rounded-lg cursor-pointer">
				${amount}
			</button>
		{/each}
	</div>

	{#if toggleModal}
		<div class="fixed bg-black/50 backdrop-blur-sm inset-0 z-100 h-screen overflow-auto">
			<div class="bg-white rounded-3xl px-5 py-4 max-w-2xl mx-5 lg:mx-auto mt-20 motion-preset-rebound-down">
				<div class="flex items-center justify-between">
					<div>
						<h1 class="text-lg font-semibold capitalize">donate</h1>
					</div>

					<div>
						<button onclick={handleToggleModal} aria-label="button"
										class="flex items-center justify-center cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
						</button>
					</div>
				</div>

				<div>
					<div class="mt-5 space-y-5">
						<div class="bg-green-300 border border-green-500 rounded-xl p-4 w-fit">
							<h1 class="text-lg font-bold">${currentAmount}</h1>
						</div>
						<div>
							<h1 class="font-semibold">
								Thank you for wanting to donate we really appreciate it.
								To finish your donation, get in touch with us:
							</h1>
						</div>

						<div>
							<ul class="flex flex-col gap-2">
								<li class="flex items-center space-x-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.05 21H3v-5.875L8 14.1l2.9 2.9q1-.575 1.863-1.237t1.587-1.388q.775-.75 1.45-1.625t1.225-1.85l-2.85-2.875L15.1 3H21v1.05q0 3.15-1.35 6.2T15.8 15.8t-5.562 3.85T4.05 21"/></svg>
									<p>(+265) 880619483</p>
								</li>

								<li class="flex items-center space-x-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 17q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm7-4.7L7 7.425V15h14V7.425zm0-2.45L21 5H7zM3 21q-.825 0-1.412-.587T1 19V6.5h2V19h16.5v2zM21 7.35V5H7v2.35V5h14z"/></svg>
									<p class="">aglit@gmail.com</p>
								</li>
							</ul>
						</div>

						<div>
							<p>
								We can walk you through the easiest way to give (bank transfer,
								mobile money, or card), answer any questions,
								and provide a confirmation or receipt. When you make a payment,
								please add your name in the transaction reference so we can properly
								thank you and let you know who you helped. If you prefer a call-back,
								just email your preferred time and number.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</section>