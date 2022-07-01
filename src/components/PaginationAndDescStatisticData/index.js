import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./PaginationAndDescStatisticData.module.css";


const PaginationAndDescStatisticData = ({ showingFrom, showingTo, amountAllEntries, pageCount, handlePagination }) => {
  return (
    <div className="flex justify-between mt-[24px]">
      <div className="text-sm text-[#070723]">Showing { showingFrom } to { showingTo } of { amountAllEntries } entries</div>
      <ReactPaginate
        nextLabel="Next"
        onPageChange={(e) => {
          handlePagination(e);
        }}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="Previous"
        pageClassName={styles.pageItem}
        previousClassName={styles.pageItem}
        nextClassName={styles.pageItem}
        breakClassName={styles.pageItem}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default PaginationAndDescStatisticData;
