export const nonNullable = <T>(value: T): value is NonNullable<T> => {
  return Boolean(value);
};
