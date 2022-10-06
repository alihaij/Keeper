import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App() {
    return <div>
        <Nav />
        {notes.map((noteItems) =>
            <Note title={noteItems.titile}
                content={noteItems.content}
                key={noteItems.key}
            />
        )};
        <Footer />

    </div>
}

export default App;