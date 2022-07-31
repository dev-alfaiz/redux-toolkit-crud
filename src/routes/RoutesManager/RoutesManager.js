import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../../screens";
import { Posts, PostById, CreatePost } from "../../components";

const ROUTES_LIST = [
  {
    routeName: "DefaultPage",
    path: "/",
    element: <Home />,
  },
  {
    routeName: "HomePage",
    path: "/home",
    element: <Home />,
  },
  {
    routeName: "PostByIdPage",
    path: "/post",
    element: <PostById />,
  },
  {
    routeName: "CreatePostPage",
    path: "/createpost",
    element: <CreatePost />,
  },
  {
    routeName: "PostsPage",
    path: "posts",
    element: <Posts />,
  },
];

export const RoutesManager = () => {
  return (
    <Routes>
      {ROUTES_LIST.map((item) => {
        return (
          <Route
            exact
            path={item.path}
            element={item.element}
            key={item.routeName}
          />
        );
      })}
    </Routes>
  );
};
