import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '',
        name: 'Menu',
        redirect: "/main",
        component: () => import('~/components/MainStructure.vue'),
        children: [
            {
                path: '/main',
                name: 'fileLoad',
                component: () => import('~/components/Loadfile.vue')
            },
            {
                path: '/historye',
                name: 'filtere',
                component: () => import('~/components/FilterPageE.vue')
            },
            {
                path: '/historyr',
                name: 'filterr',
                component: () => import('~/components/FilterPageR.vue')
            },
            {
                path: '/input',
                name: 'inputTable',
                component: () => import('~/components/InputTable.vue')
            }
        ]
    },
    {
        path: '/result/:batchID',
        name: 'history',
        component: () => import('~/components/ResultPage.vue')
    },
    {
        path: '/calculating/:batchID',
        name: 'calculating',
        component: () => import('~/components/Calculating.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router