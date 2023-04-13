import React, { FC, Suspense } from "react";
import { Await, AwaitProps } from "react-router";

import { Spinner } from "../Spinner";

interface Props extends AwaitProps {
  spinnerMt?: number;
  spinnerMb?: number;
  isFallback?: boolean;
}

export const SuspenseAwait: FC<Props> = ({
  resolve,
  spinnerMt,
  spinnerMb,
  isFallback = true,
  children,
  errorElement,
}) => {
  return (
    <Suspense
      fallback={isFallback && <Spinner mt={spinnerMt} mb={spinnerMb} />}
    >
      <Await resolve={resolve} errorElement={errorElement}>
        {children}
      </Await>
    </Suspense>
  );
};
