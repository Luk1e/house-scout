export interface CityType {
  id: number;
  name: string;
  region_id: number;
  region: RegionType;
}

export interface RegionType {
  id: number;
  name: string;
}

export interface AgentType {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface EstateType {
  id: number;
  address: string;
  zip_code: number;
  price: number;
  area: number;
  bedrooms: number;
  is_rental: number;
  image: string;
  city_id: number;
  city: CityType;
}

export interface CityStateProps {
  cities: CityType[] | null;
  isLoading: boolean;
  error: any;
}

export interface RegionStateProps {
  regions: RegionType[] | null;
  isLoading: boolean;
  error: any;
}

export interface EstatesStateProps {
  estates: EstateType[] | null;
  isLoading: boolean;
  error: any;
}

export interface CreateAgentStateProps {
  agent: AgentType | null;
  isLoading: boolean;
  error: any;
}
