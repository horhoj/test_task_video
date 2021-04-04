import {IRouteItem} from "./types";
import KeySelectPage from "../pages/KeySelectPage";
import VideoPage from "../pages/VideoPage";
import RouteNotFoundPage from "../pages/RouteNotFoundPage";
import VideoLoadPage from "../pages/VideoLoadPage";

const routes: Array<IRouteItem> = [
    {
      name: 'selectKeyPage',
      path: '/',
      component: KeySelectPage,
      exact: true,
    },
    {
      name: 'videoPage',
      path: '/video/:id',
      component: VideoPage,
      exact: false,
    },
    {
      name: 'videoLoadPage',
      component: VideoLoadPage,
      path: '/load/:id',
      exact: false,
    },
    {
      name: 'routeNotFoundPage',
      path: '*',
      component: RouteNotFoundPage,
      exact: true
    }
  ]
;

export default routes;
