export interface AuthUser {
  sub: string;
  name: string;
  nickname: string;
  email?: string;
  picture?: string;
  email_verified?: boolean;
  updated_at: string;
}
