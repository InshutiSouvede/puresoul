export function getAuthToken(): string | null {
    return localStorage.getItem('token')
}
export function getCurrentUserId(): string | null {
    return localStorage.getItem('userId')
}
export function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
}