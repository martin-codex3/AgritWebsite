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

	// for the locations modal here
	let toggleModal = $state(false)

	const handleToggleModal = () => {
		toggleModal =!toggleModal
	}

</script>

<div>
	<div>
		<div class="w-full">
			<div class="bg-red-500 w-32 h-1 my-2 rounded-full"></div>
			<div class="flex items-center space-x-2 justify-between">
				<div>
					<h1 class="text-2xl lg:text-3xl font-bold capitalize">locations</h1>
				</div>

				<div>
					<button onclick={handleToggleModal} aria-label="button"
									class="capitalize bg-primary-green rounded-full
					 cursor-pointer hover:bg-primary-green/50 transition-all duration-300 px-4 py-2 text-white">
						areas of work
					</button>
				</div>
			</div>
		</div>

		<div class="h-[500px] rounded-3xl mb-10 mt-10 z-0" bind:this={mapContainer}>

		</div>
	</div>

	{#if toggleModal}
		<div class="fixed bg-black/50 backdrop-blur-sm inset-0 z-100 h-screen">
			<div class="bg-white rounded-3xl px-5 py-4 max-w-2xl mx-5 lg:mx-auto mt-20 motion-preset-rebound-down">
				<div class="flex items-center justify-between">
					<div>
						<h1 class="text-lg font-semibold capitalize">communities we work with!</h1>
					</div>

					<div>
						<button onclick={handleToggleModal} aria-label="button"
										class="flex items-center justify-center cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
						</button>
					</div>
				</div>

				<div>
					<div class="mt-10">
						<ul class="space-y-6">
							<li>
								<div class="flex items-center space-x-3">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24"><g fill="none"><path fill="#e11c1b" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="SVGTrazyc7b" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#SVGTrazyc7b)"><path fill="#272727" d="M0 0v10h32V0z"/><path fill="#5eaa22" d="M0 16v8h32v-8z"/><path fill="#e11c1b" d="M4.002 11.946v-.002l-.01.001zm.628-3.82h.103l-.158-.023zm2.928 0q.078-.15.164-.298l-2.29-1.515l2.7.878q.227-.317.486-.614L6.633 4.688l2.529 1.32q.279-.265.583-.51L8.14 3.281l2.266 1.734q.317-.21.654-.397L9.904 2.137l1.914 2.102q.343-.154.7-.282l-.65-2.665l1.483 2.404q.357-.096.727-.167L13.97.774l.986 2.624q.365-.04.739-.054L16.14.6l.447 2.744q.372.016.737.056l.987-2.626l-.109 2.76q.369.07.726.167l1.485-2.409l-.652 2.671q.355.129.696.282l1.92-2.108l-1.16 2.49q.335.186.648.395l2.276-1.74l-1.612 2.226q.3.243.577.506l2.542-1.326l-1.995 1.9q.255.294.48.608l2.716-.883l-2.304 1.525q.083.142.159.289H22.74c-1.354-1.877-3.83-3.134-6.658-3.134S10.778 6.25 9.424 8.127zm3.002 0c1.283-1.322 3.297-2.175 5.562-2.175s4.28.853 5.562 2.176zm16.989 0h.103l.055-.023zm.733 3.818l.008.001z"/></g></g></svg>
									</div>

									<div>
										<p>Malawi / Ngabu</p>
									</div>
								</div>
							</li>

							<li>
								<div class="flex items-center space-x-3">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24"><g fill="none"><path fill="#e11c1b" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="SVGTrazyc7b" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#SVGTrazyc7b)"><path fill="#272727" d="M0 0v10h32V0z"/><path fill="#5eaa22" d="M0 16v8h32v-8z"/><path fill="#e11c1b" d="M4.002 11.946v-.002l-.01.001zm.628-3.82h.103l-.158-.023zm2.928 0q.078-.15.164-.298l-2.29-1.515l2.7.878q.227-.317.486-.614L6.633 4.688l2.529 1.32q.279-.265.583-.51L8.14 3.281l2.266 1.734q.317-.21.654-.397L9.904 2.137l1.914 2.102q.343-.154.7-.282l-.65-2.665l1.483 2.404q.357-.096.727-.167L13.97.774l.986 2.624q.365-.04.739-.054L16.14.6l.447 2.744q.372.016.737.056l.987-2.626l-.109 2.76q.369.07.726.167l1.485-2.409l-.652 2.671q.355.129.696.282l1.92-2.108l-1.16 2.49q.335.186.648.395l2.276-1.74l-1.612 2.226q.3.243.577.506l2.542-1.326l-1.995 1.9q.255.294.48.608l2.716-.883l-2.304 1.525q.083.142.159.289H22.74c-1.354-1.877-3.83-3.134-6.658-3.134S10.778 6.25 9.424 8.127zm3.002 0c1.283-1.322 3.297-2.175 5.562-2.175s4.28.853 5.562 2.176zm16.989 0h.103l.055-.023zm.733 3.818l.008.001z"/></g></g></svg>
									</div>

									<div>
										<p>Malawi / Nsanje</p>
									</div>
								</div>
							</li>

							<li>
								<div class="flex items-center space-x-3">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24"><g fill="none"><path fill="#e11c1b" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="SVGTrazyc7b" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#SVGTrazyc7b)"><path fill="#272727" d="M0 0v10h32V0z"/><path fill="#5eaa22" d="M0 16v8h32v-8z"/><path fill="#e11c1b" d="M4.002 11.946v-.002l-.01.001zm.628-3.82h.103l-.158-.023zm2.928 0q.078-.15.164-.298l-2.29-1.515l2.7.878q.227-.317.486-.614L6.633 4.688l2.529 1.32q.279-.265.583-.51L8.14 3.281l2.266 1.734q.317-.21.654-.397L9.904 2.137l1.914 2.102q.343-.154.7-.282l-.65-2.665l1.483 2.404q.357-.096.727-.167L13.97.774l.986 2.624q.365-.04.739-.054L16.14.6l.447 2.744q.372.016.737.056l.987-2.626l-.109 2.76q.369.07.726.167l1.485-2.409l-.652 2.671q.355.129.696.282l1.92-2.108l-1.16 2.49q.335.186.648.395l2.276-1.74l-1.612 2.226q.3.243.577.506l2.542-1.326l-1.995 1.9q.255.294.48.608l2.716-.883l-2.304 1.525q.083.142.159.289H22.74c-1.354-1.877-3.83-3.134-6.658-3.134S10.778 6.25 9.424 8.127zm3.002 0c1.283-1.322 3.297-2.175 5.562-2.175s4.28.853 5.562 2.176zm16.989 0h.103l.055-.023zm.733 3.818l.008.001z"/></g></g></svg>
									</div>

									<div>
										<p>Malawi / Nchalo</p>
									</div>
								</div>
							</li>

							<li>
								<div class="flex items-center space-x-3">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24"><g fill="none"><path fill="#e11c1b" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="SVGTrazyc7b" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#SVGTrazyc7b)"><path fill="#272727" d="M0 0v10h32V0z"/><path fill="#5eaa22" d="M0 16v8h32v-8z"/><path fill="#e11c1b" d="M4.002 11.946v-.002l-.01.001zm.628-3.82h.103l-.158-.023zm2.928 0q.078-.15.164-.298l-2.29-1.515l2.7.878q.227-.317.486-.614L6.633 4.688l2.529 1.32q.279-.265.583-.51L8.14 3.281l2.266 1.734q.317-.21.654-.397L9.904 2.137l1.914 2.102q.343-.154.7-.282l-.65-2.665l1.483 2.404q.357-.096.727-.167L13.97.774l.986 2.624q.365-.04.739-.054L16.14.6l.447 2.744q.372.016.737.056l.987-2.626l-.109 2.76q.369.07.726.167l1.485-2.409l-.652 2.671q.355.129.696.282l1.92-2.108l-1.16 2.49q.335.186.648.395l2.276-1.74l-1.612 2.226q.3.243.577.506l2.542-1.326l-1.995 1.9q.255.294.48.608l2.716-.883l-2.304 1.525q.083.142.159.289H22.74c-1.354-1.877-3.83-3.134-6.658-3.134S10.778 6.25 9.424 8.127zm3.002 0c1.283-1.322 3.297-2.175 5.562-2.175s4.28.853 5.562 2.176zm16.989 0h.103l.055-.023zm.733 3.818l.008.001z"/></g></g></svg>
									</div>

									<div>
										<p>Malawi / Thyolo</p>
									</div>
								</div>
							</li>

							<li>
								<div class="flex items-center space-x-3">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24"><g fill="none"><path fill="#e11c1b" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="SVGTrazyc7b" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#SVGTrazyc7b)"><path fill="#272727" d="M0 0v10h32V0z"/><path fill="#5eaa22" d="M0 16v8h32v-8z"/><path fill="#e11c1b" d="M4.002 11.946v-.002l-.01.001zm.628-3.82h.103l-.158-.023zm2.928 0q.078-.15.164-.298l-2.29-1.515l2.7.878q.227-.317.486-.614L6.633 4.688l2.529 1.32q.279-.265.583-.51L8.14 3.281l2.266 1.734q.317-.21.654-.397L9.904 2.137l1.914 2.102q.343-.154.7-.282l-.65-2.665l1.483 2.404q.357-.096.727-.167L13.97.774l.986 2.624q.365-.04.739-.054L16.14.6l.447 2.744q.372.016.737.056l.987-2.626l-.109 2.76q.369.07.726.167l1.485-2.409l-.652 2.671q.355.129.696.282l1.92-2.108l-1.16 2.49q.335.186.648.395l2.276-1.74l-1.612 2.226q.3.243.577.506l2.542-1.326l-1.995 1.9q.255.294.48.608l2.716-.883l-2.304 1.525q.083.142.159.289H22.74c-1.354-1.877-3.83-3.134-6.658-3.134S10.778 6.25 9.424 8.127zm3.002 0c1.283-1.322 3.297-2.175 5.562-2.175s4.28.853 5.562 2.176zm16.989 0h.103l.055-.023zm.733 3.818l.008.001z"/></g></g></svg>
									</div>

									<div>
										<p>Malawi / Luchenza</p>
									</div>
								</div>
							</li>

							<li>
								<div class="flex items-center space-x-3">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24"><g fill="none"><path fill="#e11c1b" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="SVGTrazyc7b" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#SVGTrazyc7b)"><path fill="#272727" d="M0 0v10h32V0z"/><path fill="#5eaa22" d="M0 16v8h32v-8z"/><path fill="#e11c1b" d="M4.002 11.946v-.002l-.01.001zm.628-3.82h.103l-.158-.023zm2.928 0q.078-.15.164-.298l-2.29-1.515l2.7.878q.227-.317.486-.614L6.633 4.688l2.529 1.32q.279-.265.583-.51L8.14 3.281l2.266 1.734q.317-.21.654-.397L9.904 2.137l1.914 2.102q.343-.154.7-.282l-.65-2.665l1.483 2.404q.357-.096.727-.167L13.97.774l.986 2.624q.365-.04.739-.054L16.14.6l.447 2.744q.372.016.737.056l.987-2.626l-.109 2.76q.369.07.726.167l1.485-2.409l-.652 2.671q.355.129.696.282l1.92-2.108l-1.16 2.49q.335.186.648.395l2.276-1.74l-1.612 2.226q.3.243.577.506l2.542-1.326l-1.995 1.9q.255.294.48.608l2.716-.883l-2.304 1.525q.083.142.159.289H22.74c-1.354-1.877-3.83-3.134-6.658-3.134S10.778 6.25 9.424 8.127zm3.002 0c1.283-1.322 3.297-2.175 5.562-2.175s4.28.853 5.562 2.176zm16.989 0h.103l.055-.023zm.733 3.818l.008.001z"/></g></g></svg>
									</div>

									<div>
										<p>Malawi / Blantyre</p>
									</div>
								</div>
							</li>

							<li>
								<div class="flex items-center space-x-3">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24"><g fill="none"><path fill="#e11c1b" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="SVGTrazyc7b" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#SVGTrazyc7b)"><path fill="#272727" d="M0 0v10h32V0z"/><path fill="#5eaa22" d="M0 16v8h32v-8z"/><path fill="#e11c1b" d="M4.002 11.946v-.002l-.01.001zm.628-3.82h.103l-.158-.023zm2.928 0q.078-.15.164-.298l-2.29-1.515l2.7.878q.227-.317.486-.614L6.633 4.688l2.529 1.32q.279-.265.583-.51L8.14 3.281l2.266 1.734q.317-.21.654-.397L9.904 2.137l1.914 2.102q.343-.154.7-.282l-.65-2.665l1.483 2.404q.357-.096.727-.167L13.97.774l.986 2.624q.365-.04.739-.054L16.14.6l.447 2.744q.372.016.737.056l.987-2.626l-.109 2.76q.369.07.726.167l1.485-2.409l-.652 2.671q.355.129.696.282l1.92-2.108l-1.16 2.49q.335.186.648.395l2.276-1.74l-1.612 2.226q.3.243.577.506l2.542-1.326l-1.995 1.9q.255.294.48.608l2.716-.883l-2.304 1.525q.083.142.159.289H22.74c-1.354-1.877-3.83-3.134-6.658-3.134S10.778 6.25 9.424 8.127zm3.002 0c1.283-1.322 3.297-2.175 5.562-2.175s4.28.853 5.562 2.176zm16.989 0h.103l.055-.023zm.733 3.818l.008.001z"/></g></g></svg>
									</div>

									<div>
										<p>Malawi / Chikwawa</p>
									</div>
								</div>
							</li>


						</ul>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	:global(.map) {
			border-radius: 20px;
	}
</style>