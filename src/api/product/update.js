import Axios from "axios";
import { CORESERVICE } from "../../utils/prefix";

export const updateProductByProductIdAPI = async ({productId, body}) => {
    const request = `${CORESERVICE}/${productId}`;

    const response = await Axios.put(request, body);

    return response;
}

export const addProductImageByProductIdAPI = async ({productId}) => {
    const request = `${CORESERVICE}/${productId}/image`;

    const response = await Axios.put(request);

    return response;
}