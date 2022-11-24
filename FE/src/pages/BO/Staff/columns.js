export const COLUMNS = [
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

    { accessor: 'active', Header: 'Active', format: (value) => (value ? '✔️' : '✖️') },
    {
        Header: 'View',
        accessor: 'view'
    },
];