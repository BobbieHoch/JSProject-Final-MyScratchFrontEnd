import {signInWithGoogle, signOut} from "../config/firebase"
import { useContext } from "react";
import AuthContext from "../context/AuthContext"

export function Authentication(){ 
    const { user } = useContext(AuthContext)

    return( 
        <div>
            {
                user == null ?
                <button  onClick={signInWithGoogle}>Sign in with Google</button>
                :
                <button onClick={signOut}>Sign out</button>
            }
        </div>
    )
}