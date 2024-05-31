import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '',
        name: 'Menu',
        component: () => import('~/components/MainStructure.vue'),
        children: [
            {
                path: '/main',
                name: 'fileLoad',
                component: () => import('~/components/MainPage.vue')
            },
            {
                path: '/history/:batchID',
                name: 'filter',
                component: () => import('~/components/FilterPage.vue')
            },
        ]
    },
    {
        path: '/history/result/:batchID',
        name: 'historyResult',
        component: () => import('~/components/ResultPage.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router