import { axiosInstance } from "./instance";
import { CartDTO, CreateCartItemValues } from "./dto/cart-dto";

export const getCart = async (): Promise<CartDTO> => {
  const response = await axiosInstance.get<CartDTO>("/cart");
  return response.data;
};

export const updateItemQuantity = async (
  itemId: number,
  quantity: number
): Promise<CartDTO> => {
  const response = await axiosInstance.patch<CartDTO>(`/cart/${itemId}`, {
    quantity,
  });
  return response.data;
};

export const removeCartItem = async (id: number): Promise<CartDTO> => {
  const response = await axiosInstance.delete<CartDTO>(`/cart/${id}`);
  return response.data;
};

export const addCartItem = async (
  values: CreateCartItemValues
): Promise<CartDTO> => {
  const response = await axiosInstance.post<CartDTO>("/cart", values);
  return response.data;
};
