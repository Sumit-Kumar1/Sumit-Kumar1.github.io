import {BsSun} from 'react-icons/bs';
import {MdDarkMode} from "react-icons/all";

export default function SwitchTheme() {
     let flag = true;
    let a = (flag == true ? <button className={"relative"}><BsSun/> </button>: <button><MdDarkMode/></button>)
    return(
        a
    );
}