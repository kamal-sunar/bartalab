


const Message_input_box = () => {
    return (
        <>
        <div className="Message_input_box bg-stone-800 w-full h-12 flex justify-center items-center">
            <div className="flex justify-center items-center h-11 w-full">
                <div className="input_box w-full">
                    <input type="text" className="w-full border-2 border-green-500 h-11" placeholder="Enter your message" style={{margin: "4px"}}/>
                </div>
                <div className="send_button bg-blue-500 h-9 w-20 flex items-center justify-center rounded-lg" style={{margin: "4px", padding: "2px"}}>
                    <button className=" cursor-pointe text-3xl font-bold">
                        Send
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Message_input_box;