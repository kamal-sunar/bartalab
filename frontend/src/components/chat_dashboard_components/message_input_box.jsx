import toggler from "../../assets/toggler.svg"
import { useState } from "react";


const Message_input_box = () => {
    const [arrow_direction, set_arrow_direction] = useState(true) // true = left
    const toggle = () => {
        set_arrow_direction(!arrow_direction)
    }
    return (
        <>
        <div className="Message_input_box bg-stone-800 w-full h-12 flex justify-center items-center">
            <div className="flex justify-center items-center h-11 w-full ">
                <div className="list_toggler border-t-2 border-b-2 border-r-2 border-blue-500 bg-blue-300 cursor-pointer hover:bg-blue-500 flex items-center justify-center" style={{padding: "2px"}}>
                    <button className=" cursor-pointer" onClick={toggle}>
                        <img className={`w-6 p-1 transform transition-transform duration-300 ${arrow_direction ? "-scale-x-100" : ""}`}src={toggler} alt="" />
                    </button>
                </div>
                <div className="input_box w-full">
                    <input type="text" className="w-full border-2 border-green-500 h-11" placeholder="Enter your message" style={{margin: "4px"}}/>
                </div>
                <div className="send_button bg-blue-500 h-9 w-20 flex items-center justify-center rounded-lg" style={{margin: "4px", padding: "2px"}}>
                    <button className="cursor-pointer text-3xl font-bold">
                        Send
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Message_input_box;