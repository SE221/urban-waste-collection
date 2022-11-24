import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import '../../tool/tool.css'
import PageTitle from "../../../components/pageTitle/PageTitle";
import { Filter } from "./component/Filter";
import React, { useState, useEffect, useCallback } from "react";
import { useTable, useSortBy, usePagination,useGlobalFilter } from "react-table";
const data2 = [
  {
    "id": "WD-12345",
    "name": "Phan Minh Dat",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-32523",
    "name": "Phan Minh Dut",
    "role": "Janitor",
    "year": "1999",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-23532",
    "name": "Phan Minh Det",
    "role": "Collector",
    "year": "2000",
    "phone": "092545326",
    "active": "No",
    "view": "details"
  },
  {
    "id": "WD-54332",
    "name": "Le Huy",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "No",
    "view": "details"
  },
  {
    "id": "WD-54743",
    "name": "Phan Minh Dat",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-5632",
    "name": "Huynh Phut",
    "role": "Janitor",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-26334",
    "name": "La Vi Luong",
    "role": "Collector",
    "year": "2001",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-87553",
    "name": "Phan Minh",
    "role": "Janitor",
    "year": "2002",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-34533",
    "name": "Bui Hai",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "No",
    "view": "details"
  },
  {
    "id": "WD-44444",
    "name": "Ka Ka",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-12345",
    "name": "Phan Minh Dat",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-12345",
    "name": "Phan Minh Dat",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-12345",
    "name": "Phan Minh Dat",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-12345",
    "name": "Phan Minh Dat",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-12345",
    "name": "Phan Minh Dat",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-12345",
    "name": "Phan Minh Dat",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-32523",
    "name": "Phan Minh Dut",
    "role": "Janitor",
    "year": "1999",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-23532",
    "name": "Phan Minh Det",
    "role": "Collector",
    "year": "2000",
    "phone": "092545326",
    "active": "No",
    "view": "details"
  },
  {
    "id": "WD-54332",
    "name": "Le Huy",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "No",
    "view": "details"
  },
  {
    "id": "WD-54743",
    "name": "Phan Minh Dat",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-5632",
    "name": "Huynh Phut",
    "role": "Janitor",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-26334",
    "name": "La Vi Luong",
    "role": "Collector",
    "year": "2001",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-87553",
    "name": "Phan Minh",
    "role": "Janitor",
    "year": "2002",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-34533",
    "name": "Bui Hai",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "No",
    "view": "details"
  },
  {
    "id": "WD-44444",
    "name": "Ka Ka",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-12345",
    "name": "Phan Minh Dat",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-32523",
    "name": "Phan Minh Dut",
    "role": "Janitor",
    "year": "1999",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-23532",
    "name": "Phan Minh Det",
    "role": "Collector",
    "year": "2000",
    "phone": "092545326",
    "active": "No",
    "view": "details"
  },
  {
    "id": "WD-54332",
    "name": "Le Huy",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "No",
    "view": "details"
  },
  {
    "id": "WD-54743",
    "name": "Phan Minh Dat",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-5632",
    "name": "Huynh Phut",
    "role": "Janitor",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-26334",
    "name": "La Vi Luong",
    "role": "Collector",
    "year": "2001",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-87553",
    "name": "Phan Minh",
    "role": "Janitor",
    "year": "2002",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-34533",
    "name": "Bui Hai",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "No",
    "view": "details"
  },
  {
    "id": "WD-44444",
    "name": "Ka Ka",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-12345",
    "name": "Phan Minh Dat",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-32523",
    "name": "Phan Minh Dut",
    "role": "Janitor",
    "year": "1999",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-23532",
    "name": "Phan Minh Det",
    "role": "Collector",
    "year": "2000",
    "phone": "092545326",
    "active": "No",
    "view": "details"
  },
  {
    "id": "WD-54332",
    "name": "Le Huy",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "No",
    "view": "details"
  },
  {
    "id": "WD-54743",
    "name": "Phan Minh Dat",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-5632",
    "name": "Huynh Phut",
    "role": "Janitor",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-26334",
    "name": "La Vi Luong",
    "role": "Collector",
    "year": "2001",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-87553",
    "name": "Phan Minh",
    "role": "Janitor",
    "year": "2002",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
  {
    "id": "WD-34533",
    "name": "Bui Hai",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "No",
    "view": "details"
  },
  {
    "id": "WD-44444",
    "name": "Ka Ka",
    "role": "Collector",
    "year": "1990",
    "phone": "092525326",
    "active": "Yes",
    "view": "details"
  },
]
function Table({
  columns,
  data,
  onSort,
  fetchData,
  loading,
  pageCount: controlledPageCount
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, sortBy }
  } = useTable(
    {
      columns,
      data,
      manualPagination: true,
      manualSortBy: true,
      autoResetPage: false,
      autoResetSortBy: false,
      pageCount: controlledPageCount
    },
    useSortBy,
    usePagination
  );

  useEffect(() => {
    onSort({ sortBy, pageIndex, pageSize });
    fetchData({ pageIndex, pageSize });
  }, [onSort, sortBy, fetchData, pageIndex, pageSize]);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            {loading ? (
              // Use our custom loading state to show a loading indicator
              <td colSpan="10000">Loading...</td>
            ) : (
              <td colSpan="10000">
                Showing {page.length} of ~{controlledPageCount * pageSize}{" "}
                results
              </td>
            )}
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        {/* <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "} */}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

function Workers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const fetchIdRef = React.useRef(0);
  const sortIdRef = React.useRef(0);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Role',
        accessor: 'role'
      },
      {
        Header: 'YoB',
        accessor: 'year'
      },

      {
        Header: 'Phone',
        accessor: 'phone'
      },
      {
        Header: 'Active',
        accessor: 'active'
      },
      {
        Header: 'View',
        accessor: 'view'
      }
    ],
    []
  );

  const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
    // This will get called when the table needs new data
    // You could fetch your data from literally anywhere,
    // even a server. But for this example, we'll just fake it.

    // Give this fetch an ID
    const fetchId = ++fetchIdRef.current;

    // Set the loading state
    setLoading(true);

    // We'll even set a delay to simulate a server here
    setTimeout(() => {
      // Only update the data if this is the latest fetch
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        setData(data2.slice(startRow, endRow));

        // Your server could send back total page count.
        // For now we'll just fake it, too
        setPageCount(Math.ceil(data2.length / pageSize));

        setLoading(false);
      }
    }, 1000);
  }, []);

  const handleSort = useCallback(({ sortBy, pageIndex, pageSize }) => {
    // Give this sort an ID
    const sortId = ++sortIdRef.current;
    // Set the loading state
    setLoading(true);

    //simulate remove server sort
    setTimeout(() => {
      // Doing multisort
      if (sortId === sortIdRef.current) {
        let sorted = data2.slice();
        sorted.sort((a, b) => {
          for (let i = 0; i < sortBy.length; ++i) {
            if (a[sortBy[i].id] > b[sortBy[i].id])
              return sortBy[i].desc ? -1 : 1;
            if (a[sortBy[i].id] < b[sortBy[i].id])
              return sortBy[i].desc ? 1 : -1;
          }
          return 0;
        });
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        setData(sorted.slice(startRow, endRow));
        console.log(sorted.slice(0, 10));
        setLoading(false);
      }
    }, 200);
  }, []);

  return (
    
     <div className="tool">
            <Sidebar />
            <div className="toolContainer">
            <Navbar />
                <div className="content">
                    <PageTitle
                        title="Workers List"
                    />
                    <div>
                     
        <Table
      columns={columns}
      data={data}
      onSort={handleSort}
      fetchData={fetchData}
      loading={loading}
      pageCount={pageCount}
    />
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Workers;
