import React from 'react';
import PropTypes from 'prop-types';
import Person from '../objects/Person';
import '../styles/Table.css';

function Table({data}) {
    return (
        <table className="table-data">
            <thead>
                <tr>
                    {
                        Object.keys(data[0]).map((key) => {
                            return (
                                <th key={key}>
                                    {key}
                                </th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map(item => {
                        return (
                            <tr key={item.id}>
                                {
                                    Object.keys(item).map((el) => {
                                        return (
                                            <td key={el}>
                                                {item[el]}
                                            </td>
                                        )
                                    })    
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.instanceOf(Person))
};

export default Table;