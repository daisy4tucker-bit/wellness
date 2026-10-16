export interface City {
  id: string;
  slug: string;
  name: string;
  stateSlug: string;
  countrySlug: string;
  stateCode: string;
  activeListings: number;
  isPopular?: boolean;
  heroImage?: string;
  description?: string;
  lat?: number;
  lng?: number;
}

export interface StateProvince {
  id: string;
  slug: string;
  name: string;
  code: string;
  countrySlug: string;
  activeListings: number;
  cities: City[];
}

export interface Country {
  id: string;
  slug: string;
  name: string;
  code: string;
  flag: string;
  activeListings: number;
  states: StateProvince[];
}

export interface LocationRouteState {
  countrySlug?: string;
  stateSlug?: string;
  citySlug?: string;
}

export interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

export type LocationBreadcrumb = BreadcrumbItem;

export interface LocationContext {
  country?: Country | null;
  state?: StateProvince | null;
  city?: City | null;
}
