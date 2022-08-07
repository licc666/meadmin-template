import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
    {
        path: 'index1',
        component: () => import('@/views/test/index.vue'),
        meta: { title: '测试菜单1' },
    },
    {
        path: 'index2',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '测试菜单2', icon: "el-icon-setting", noCache: true },
    },
    {
        path: 'index3',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '测试菜单3' },
    },
    {
        path: 'index4',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '测试菜单4' },
    },
    {
        path: 'index5',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '测试菜单5' },
    },
    {
        path: 'http://www.baidu.com',
        component: () => import('@/views/link.vue'),
        meta: { title: '外链', isLink: true },
    }
];