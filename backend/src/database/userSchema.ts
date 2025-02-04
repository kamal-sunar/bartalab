import mongoose, {Schema} from "mongoose";
import interfaces from "../utils/interfaces";

const userSchema: Schema = new Schema({
    name:       {type: String, required: true},
    email:      {type: String, required: true},
    birthdate:  {type: String, required: true},
    gender:     {type: String, required: true},
    password:   {type: String, required: true},
    friends:    {type: [],   default : []},
    requests:   {type: [],   default : []},
}, {
    timestamps: true,
})

export default mongoose.model<interfaces.user_document>("User", userSchema);