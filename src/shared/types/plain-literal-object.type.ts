// export type TPlainLiteralObject = {
//   [key: string]: string | boolean | number | TPlainLiteralObject;
// };

export type TPlainLiteralObject = NodeJS.Dict<
  | string
  | number
  | boolean
  | ReadonlyArray<string>
  | ReadonlyArray<number>
  | ReadonlyArray<boolean>
  | ReadonlyArray<TPlainLiteralObject>
  | TPlainLiteralObject
  | null
>;
