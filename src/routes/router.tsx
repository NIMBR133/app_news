import { createBrowserRouter } from "react-router-dom";

import { loaderNews, loaderStory } from "@/api/loaders";
import { Layout } from "@/components/Layout";
import { ErrorPage } from "@/pages/ErrorPage";
import { NewsPage } from "@/pages/NewsPage";
import { StoryPage } from "@/pages/StoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <NewsPage />,
        loader: loaderNews,
      },
      {
        path: "/story/:id",
        element: <StoryPage />,
        loader: loaderStory,
      },
    ],
  },
]);
