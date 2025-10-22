<script>
	import FoodSecurity from "$lib/assets/images/FoodSecurity.jpg"
	import Monitor from "$lib/assets/images/Monitor.jpg"
	import Farming from "$lib/assets/images/Farming.jpg"

</script>


<div>
	<div class="grid grid-cols-1 lg:grid lg:grid-cols-2 space-y-5 mt-5 lg:mt-10 gap-5">

		<div class="">
			<div class="w-full">
				<div class="bg-red-500 w-32 h-1 my-2 rounded-full"></div>
				<h1 class="text-2xl lg:text-3xl font-bold capitalize">
					stories about our work
				</h1>
			</div>

			<div class="mt-10">
				<p class="leading-7 text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Provident magni repudiandae quibusdam vel quisquam ut, molestias
					officiis laborum dicta saepe atque sunt quod cum facilis libero!
					Repellat maiores atque iste soluta ea saepe mollitia praesentium iure
					modi cumque. Ipsam, consequuntur quo corrupti minus qui suscipit! Distinctio
					suscipit enim sit, ad, in magni cum, magnam consequatur beatae fuga nostrum!
					Ab blanditiis similique pariatur in impedit repellat, ullam temporibus
					provident corporis ducimus architecto suscipit voluptatibus ad! Similique
					inventore libero corrupti omnis a, assumenda tempora impedit ratione sequi,
					aspernatur earum fuga sit nostrum saepe voluptate cupiditate explicabo fugit
					illo rerum dolores aliquid unde.
				</p>
			</div>
		</div>

		<div>
			<div class="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-5">
				<div class="">
					<img src={Farming} alt="Farming" class="w-full h-full object-cover rounded-3xl">
				</div>

				<div class="flex flex-col gap-3">
					<div>
						<img src={Monitor} alt="Monitor" class="rounded-3xl h-full object-cover">
					</div>

					<div>
						<img src={FoodSecurity} alt="FoodSecurity" class="rounded-3xl object-cover h-full">
					</div>
				</div>
			</div>
		</div>


	</div>
</div>