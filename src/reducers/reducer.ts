import { GET_SERVICES_FETCH, GET_SERVICES_SUCCESS } from "../actions/actions";

const fetchServices = (state = { services: [] }, action: any) => {
  switch (action.type) {
    // case GET_SERVICES_FETCH:
    //   return {};

    case GET_SERVICES_FETCH:
      return { ...state, loading: true };
    case GET_SERVICES_SUCCESS:
      return { ...state, services: action.services, loading: false };
    default:
      return state;
  }
};

export default fetchServices;
