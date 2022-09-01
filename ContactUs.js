import React, {useState} from "react";

const ContactUs = () => {
        const [name, setName] = useState([]);

    function fetchMoviesHandler() {
        fetch('https://swapi.dev/api/people/1/').then(response => {
            response.json();
        }).then((data) => {
            setName(data.films);
        });
    }
    return (
    <div>
        <form>
            Name:<input type="text"/><br/>
            Email-Id:<input/><br/>
            Phone no:<input type="number"/><br/>
            <button onClick={fetchMoviesHandler}>submit</button>
        </form>
    </div>
        
    )
};
export default ContactUs;