import { Product } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const search = async (searchQuery: string): Promise<Product[]> => {
  const response = await axiosInstance.get(ApiRoutes.SEARCH_PRODUCTS, {
    params: { query: searchQuery },
  });
  return response.data;
};
