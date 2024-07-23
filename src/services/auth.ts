import { apiClient } from "./config";

export const createRifa = async (formData: FormData) => {
 
    const response = await apiClient.post('/rifas/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Rifa criada com sucesso:', response.data);
    return response.data;
  }   
;
