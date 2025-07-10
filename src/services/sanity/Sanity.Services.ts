import { sanity } from '~/helpers/axios/Config.Axios';
import { APIResponse } from '~/helpers/axios/Response';

export async function FetchAllAncientWonders() {
  try {
    const query = `*[_type == "ancientwonder"]`;
    const response = await sanity.get(`ancientwonder`, { params: { query } });
    return await APIResponse({ statusCode: response.status, data: response.data.result });
  } catch (error) {
    console.log(error);
  }
}

export async function FetchAncientWonderById(id: string) {
  try {
    const query = `*[_type == "ancientwonder" && _id == "${id}"]`;
    const response = await sanity.get(`ancientwonder`, { params: { query } });
    return await APIResponse({ statusCode: response.status, data: response.data.result });
  } catch (error) {
    console.log(error);
  }
}
