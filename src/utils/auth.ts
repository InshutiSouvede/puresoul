export function getAuthToken(): string | null {
    return localStorage.getItem('token')
}
export function getCurrentUserId(): string | null {
    return localStorage.getItem('userId')
}
export function getCurrentUserRole(): string | null {
    return localStorage.getItem('userRole')
}
export function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('userRole')
}