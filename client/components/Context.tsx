import React,{useState,useMemo} from 'react';
interface Istate{
    login:string
}
interface IAction{
    type:string,
    payload:any
}
const initialState:Istate ={
    login:''
}
export const AuthContext = React.createContext<Istate|any>(initialState);
function reducer(state:Istate,action:IAction){
    switch(action.type){
        case 'LOGIN_REQUEST':
            return {...state,login:action.payload}
        default: return state
    }
}
export function AuthProvider(props:any):JSX.Element{
    const [state,dispatch] = React.useReducer(reducer,initialState);
    return <AuthContext.Provider value={{state,dispatch}}>
        {props.children}
    </AuthContext.Provider>
}