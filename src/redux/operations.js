import axios from "axios";
import { fetchingError, fetchingInProgress, fetchingSuccess } from "./contactsSlice";

axios.defaults.baseURL = "https://663cfa8d17145c4d8c385d5c.mockapi.io/"

export const fetchContacts = () => async dispatch => {
    try {

        dispatch(fetchingInProgress());
        const response = await axios.get("/Contacts");
        dispatch(fetchingSuccess(response.data));
    } catch (e) {
        dispatch(fetchingError(e.message))
    }
}