import React, { useState, useEffect, useCallback } from "react";
import { useTable, useGlobalFilter, useSortBy, usePagination   } from 'react-table';
import { Filter } from './Filter';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css'
export const Table = (props) => {
    const columns = props.columns;
    const data = props.data;
// export default function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 2, pageSize: 10 },
        // manualPagination: true,
        // manualSortBy: true,
        // autoResetPage: false,
        // autoResetSortBy: false,
        // pageCount: controlledPageCount,
    }, useGlobalFilter, useSortBy,usePagination)

    const { globalFilter } = state;
    // useEffect(() => {
    //     onSort({ sortBy, pageIndex, pageSize });
    //     fetchData({ pageIndex, pageSize });
    //   }, [onSort, sortBy, fetchData, pageIndex, pageSize]);
    

return (
    <div>
        <Filter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}
                            <span>
                                        {column.isSorted
                                             ? column.isSortedDesc
                                                 ? ' 🔽'
                                                 : ' 🔼'
                                             : ''}
                          </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        {/* 
    Pagination can be built however you'd like. 
    This is just a very basic UI implementation:
  */}
        <ul className="pagination" >
            <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                <a className="page-link">First</a>
            </li>
            <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                <a className="page-link">{'<'}</a>
            </li>
            <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                <a className="page-link">{'>'}</a>
            </li>
            <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                <a className="page-link">Last</a>
            </li>
            <li>
                <a className="page-link">
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </a>
            </li>
            {/* <li>
                <a className="page-link">
                    <input
                        className="form-control"
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px', height: '20px' }}
                    />
                </a>
            </li>{' '} */}
            {/* <select
                className="form-control"
                value={pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value))
                }}
                style={{ width: '120px', height: '38px' }}
            >
                {[5, 10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select> */}
        </ul>
    </div >
)
}




