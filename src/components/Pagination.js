import React from 'react'

const Pagination = ({ItemsPerPage, totalItems, paginate}) => {

    const itemNumbers = [];
    for (let i = 0; i < Math.ceil(totalItems/ItemsPerPage); i++) {
        itemNumbers.push(i)
    }
    return (
        <div className='pagination'>
            <nav>
                <ul className="pagination mt-5 ">
                    {itemNumbers.map((number)=>(
                        <li className='page-item' key={number}>
                            <a onClick={()=> paginate(number)} href="!#" className="page-link">{number+1}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
