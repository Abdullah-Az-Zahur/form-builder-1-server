import client from "../config/db.js";

const categorizeCollection = client
  .db("from-builder-1")
  .collection("categorize");

export const createCategorize = async (formData) => {
  return await categorizeCollection.insertOne(formData);
};
