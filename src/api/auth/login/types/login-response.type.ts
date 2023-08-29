import { TTokens, TUserSummary } from '@shared/types';

export type TLoginResponse = {
  user: TUserSummary;
  tokens: TTokens;
};
