import { AuthState } from './AuthContext';

type AuthAction =
    | { type: 'signInWithUser', payload: string }
    | { type: 'signOut' }
    | { type: 'signInWithoutUser', payload: string }

//generaEstado
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signInWithUser':
            return {
                ...state,
                isLoggedIn: true,
                username: 'Rick Sanchez'
            };
        case 'signOut':
            return {
                ...state,
                isLoggedIn: false,
                username: "User Not Logged In",

            }
        case 'signInWithoutUser':
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload
            }


        default:
            return state;
    }
}