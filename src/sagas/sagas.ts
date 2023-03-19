import { takeEvery, call, put } from "redux-saga/effects";
import { GET_SERVICES_FETCH } from "../actions/actions";

function servicesFetch() {
  return fetch("https://admin.naxa.com.np/api/services").then((response) =>
    response.json()
  );
}

function* workGetServicesFetch(): any {
  const services: any = yield call(servicesFetch);
  yield put({ type: "GET_SERVICES_SUCCESS", services });
}

function* mySaga() {
  yield takeEvery(GET_SERVICES_FETCH, workGetServicesFetch);
}

export default mySaga;
