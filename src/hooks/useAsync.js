import { useReducer,useEffect } from 'react';
//초기값
const status = {
    data:null,
    loading:false,
    error:null
}
//reducer 함수
function reducer(state,action){
    switch(action.type){
        case 'LOADING':
            return{
                data:null,
                error:null,
                loading:true,
            };
        case 'SUCCESS':
            return{
                data:action.data,
                error:null,
                loading:false,
            };
        case 'ERROR': 
            return{
                data:null,
                error:action.error,
                loading:false,
            };        
        default:
            return state;
    }
}

const useAsync = (callback,deps=[]) => {
    const [state,dispatch] = useReducer(reducer,status);
    // async aswait
    const fetchUsers = async ()=>{
        try{
            dispatch({
                type:'LOADING'
            })
            const response = await callback();
            dispatch({
                type:'SUCCESS',
                data:response.data
            })
        }
        catch(e){
            dispatch({
                type:'ERROR',
                error:e
            })
        }
    };
    useEffect(()=>{
        fetchUsers();
    },deps)
    return [state,fetchUsers]; //상태값과 fetchUsers를 돌려줌 
};

export default useAsync;