import { apiClient } from "./config";

export const rifaFormulario = async (formData: FormData) => {
  try {
    const response = await apiClient.post('/rifas/v2', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Rifa criada com sucesso:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar rifa:', error);
    return error
  }
};
