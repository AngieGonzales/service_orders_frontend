import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null as string | null
    }),

    actions: {
        setUser(userData: any, token: string) {
            this.user = userData
            this.token = token
            localStorage.setItem('access_token', token)
        },
        logout() {
            this.user = null
            this.token = null
            localStorage.removeItem('access_token')
        },
        initializeAuth() {
            const storedToken = localStorage.getItem('access_token')
            if (storedToken) {
                this.token = storedToken
            }
        }
    }
})
