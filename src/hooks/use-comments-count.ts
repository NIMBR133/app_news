import { useEffect, useState } from "react";

import { getAllComments } from "@/api/loaders/loader-story";

export const useCommentsCount = (ids?: number[]) => {
  const [commentsCount, setCommentsCount] = useState<number>(0);

  useEffect(() => {
    const getCountComments = async () => {
      const count = await getAllComments(ids);
      setCommentsCount(count);
    };

    if (ids) getCountComments();
  }, [ids]);

  return commentsCount;
};
