import { tesloApi } from '@/api/tesloApi';
import type { AuthResponse } from '../interfaces/auth.response';

export const registerAction = async (
  fullName: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
      fullName,
      email,
      password,
    });
    return data;
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    throw error;
  }
};
