import React, {useState} from 'react';
import '../styles/Register.css';

function Register() {
    const [formName, setFormName] = useState("");
    const [stateSmall, setStateSmall] = useState("");

    const addUser = (e) => {
        if (formName === "") {
            setStateSmall("empty");
        } else {
            
        }
    }

    return  (
        <div className="register">
            <div className="form">
                <span>
                    <label htmlFor="form-name">Nume de utilizator </label>
                    <input type="text" name="form-name" aria-describedby="form-name-help" value={formName} onChange={(e) => {setFormName(e.target.value); setStateSmall("")}}/>
                    {
                        stateSmall === "error" ? <small id="form-name-help">Nume de utilizator existent.</small> : stateSmall === "empty" ? <small id="form-name-help">Introdu un nume de utilizator.</small> : ""
                    }
                </span>
                <span>
                    <input type="button" value="Add user" onClick={(e) => addUser(e)}/>
                </span>
            </div>
        </div>
    )
};

export default Register;