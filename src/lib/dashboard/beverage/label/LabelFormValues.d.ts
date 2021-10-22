import type { InstitutionInsideBeverage } from '$lib/utils/types/Institution';
import {
	ContainerColor,
	ContainerMaterial,
	ContainerType,
	ContainerUnit
} from '$lib/utils/enums/Beverage.enum';

export type LabelFormValues = {
	badge: string;
	name: {
		language: string;
		value: string;
	}[];
	series: {
		language: string;
		value: string;
	}[];
	brand: string;
	cooperation: string[] | null;
	barcode: string | null;
	container: {
		color: ContainerColor | string;
		hasCapWireFlip: boolean;
		hasCork: boolean;
		material: ContainerMaterial | string;
		type: ContainerType | string;
		unit: ContainerUnit | string;
		value: number;
	};
};

export type LabelFormOutput = {
	badge: string;
	name: {
		language?: string;
		value: string;
	}[];
	series?: {
		language?: string;
		value: string;
	}[];
	brand: InstitutionInsideBeverage;
	cooperation?: InstitutionInsideBeverage[];
	barcode?: string;
	container: {
		color: ContainerColor;
		hasCapWireFlip?: boolean;
		hasCork?: boolean;
		material: ContainerMaterial;
		type: ContainerType;
		unit: ContainerUnit;
		value: number;
	};
};
