import {useState} from "react"
import {DefaultRootState, useDispatch,useSelector} from "react-redux"
import SubComp from "./subComp"
import {addData,subData} from "../store/actions/test"

interface Props{

}

interface Extendedstate extends DefaultRootState {
    test: {
        counter: number;
    };
}

const MainCom : React.FC <Props> = (props) =>{
    const dispatch = useDispatch()
    const [textValued,setTextValue]=useState<string>();
    //@ user selector
    const state: any = useSelector((state: Extendedstate)=>state.test)
    const counterPlus =()=>{
    //@ dispatch method
        dispatch(addData())
    }
    const textValue=(e :any)=>{
        setTextValue(e.target.value)
        
    }
    const counterMinus = () =>{
       dispatch(subData())
    }
    return(<div>Main Comp {textValued} <input type="text" onChange={(e)=>{textValue(e)}} /> <SubComp counter={state.counter} counterMinus={counterMinus} counterPlus={counterPlus}/> </div>)
}
export default MainCom