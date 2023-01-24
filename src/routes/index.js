import { HeaderOnly } from "~/layouts";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Update from "~/pages/Update";
import Search from "~/pages/Search";

import config from '~/config'

const publicRoutes = [

  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.update, component: Update, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null }

]

const privateRoutes = []

export { publicRoutes, privateRoutes }