import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Person from '../objects/Person';
import '../styles/Table.css';

function Table({data, funcDel, funcMod, funcNon}) {
    const [editableCell, setEditableCell] = useState('false');

    const handleDelete = (e, delIndex) => {
        funcDel(delIndex);
    };

    const handleModify = (e, index) => {
        if (editableCell === 'false') {
            setEditableCell('true');

        } else if (editableCell === 'true') {
            let table = document.getElementById('data-table');
            let tableRow = table.rows[index + 1].cells;
            let tableHeader = table.rows[0].cells;
            let newJson = {};
            for (let i = 0; i < tableRow.length - 1; i++) {
                newJson[tableHeader.item(i).innerHTML] = tableRow.item(i).innerHTML;
            }
            funcMod(newJson, index);
            setEditableCell('false');
        }
    }

    const handleClick = (e, index) => {
        funcNon(index);
    };

    return (
        (data.length > 0 ? 
        <table id="data-table" className="table-data">
            { data.length > 0 ?
            <thead>
                { data.length > 0 ?
                <tr>
                    { data.length > 0 ?
                        Object.keys(data[0]).map((key) => {
                            return (
                                <th key={key}>
                                    {key}
                                </th>
                            )
                        })  
                        :
                        ""
                    }
                    <th>
                        Operations   
                    </th>
                </tr> : ""
                }
            </thead> : ""
            }
            { data.length > 0 ?
            <tbody>
                {
                    data.length > 0 ?
                    data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                {
                                    Object.keys(item).map((el) => {
                                        return (
                                            <td key={el} contentEditable={el === 'id' || el === 'nonClicks' ? 'false' : editableCell} suppressContentEditableWarning={true} onClick={(e) => handleClick(e, index)}>
                                                {item[el]}
                                            </td>
                                        )
                                    })  
                                    
                                }
                                
                                <td>
                                    {/* <input type="button" value="Click" onClick={(e) => handleClick(e, index)}/> */}
                                    {" "}
                                    <input type="button" value={editableCell === 'false' ? "Modify" : "Save"} onClick={(e) => handleModify(e, index)}/>
                                    {" "}
                                    <input type="button" value="Delete" onClick={(e) => handleDelete(e, index)}/>
                                </td>
                                  
                            </tr>
                        )
                    })
                    : ""
                }
            </tbody> : ""
            }
        </table> : "")
    );
}

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.instanceOf(Person)),
    funcDel: PropTypes.func,
    funcMod: PropTypes.func,
    funcNon: PropTypes.func
    // data: PropTypes.array
};

export default Table;