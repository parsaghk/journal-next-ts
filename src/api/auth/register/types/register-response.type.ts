import { TTokens, TUserSummary } from '@shared/types';

export type TRegisterResponse = {
  user: TUserSummary;
  tokens: TTokens;
};
