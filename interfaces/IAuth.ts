export const enum AuthStatus {
    unauthorized,
    authorized
}

interface IAuth {
    status: AuthStatus,
    accessToken?: string
}

export default IAuth;