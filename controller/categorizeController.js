import { createCategorize } from "../models/categorizeModel.js";

export const createCategorizeController = async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    const result = await createCategorize(formData);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Error saving data", error });
  }
};
