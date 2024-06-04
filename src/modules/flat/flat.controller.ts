import catchAsync from "../../utils/catchAsync";
import { TGetAllFlatsOptions } from "./flat.interface";
import { flatServices } from "./flat.service";

const addFlat = catchAsync(async (req, res) => {
  const { id } = req.user;
  // eslint-disable-next-line no-console
  console.log(id);
  const result = await flatServices.addFlat(req.body, id);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Flat added successfully",
    data: result,
  });
});

const getAllFlats = catchAsync(async (req, res) => {
  const options: TGetAllFlatsOptions = {
    location: req.query.location ? (req.query.location as string) : undefined,
    numberOfBedrooms: req.query.numberOfBedrooms
      ? parseInt(req.query.numberOfBedrooms as string)
      : undefined,
    minPrice: req.query.minPrice
      ? parseInt(req.query.minPrice as string)
      : undefined,
    maxPrice: req.query.maxPrice
      ? parseInt(req.query.maxPrice as string)
      : undefined,
  };
  const result = await flatServices.getAllFlats(options);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Flats retrieved successfully",
    data: result,
  });
});

const getSingleUserFlats = catchAsync(async (req, res) => {
  const { id } = req.user;
  const result = await flatServices.getSingleUserFlats(id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User flats retrieved successfully",
    data: result,
  });
});

const getSingleFlat = catchAsync(async (req, res) => {
  const { flatId } = req.params;
  const result = await flatServices.getSingleFlat(flatId);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Flat retrieved successfully",
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

const deleteSingleFlat = catchAsync(async (req, res) => {
  const { flatId } = req.params;
  const result = await flatServices.deleteSingleFlat(flatId);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Flat deleted successfully",
    data: result,
  });
});

export const flatControllers = {
  addFlat,
  getAllFlats,
  getSingleUserFlats,
  getSingleFlat,
  updateFlat,
  deleteSingleFlat,
};
