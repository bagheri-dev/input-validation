import React from "react";

interface Props {
    type : string,
    name : string,
    placeholder : string
}

const InputComponent : React.FC<Props> = ({type , name , placeholder}) => {
    return ( 
        <>
        <div className="border-b-4 border-b-gray-600 text-xl">
            <input className="outline-none w-full px-4 py-3" type={type} name={name} placeholder={placeholder} />
        </div>
        </>
     );
}
 
export default InputComponent;