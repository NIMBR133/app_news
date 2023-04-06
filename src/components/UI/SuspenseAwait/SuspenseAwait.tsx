import React, { FC, Suspense } from "react";
import { Await, AwaitProps } from "react-router";

import { Spinner } from "../Spinner";

interface Props extends AwaitProps {
  spinnerMt?: number;
  spinnerMb?: number;
}

export const SuspenseAwait: FC<Props> = ({
  resolve,
  spinnerMt,
  spinnerMb,
  children,
  errorElement,
}) => {
  return (
    <Suspense fallback={<Spinner mt={spinnerMt} mb={spinnerMb} />}>
      <Await resolve={resolve} errorElement={errorElement}>
        {children}
      </Await>
    </Suspense>
  );
};
