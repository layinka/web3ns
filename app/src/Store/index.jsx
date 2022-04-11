import { createStore } from 'redux';

const ADD_ACCOUNT = 'ADD_ACCOUNT';
export function addAccount(account) {
    return {
        type: ADD_ACCOUNT,
        account
    }
}

const ADD_DOMAIN_RECORD = 'ADD_DOMAIN_RECORD';
export function addDomainRecord(record) {
    return {
        type: ADD_DOMAIN_RECORD,
        record
    }
}

const UPDATE_DOMAIN_RECORD = 'UPDATE_DOMAIN_RECORD';
export function updateDomainRecord(record) {
    return {
        type: UPDATE_DOMAIN_RECORD,
        record
    }
}

const initialState = {
    account: "",
    record: {
        label: "",
        registrant: "0x0000000000000000000000000000000000000000",
        controller: "0x0000000000000000000000000000000000000000",
        registrationDate: "Janurary 30 2022",
        expiry: "Janurary 30 2025",
        records: {
            ethAddress: '0x0000000000000000000000000000000000000000',
            email: "",
            url: "",
            discord: "",
            description: "",
            avatar: ""
        }
    }
};

function accountReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ACCOUNT: {
            return {
                ...state,
                account: action.account
            }
        }
        case ADD_DOMAIN_RECORD: {
            return {
                ...state,
                record: action.record
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

/* MARK: For use with multiple reducers,

const rootReducer = combineReducers({
    accounts: accountReducer
}); */

const gStore = createStore(accountReducer);

export default gStore;