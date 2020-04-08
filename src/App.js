import React from 'react';
import {Home} from "./pages/Home";
import {Navbar} from "./componnets/Navbar";
import {Alert} from "./componnets/Alert";
import {AlertState} from "./context/alert/AlertState";
import {FirebaseState} from "./context/firebase/FirebaseState";

function App() {
    return (
        <FirebaseState>
            <AlertState>

                    <Navbar/>
                    <div className="container pt-4">
                        <Alert/>
                        <Home />
                    </div>

            </AlertState>
        </FirebaseState>
    );
}

export default App;
