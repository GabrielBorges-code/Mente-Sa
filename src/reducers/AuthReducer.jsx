const AuthReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN": {
            return {
                currentUser: action.payload,
                role: action.RoleAttr,
                formCompleted: action.formAttr,
            }
        }
        case "LOGOUT": {
            return {
                currentUser: null,
            }
        }
        default:
            return state
    }
}

export default AuthReducer