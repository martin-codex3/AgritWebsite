<script>
	import FoodSecurity from "$lib/assets/images/FoodSecurity.jpg"
	import Monitor from "$lib/assets/images/Monitor.jpg"
	import Farming from "$lib/assets/images/Farming.jpg"

	const informations = $state([
		{
			title: "child survival and development",
			image: FoodSecurity,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in enim natus facilis\n" +
				"\t\t\t\tid debitis consequuntur distinctio deserunt voluptatum. Repudiandae sint,\n" +
				"\t\t\t\ta earum repellendus sed modi nostrum. Cumque in officia deserunt, aliquam\n" +
				"\t\t\t\tconsectetur itaque possimus ad quam fuga odit recusandae nihil natus vel"
		},

		{
			title: "education and child protection",
			image: Monitor,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in enim natus facilis\n" +
				"\t\t\t\tid debitis consequuntur distinctio deserunt voluptatum. Repudiandae sint,\n" +
				"\t\t\t\ta earum repellendus sed modi nostrum. Cumque in officia deserunt, aliquam\n" +
				"\t\t\t\tconsectetur itaque possimus ad quam fuga odit recusandae nihil natus vel"
		},

		{
			title: "social policy",
			image: Farming,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in enim natus facilis\n" +
				"\t\t\t\tid debitis consequuntur distinctio deserunt voluptatum. Repudiandae sint,\n" +
				"\t\t\t\ta earum repellendus sed modi nostrum. Cumque in officia deserunt, aliquam\n" +
				"\t\t\t\tconsectetur itaque possimus ad quam fuga odit recusandae nihil natus vel"
		}
	])

	let toggleModal = $state(false)
	let selectedInformation = $state(null)

	const handleToggleModal = (information) => {
		toggleModal = !toggleModal
		selectedInformation = information
	}

</script>

<div class="">
	<div class="w-full">
		<div class="bg-red-500 w-32 h-1 my-2 rounded-full"></div>
		<h1 class="text-2xl lg:text-3xl font-bold capitalize">how we empower communities</h1>
	</div>

	<div class="grid grid-cols-1 lg:grid lg:grid-cols-3 mt-10 gap-5">
		{#each informations as information (information)}
			<div class="rounded-3xl bg-gray-200 px-4 py-3 space-y-5">
				<h1 class="capitalize text-lg font-semibold">{ information.title }</h1>
				<p>
					{ information.description }
				</p>

				<div class="mb-3">
					<button onclick={() => handleToggleModal(information)} class="bg-primary-green rounded-full px-4 py-3 capitalize cursor-pointer
				hover:bg-primary-green/40 transition-all duration-150 ease-initial text-white">
						read more
					</button>
				</div>
			</div>
		{/each}
	</div>

	<div>
		{#if toggleModal}
			<div class="bg-black/50 backdrop-blur-sm fixed inset-0 h-screen z-100 overflow-auto">
				<div class="bg-white rounded-3xl px-5 py-4 max-w-2xl mx-5 lg:mx-auto my-10
				 motion-preset-rebound-down flex flex-col space-y-4">

					<div>
						<h1 class="text-lg font-semibold capitalize flex items-center gap-3">
							{ selectedInformation.title }
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9h14M5 15h14M11 4L7 20M17 4l-4 16"/></svg>
						</h1>
					</div>

					<div>
						<img src={selectedInformation.image} alt="Selected-Item" class="rounded-md h-64 w-full object-cover">
					</div>

					<div>
						<p>{ selectedInformation.description }</p>
					</div>

					<div>
						<button onclick={() => handleToggleModal(selectedInformation)}
										class="bg-primary-green capitalize text-green-100
										 px-5 py-2 rounded-full cursor-pointer">
							close
						</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>