import React, {useState} from 'react';
import Table from '../components/Table';
import Person from '../objects/Person';
import '../styles/Home.css';
import { Link } from "react-router-dom";

function Home() {
    const [search, setSearch] = useState("");
    const persons = [
        new Person(1, 'Robert', 0),
        new Person(2, 'Ale', 0)
    ];

    const filterOpt = () => {
        if (search === "")
            return persons;

        let findElem = persons.filter(elem => {
            if (elem.name.toLowerCase().includes(search)) {
                return elem;
            }
        });
        return findElem.length === 0 || findElem === null || findElem === undefined ? persons : findElem;
    };

    return (
        <div className="home">
            <input type="text" name="name" className="input-filter" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <Link to="/adduser" className="adduser-btn">Register</Link>
            <Table data={filterOpt()}/>
        </div>
    );
}

export default Home;