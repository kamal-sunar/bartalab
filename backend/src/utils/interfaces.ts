import { Document } from "mongoose";

namespace interfaces {
    export interface friend {
        id          : string,
        name        : string,
        email       : string,
    }

    export interface friend_requests {
        from        : {id: string, name: string},
        to          : {id: string, name: string},
        accepted    : boolean
    }

    export interface user {
        name        : string,
        email       : string,
        birthdate   : string,
        gender      : string,
        password    : string,
        friends     : [],
    }

    export interface user_document extends Document, user {}

    export interface text {
        value       : string,
        date        : string,
        sender      : string, // sender id
    }

    export interface chat {
        texts       : text[]
    }

    export interface chat_document extends Document, chat {}
}

export default interfaces;