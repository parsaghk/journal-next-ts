import { TPlainLiteralObject } from '@shared/types';
import { flatten, unflatten } from 'flat';
import _ from 'lodash';
import { useRouter } from 'next/router';
import qs from 'qs';

export function useQueryOptions<
  T extends TPlainLiteralObject = TPlainLiteralObject,
>(defaultQueryOptions?: TPlainLiteralObject): T {
  const router = useRouter();
  const currentQueryOptions: TPlainLiteralObject = (qs.parse(
    router.asPath.substring(router.asPath.lastIndexOf('?'))
  ) ?? {}) as TPlainLiteralObject;
  const mergedQueryOptions = mergeQueryOptions(
    currentQueryOptions,
    defaultQueryOptions
  );
  if (isQueryOptionsChanged(currentQueryOptions, mergedQueryOptions)) {
    router.push(router.asPath, { query: qs.stringify(mergedQueryOptions) });
  }
  return mergedQueryOptions as T;
}

function mergeQueryOptions(
  currentQueryOptions: TPlainLiteralObject = {},
  defaultQueryOptions: TPlainLiteralObject = {}
): TPlainLiteralObject {
  const flattenCurrentQueryOptions: TPlainLiteralObject =
    flatten(currentQueryOptions);
  const flattenDefaultQueryOptions: TPlainLiteralObject =
    flatten(defaultQueryOptions);
  const flattenMergedQueryOptions: TPlainLiteralObject = {
    ...flattenCurrentQueryOptions,
    ...flattenDefaultQueryOptions,
  };
  return unflatten(flattenMergedQueryOptions);
}

function isQueryOptionsChanged(
  previousQueryOptions: TPlainLiteralObject,
  currentQueryOptions: TPlainLiteralObject
) {
  return !_.isEqual(
    _.omitBy(previousQueryOptions, _.isEmpty),
    _.omitBy(currentQueryOptions, _.isEmpty)
  );
  return false;
}
