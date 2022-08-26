import { useDispatch, useSelector } from "react-redux"
import { changeTextField } from "./textFieldReducer";

const TextField = () =>{
    const dispatch = useDispatch();
    const input = useSelector(state=>state.textFieldReducer.text);
    

    const handleChagne = (e) =>{
        dispatch(changeTextField(e.target.value))
    }


    return(
        <>
            <input type = 'text' value = {input} onChange = {handleChagne}/>
        </>
    )
}

export default TextField;