export const COLUMNS = [
    {
        label: 'WID',
        accessor: 'wid'
    },
    {
        label: 'Name',
        accessor: 'name'
    },
    {
        label: 'Role',
        accessor: 'role'
    },
    {
        label: 'YoB',
        accessor: 'year'
    },
 
    {
        label: 'Phone',
        accessor: 'phone'
    },

    { accessor: 'active', label: 'Active', format: (value) => (value ? '✔️' : '✖️') },
    {
        label: 'View',
        accessor: 'view'
    },
];