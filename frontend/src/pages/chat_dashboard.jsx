import Search from "../components/commons/search"
import Navbar from "../components/commons/navbar"
import Chat_displayer from "../components/chat_dashboard_components/chat_displayer"
import Message_input_box from "../components/chat_dashboard_components/message_input_box"

const Chat_dashboard = () => {
    return (
        <div className="flex">
            <div className="">
                <Navbar />
            </div>
            <div className="Chat_dashboard flex w-full">
                <div className="chat_plus_friend_list">
                    <div className="search_friend">
                        <Search />
                    </div>
                    <div className="friend_list">
                    </div>
                </div>

                <div className="chat border-2 border-blue-700 w-full flex flex-col justify-between items-center">
                    <Chat_displayer />
                    <Message_input_box />
                </div>
            </div>
        </div>
    )
}

export default Chat_dashboard