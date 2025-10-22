import type { User } from '@/interfaces/user.interface';

//Works for Login, Register and CheckStatus
export interface AuthResponse {
  user: User;
  token: string;
}
