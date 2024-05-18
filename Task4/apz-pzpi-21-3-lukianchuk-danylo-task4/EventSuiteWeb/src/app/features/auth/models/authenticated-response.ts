export interface AuthenticatedResponse{
    tokenType: string;
    token: string;
    expiration: Date;
    refreshToken: string;
  }