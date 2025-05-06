import { useAuthStore } from "~/stores/auth"

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    if (!auth.token) {
        return navigateTo('/')
    }
})

onMounted(() => {
    const auth = useAuthStore()
    auth.initializeAuth()
})



