const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "ADOPTION":
      return {
        ...state,
        user: {
          ...state.user,
          adoptions: [...state?.user?.adoptions, action.payload],
        },
      };
    case "UNADOPTION":
      return {
        ...state,
        user: {
          ...state.user,
          adoptions: state?.user?.adoptions.filter(
            (following) => following !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
