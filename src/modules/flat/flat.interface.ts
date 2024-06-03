export type TFlat = {
  location: string;
  description: string;
  rent: number;
  numberOfBedrooms: number;
  amenities: string;
  photoUrl: string;
};

export type TFlatUpdate = {
  numberOfBedrooms?: number;
  location?: string;
  description?: string;
  rent?: number;
  amenities?: string;
};

export type TGetAllFlatsOptions = {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  numberOfBedrooms?: number;
  page?: number;
  limit?: number;
};
