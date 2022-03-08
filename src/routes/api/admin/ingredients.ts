import { authenticate, getDbCollections } from '$lib/utils/api';
import type { RawIngredientWithoutId } from '$lib/utils/types/api/RawIngredient';

export async function get({ request }) {
	const { ingredients } = await getDbCollections();
	const [isAuthenticated, headers] = await authenticate(request);

	if (!isAuthenticated) {
		return {
			status: 401,
			body: 'Unauthorized. List of ingredients cannot be sent'
		};
	}

	const data: RawIngredientWithoutId[] = await ingredients
		.find(
			{},
			{
				projection: {
					_id: 0,
					badge: 1,
					name: 1,
					type: 1,
					parent: 1
				}
			}
		)
		.toArray();

	return {
		headers,
		body: data
	};
}
