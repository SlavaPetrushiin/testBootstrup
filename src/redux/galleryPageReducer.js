import {fetchPageApi} from "../api/fetchPage";
import {FETCH_PAGE_SUCCESS} from "./type";

const initialState = {
    components: [],
    form: {}
};

export const galleryPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PAGE_SUCCESS:
            return {
                ...state,
                components: [...action.components],
                form: {...action.form},
            };
        default:
            return state
    }
};


const fetchDataPageSuccess = (components, form) => ({
   type: FETCH_PAGE_SUCCESS,
    components, form
});


//thunk
export const fetchDataPage = () => async dispatch => {
    try{
        const {components, form} = await fetchPageApi.fetchGet();
        dispatch(fetchDataPageSuccess(components, form));
     }
    catch (e) {

    }
};