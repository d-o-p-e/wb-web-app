import Axios from "axios";
import { CORESERVICE } from "../../utils/prefix";

export const getProductByProductIdAPI = async ({productId}) => {
    
    const request = `${CORESERVICE}/${productId}`;

    const response = await Axios.get(request);

    return response;
}