export const loginRequest = async (email: string, password: string): Promise<string> => fetch('https://www.charit.ee/api/auth/login/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    password,
  }),
}).then((response) => response.json())
  .then((json) => json.data)
  .catch((error) => {
    console.error(error);
  });

export const registerRequest = async (email: string, password: string): Promise<string> => fetch('https://www.charit.ee/api/auth/register/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    password,
  }),
}).then((response) => response.json())
  .then((json) => json.data)
  .catch((error) => {
    console.error(error);
  });