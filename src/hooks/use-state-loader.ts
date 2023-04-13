import { useState } from "react";
import { useLoaderData } from "react-router";

export const useStateLoader = <T>() => {
  const promises = useLoaderData() as T;

  const [statePromise, setStatePromise] = useState<T>(promises);

  return [statePromise, setStatePromise] as const;
};
