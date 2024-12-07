export interface Auth0User {
  sub: string;
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email?: string;
}
