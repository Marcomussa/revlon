import { useState } from 'react';

const BASE_URL = 'http://localhost:8080';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error en el registro');
      }

      setLoading(false);
      return data;
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { signup, loading, error };
};

export default useSignup;
