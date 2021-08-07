import React, {useState} from 'react';
import Table from '../components/Table';
import Person from '../objects/Person';
import '../styles/Home.css';

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

    // const addUser = (e) => {
    //     return Emitter.on('INPUT_FROM_MAIN', () => {
    //         return '/adduser';
    //     });
    // };

    return (
        <div className="home">
            <input type="text" name="name" className="input-filter" value={search} onChange={(e) => setSearch(e.target.value)}/>
            {/* <input type="button" name="add" className="input-add-user" value="Add user" onClick={(e) => addUser(e)}/> */}
            <Table data={filterOpt()}/>
        </div>
    );
}

export default Home;