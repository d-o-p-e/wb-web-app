import Axios from "axios";
import { CORESERVICE } from "../../utils/prefix";

export const deleteProductByProductIdAPI = async ({ productId }) => {
  const request = `${CORESERVICE}/${productId}`;

  const response = await Axios.delete(request);

  return response;
};

export const deleteProductImageByProductIdAndImageIdAPI = async ({
  productId,
  imageId,
}) => {
  const request = `${CORESERVICE}/${productId}/image/${imageId}`;

  const response = await Axios.delete(request);

  return response;
};

export const deleteProductSketchByProductIdAPI = async ({
  productId,
}) => {
  const request = `${CORESERVICE}/${productId}/sketch`;

  const response = await Axios.delete(request);

  return response;
};
