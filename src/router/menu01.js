export default [
  {
    path: "/menu01/exam01view",
    name: "menu01_exam01view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam01View.vue"),
  },
  {
    path: "/menu01/exam02view",
    name: "menu01_exam02view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam02View"),
  },
  {
    path: "/menu01/exam03view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam03View"),
    children: [
      {
        path: "subacomponent",
        component: () =>
          import(/* webpackChunkName: "common" */ "../components/menu01/SubAComponent"),
      },
      {
        path: "subbcomponent",
        component: () =>
          import(/* webpackChunkName: "common" */ "../components/menu01/SubBComponent"),
      },
    ],
  },
  {
    path: "/menu01/exam04view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam04View"),
    children: [
      {
        path: "",
        components: {
          // 지정한 router-view의 이름을 key로
          default: () =>
            import(/* webpackChunkName: "common" */ "../components/menu01/SubAComponent"),
          rv1: () => import(/* webpackChunkName: "common" */ "../components/menu01/SubBComponent"),
          rv2: () => import(/* webpackChunkName: "common" */ "../components/menu01/SubCComponent"),
        },
      },
    ],
  },
  {
    path: "/menu01/exam05view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam05View"),
  },
  {
    path: "/menu01/exam06view/:bno", // pathvariable 설정
    name: "menu01_exam06view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam06View"),
    props: true, // bno의 값을 해당 componenet의 (같은 이름으로 설정된)prop에 할당
  },
  {
    path: "/menu01/exam07view",
    name: "menu01_exam07view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam07View"),
    props: { kind: "freeboard", color: "blue" }, // 정적으로 변수 할당
  },
  {
    path: "/menu01/exam08view",
    name: "menu01_exam08view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam08View"),
    props: route => ({
      kind: route.query.kind,
      color: route.query.color,
    }),
  },
];
