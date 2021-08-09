import React, {useState} from 'react';
import '../styles/Register.css';
import { addUser } from '../services/users.service';

function Register() {
    const [formName, setFormName] = useState("");
    const [stateSmall, setStateSmall] = useState("");

    const handleOnClick = (e) => {
        if (formName === "") {
            setStateSmall("empty");
        } else {
            addUser({"name": formName}).then(response => {
                console.log(response);
                if (response.code === 1062) {
                    setStateSmall("error");
                } else if (response.code === 200) {
                    setStateSmall("succ");
                    setFormName("");
                }
            }).catch(error => {

            });
        }
    }

    return  (
        <div className="register">
            <div className="form">
                <span>
                    <label htmlFor="form-name">Nume de utilizator </label>
                    <input type="text" name="form-name" aria-describedby="form-name-help" value={formName} onChange={(e) => {setFormName(e.target.value); setStateSmall("")}}/>
                </span>
                <span>
                    {
                        stateSmall === "error" ? <small id="form-name-help" className="p-error">Nume de utilizator existent.</small> : stateSmall === "empty" ? <small id="form-name-help" className="p-error">Introdu un nume de utilizator.</small> : stateSmall === "succ" ? <small id="form-name-help" className="p-error">Utilizator introdus in baza de date.</small> : ""
                    }
                </span>
                <span>
                    <input type="button" value="Add user" onClick={(e) => handleOnClick(e)}/>
                </span>
            </div>
        </div>
    )
};

export default Register;