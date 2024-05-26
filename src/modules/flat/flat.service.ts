import { Prisma } from "@prisma/client";
import prisma from "../../db/prisma";
import { TFlat, TFlatUpdate, TGetAllFlatsOptions } from "./flat.constant";

type FlatOrderByInput = {
  id?: Prisma.SortOrder;
  squareFeet?: Prisma.SortOrder;
  totalBedrooms?: Prisma.SortOrder;
  totalRooms?: Prisma.SortOrder;
  utilitiesDescription?: Prisma.SortOrder;
  location?: Prisma.SortOrder;
  description?: Prisma.SortOrder;
  rent?: Prisma.SortOrder;
  availability?: Prisma.SortOrder;
  advanceAmount?: Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
  updatedAt?: Prisma.SortOrder;
};

const addFlat = async (payload: TFlat) => {
  const result = await prisma.flat.create({
    data: payload,
  });
  return result;
};

const getAllFlats = async (options: TGetAllFlatsOptions = {}) => {
  const {
    location,
    description,
    utilitiesDescription,
    page = 1,
    limit = 10,
    sortBy,
    sortOrder = "asc",
    availability,
  } = options;

  const where: Prisma.FlatWhereInput = {};
  if (location) {
    where.location = { contains: location, mode: "insensitive" };
  }
  if (description) {
    where.description = { contains: description, mode: "insensitive" };
  }
  if (utilitiesDescription) {
    where.utilitiesDescription = {
      contains: utilitiesDescription,
      mode: "insensitive",
    };
  }
  if (availability !== undefined) {
    where.availability = availability;
  }

  const orderBy: FlatOrderByInput = {};
  if (sortBy) {
    orderBy[sortBy as keyof FlatOrderByInput] = sortOrder as Prisma.SortOrder;
  }

  const queryOptions: Prisma.FlatFindManyArgs = {
    where,
    orderBy,
    skip: (page - 1) * limit,
    take: limit,
  };

  const [result, total] = await Promise.all([
    prisma.flat.findMany(queryOptions),
    prisma.flat.count({ where }),
  ]);
  const meta = {
    total,
    page,
    limit,
  };

  return { meta, result };
};

const updateSingleFlat = async (id: string, payload: TFlatUpdate) => {
  const result = await prisma.flat.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

export const flatServices = {
  addFlat,
  getAllFlats,
  updateSingleFlat,
};
