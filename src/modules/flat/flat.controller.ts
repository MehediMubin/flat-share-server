import catchAsync from "../../utils/catchAsync";
import { TGetAllFlatsOptions } from "./flat.constant";
import { flatServices } from "./flat.service";

const addFlat = catchAsync(async (req, res) => {
  const result = await flatServices.addFlat(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Flat added successfully",
    data: result,
  });
});

const getAllFlats = catchAsync(async (req, res) => {
  const options: TGetAllFlatsOptions = {
    sortBy: req.query.sortBy as "squareFeet" | "totalBedrooms" | "totalRooms" | "rent" | "advanceAmount" | undefined,
    sortOrder: req.query.sortOrder as "asc" | "desc",
    location: req.query.location as string,
    description: req.query.description as string,
    utilitiesDescription: req.query.utilitiesDescription as string,
    availability: req.query.availability === 'true' ? true : req.query.availability === 'false' ? false : undefined,
  };
  const { meta, result } = await flatServices.getAllFlats(options);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Flats retrieved successfully",
    meta,
    data: result,
  });
});

const updateFlat = catchAsync(async (req, res) => {
  const { flatId } = req.params;
  const result = await flatServices.updateSingleFlat(flatId, req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Flat information updated successfully",
    data: result,
  });
});

export const flatControllers = {
  addFlat,
  getAllFlats,
  updateFlat,
};
