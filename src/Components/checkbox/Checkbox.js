import React,{useState , useContext} from 'react';
import {ImCheckmark} from 'react-icons/im';
import Context from '../Context/Context';
import './Checkbox.scss';

let checkedlist = [];


const Checkbox = ({bg , lable}) => {
    const [check, setCheck] = useState(false);

    const { changeState } = useContext(Context);

    const checkHandler = (_lable) => {
        changeState(checkedlist);
        if(check){
            setCheck(false)
            for (let i = 0; i < checkedlist.length; i++) {
                const value = checkedlist[i];
                if(value === _lable){
                    checkedlist.splice(i, 1)
                }
            }
        }else{
            setCheck(true)
            checkedlist.push(_lable)
        }

    };

  return (
    <div onClick={()=> checkHandler(lable)} className='checkbox'>
        <div style={{backgroundColor : `${check ? bg : "transparent"}`}} className="box"><ImCheckmark /></div>
        <h1 value={lable} className="lable">{lable}</h1>
    </div>
  )
}

export default Checkbox