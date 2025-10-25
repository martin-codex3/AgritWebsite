<script>
	import IntroductionImage from "$lib/assets/images/FoodSecurity.jpg"
	import { goto } from '$app/navigation';

	const handleNavigate = () => {
		goto("/about-us")
	}
</script>

<div class="mt-14">
	<div class="grid grid-cols-1 lg:grid lg:grid-cols-12 lg:gap-10">
		<div class="col-span-7 relative">
			<img src={IntroductionImage} alt="Introduction" class="rounded-3xl"/>
			<div class="absolute inset-0 bg-black/20 h-full rounded-3xl"></div>
		</div>

		<div class="col-span-5 space-y-5 mt-5 lg:mt-10">
			<div>
				<h1 class="text-3xl font-bold capitalize">background</h1>
			</div>

			<div>
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

			<div>
				<button onclick={handleNavigate} class="w-44 rounded-full cursor-pointer bg-primary-green
				 py-2 lg:py-4 text-lg capitalize text-white">
					<span>read more</span>
					<span class="icon-[material-symbols--arrow-right-alt]"></span>
				</button>
			</div>
		</div>
	</div>
</div>