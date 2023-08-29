import { TTokens } from '@shared/types';

export type TTokenState = {
  accessToken?: string;
  refreshToken?: string;
  setTokens: (tokens: TTokens) => void;
  removeTokens: () => void;
};
