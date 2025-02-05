import { Document } from "mongoose";

namespace interfaces {
    export interface friend {
        id          : string,
        name        : string,
        email       : string,
        chatid      : string, // "requester_id+requested_id in any order"
    }

    export interface friend_requests {
        from        : friend,
        to          : friend,
        accepted    : boolean
    }

    export interface user {
        name        : string,
        email       : string,
        birthdate   : string,
        gender      : string,
        password    : string,
        friends     : friend[],
        requests    : friend_requests[]
    }

    export interface user_document extends Document, user {}

    export interface text {
        value       : string,
        date        : string,
        sender      : string, // sender id
        receiver    : string,
        read        : boolean,
    }

    export interface chat {
        texts       : text[],
        chatid      : string,
    }

    export interface chat_document extends Document, chat {}
}

export default interfaces;