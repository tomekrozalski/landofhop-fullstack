import { cloneDeep } from 'lodash-es';
import { emptyLanguageValue } from '$lib/utils/helpers/emptyFieldValues';
import type { Input } from './types.d';

export const initialValues: Input = {
	badge: '',
	name: [cloneDeep(emptyLanguageValue)],
	owner: null,
	website: null
};
