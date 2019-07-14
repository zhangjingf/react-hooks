import Index from "./views/index/index";
import GuJia from "./views/gujia/index";
import Topics from "./views/topics/index";
import Shop from "./views/shop/index";

const routes = [
  {
    path: "/",
    exact: true,
    component: Index
  },
  {
    path: "/gujia",
    component: GuJia
  },
  {
    path: "/topics",
    component: Topics
  },
  {
    path: "/shop",
    component: Shop
  }
];

export default routes;
