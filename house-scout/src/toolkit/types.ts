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
  surname: string;
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
  region_id: number;
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

export interface AgentStateProps {
  agents: AgentType[] | null;
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

export interface CreateEstateStateProps {
  estate: EstateType | null;
  isLoading: boolean;
  error: any;
}
