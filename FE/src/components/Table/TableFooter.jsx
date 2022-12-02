import React from "react";
import { Pagination } from "react-bootstrap";

const TableFooter = ({ workersPerPage, totalWorkers }) => {
  const items = [];
  let active = 2;
  const pageSize = Math.ceil(totalWorkers / workersPerPage);
  for (let i = 1; i <= pageSize; ++i) {
    items.push(
      <Pagination.Item key={i} active={i === active}>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.Prev />
      {items}
      <Pagination.Next />
    </Pagination>
  );
};

export default TableFooter;
