import * as types from './constants'
import {alertConstant} from './alert.constant'

const initialState = [{
    policy_title: '',
    policy_description: ''
}]

export default function Policy (state= initialState, action){
    switch(action.type){
        case types.ADD_POLICY:
        return [
            ...state,
            {
                policy_title: action.policy_title,
                policy_description: action.policy_description
            }
        ];
        // case types.DELETE_POLICY:
        // return [

        // ]
    }
}  