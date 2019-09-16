import Index from "./views/index/index";
import GuJia from "./views/gujia/index";
import Topics from "./views/topics/index";
import Shop from "./views/shop/index";
import Content from "./views/content/index";

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
  },
  {
    path: "/content",
    component: Content
  }
];

export default routes;
