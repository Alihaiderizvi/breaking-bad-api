import React from 'react'

const Pagination = ({ItemsPerPage, totalItems, paginate}) => {
    const itemNumbers = [];

    for (let i = 0; i < Math.ceil(totalItems/ItemsPerPage); i++) {
        itemNumbers.push(i)
    }
    return (
        <div className='pagination'>
            <nav>
                <ul>
                    {itemNumbers.map((number)=>(
                        <li className='page-item' key={number}>
                            <a onClick={()=> paginate(number)} href="!#" className="page-link"></a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
