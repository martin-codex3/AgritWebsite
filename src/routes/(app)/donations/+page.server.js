export const actions = {
	donate: async ({ request }) => {
		const form = await request.formData()

		const amount = form.get("amount")
		const custom_amount = form.get("custom_amount")
		const comment = form.get("comment")

		console.log(form);

	}
}