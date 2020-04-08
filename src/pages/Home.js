import React, {useContext, useEffect} from "react";
import {Form} from "../componnets/Form";
import {Notes} from "../componnets/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../componnets/Loader";


export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);


    useEffect(()=> {
        fetchNotes()
        // eslint-disable-next-line
    }, []);

    return (
        <React.Fragment>
            <Form/>
            <hr/>
            {
                loading
                ? <Loader/>
                : <Notes notes={notes} onRemove={removeNote}/>
            }

        </React.Fragment>
    )
};
