import { HeaderOnly } from "~/components/Layout";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Update from "~/pages/Update";
import Search from "~/pages/Search";

import routesConfig from '~/config/routes'

const publicRoutes = [

  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.update, component: Update, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null }

]

const privateRoutes = []

export { publicRoutes, privateRoutes }