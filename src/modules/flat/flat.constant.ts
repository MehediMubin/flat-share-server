export type TFlat = {
  squareFeet: number;
  totalBedrooms: number;
  totalRooms: number;
  utilitiesDescription: string;
  location: string;
  description: string;
  rent: number;
  availability?: boolean;
  advanceAmount: number;
};

export type TFlatUpdate = {
  squareFeet?: number;
  totalBedrooms?: number;
  totalRooms?: number;
  utilitiesDescription?: string;
  location?: string;
  description?: string;
  rent?: number;
  availability?: boolean;
  advanceAmount?: number;
};

export type TGetAllFlatsOptions = {
  location?: string;
  description?: string;
  utilitiesDescription?: string;
  page?: number;
  limit?: number;
  sortBy?:
    | "rent"
    | "advanceAmount"
    | "squareFeet"
    | "totalRooms"
    | "totalBedrooms";
  sortOrder?: "asc" | "desc";
  availability?: boolean;
};
