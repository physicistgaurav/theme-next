import axios from "axios";

export const getUsersData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log("api log", response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };
  
  
export  const getProductsData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log("api log", response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };
  