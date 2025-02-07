import message from "../../assets/message.svg"
import add_friend from "../../assets/add_friend.svg"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="Navbar h-screen w-12 border-2 border-blue-700 flex flex-col justify-start items-center">
                <div className="message_icon flex justify-center  items-center" style={{margin: "8px"}}>
                    <Link to="/" className="">
                        <img className="w-8" src={message} alt="" />
                    </Link>
                </div>
                <div className="divider h-0 w-8 border-2 border-blue-700 flex justify-center items-center rounded-full">

                </div>
                <div className="add_friend_icon flex justify-center items-center" style={{margin: "8px"}}>
                    <Link to="/requests" className="">
                        <img className="w-8" src={add_friend} alt="" />
                    </Link>
                </div>
            </nav>
        </>
    )
}


export default Navbar