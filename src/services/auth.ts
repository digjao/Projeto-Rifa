import { apiClient } from "./config";



export const getTokens = async ( code:string ) => {
    try {
        const response = await apiClient.post('/oauth/callback', { code });
        console.log(response);
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
        return response;
    } catch (error) {
        return false;
    }
};