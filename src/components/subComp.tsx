//@ interface props
interface Props{
counterPlus:()=>void
counterMinus:()=>void
counter:number
}
//@ functional component 
const subComp : React.FC<Props> = (props)=>{
    const {counterPlus,counterMinus,counter}= props
    return (<div>Sub Call {counter} <br/><br/><input type="button" value="Counter +" onClick={counterPlus}/><input type="button" value="Counter -" onClick={counterMinus}/></div>)
}
export default subComp