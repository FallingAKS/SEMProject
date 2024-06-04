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
                component: () => import('~/components/Loadfile.vue')
            },
            {
                path: '/history',
                name: 'filter',
                component: () => import('~/components/FilterPage.vue')
            },
        ]
    },
    {
        path: '/result/:batchID',
        name: 'history',
        component: () => import('~/components/ResultPage.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router