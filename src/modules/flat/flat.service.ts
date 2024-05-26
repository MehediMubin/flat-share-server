/* eslint-disable @typescript-eslint/no-explicit-any */
import { TFlat, TFlatUpdate, TGetAllFlatsOptions } from "./flat.interface";
import { FlatModel } from "./flat.model";

const addFlat = async (payload: TFlat) => {
  const result = await FlatModel.create(payload);
  return result;
};

const getAllFlats = async (options: TGetAllFlatsOptions = {}) => {
  const {
    location,
    minPrice,
    maxPrice,
    numberOfBedrooms,
    page = 1,
    limit = 10,
  } = options;

  const where: any = {};
  if (location) {
    where.location = new RegExp(location, "i");
  }
  if (minPrice) {
    where.rent = { $gte: minPrice };
  }
  if (maxPrice) {
    where.rent = { ...where.rent, $lte: maxPrice };
  }
  if (numberOfBedrooms) {
    where.numberOfBedrooms = numberOfBedrooms;
  }

  const result = await FlatModel.find(where)
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await FlatModel.countDocuments(where);

  const meta = {
    total,
    page,
    limit,
  };

  return { meta, result };
};

const updateSingleFlat = async (id: string, payload: TFlatUpdate) => {
  const result = await FlatModel.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const flatServices = {
  addFlat,
  getAllFlats,
  updateSingleFlat,
};
