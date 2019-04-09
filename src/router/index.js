import Vue from "vue";
import VueRouter from "vue-router";

import routeName from "./routeName";

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: "/",
			name: routeName.home,
			component: () => import("@/views/Home"),
		},
		{
			path: "/settings/",
			name: routeName.settings,
			component: () => import("@/views/Settings"),
		},
	],
});

export default router;
