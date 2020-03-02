export default [
    {
        path: '/',
        name: 'main',
        component: () => import('../pages/main/index.vue')
    },
    {
        path: '/articles',
        name: 'articles',
        component: () => import('../pages/articles/index.vue')
    }
]
