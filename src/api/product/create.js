import Axios from "axios";
import { CORESERVICE } from "../../utils/prefix";

export const postProductAPI = async ({}) => {
    const request = `${CORESERVICE}`;

    const response = await Axios.post(request);

    return response;
}

export const postProductImageAPI = async ({}) => {
    const request = `${CORESERVICE}/image`;

    const response = await Axios.post(request);

    return response;
}

export const postProductSketchAPI = async ({}) => {
    const request = `${CORESERVICE}/sketch`;

    const response = await Axios.post(request);

    return response;
}