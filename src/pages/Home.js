import React, {useState, useEffect} from 'react';
import Table from '../components/Table';
import Person from '../objects/Person';
import '../styles/Home.css';
import { Link } from "react-router-dom";
import { deleteUser, getUsers, modifyUser } from '../services/users.service';
import { modifyClicks } from '../services/nonclicks.service';

function Home() {
    const [search, setSearch] = useState("");
    const [persons, setPersons] = useState([]);
    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        getUsers().then(response => {
            let list = [];
            if (response.code === 200) {
                if (response.data !== "") {
                    Toast("Users have been successfully uploaded !");
                    response.data.forEach(item => {
                        list.push(new Person(item.id, item.name, item.nonClicks));
                    });
                }
            } else {
                Toast("Users were not successfully uploaded !");
            }
            setPersons(list);
        }).catch(error => {

        });
    }, []);

    const filterOpt = () => {
        if (persons !== undefined && persons !== null) {
            if (search === "")
            return persons;

            let findElem = persons.filter(elem => {
                return elem.name.toLowerCase().includes(search.toLowerCase());
            });
            return findElem;
        } else {
            return [];
        }
    };

    const deleteRow = (index) => {
       let list = persons.slice();
       deleteUser(list[index].id).then(response => {
           if (response.code === 200) {
               Toast("User successfully deleted !");
                list.splice(index, 1);
                setPersons(list); 
           } else {
               Toast("The user could not be deleted !");
           }
       }).catch(error => {

       });
    }

    const modifyRow = (newElem, index) => {
        let list = persons.slice();
        newElem.id = parseInt(newElem.id);
        modifyUser(newElem).then(response => {
            if (response.code === 200) {
                list.splice(index, 1, new Person(newElem.id, newElem.name, newElem.nonClicks));
                Toast("The changes have been made !");
                setPersons(list);
               
            } else {
                Toast("The changes have not been made !");
                let id = setInterval(reload, 2000);
                function reload() {
                    window.location.reload();
                    clearInterval(id);
                }
            }
        }).catch(error => {

        });
    };

    const NonClicks = (index) => {
        let list = persons.slice();
        list.forEach((item, indexElem) => {
            if (indexElem !== index) {
                item['nonClicks'] += 1;
                modifyClicks(item).then(response => {
                    
                }).catch(error => {

                });
            } else {
                Toast("Non clicks performed !");
            }
        });
        setPersons(list);
    }

    const Toast = (message) => {
        setToastMessage(message);
    };

    return (
        <div className="home">
            <div className="container">
                <input type="text" name="name" className="input-filter" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <Link to="/adduser" className="adduser-btn">Register</Link>
                {toastMessage !== '' ? <p>{toastMessage}</p> : ""}
                <Table data={filterOpt()} funcDel={deleteRow} funcMod={modifyRow} funcNon={NonClicks}/>
            </div>
        </div>
    );
}

export default Home;