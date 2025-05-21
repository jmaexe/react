import { useState } from "react";
import { PaginationDemo } from "./PaginationDemo";

type PaginationContainerProps = {
  pages: number;
  onPageChange: (page: number) => void;
};
const PaginationContainer = ({
  pages,
  onPageChange,
}: PaginationContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= pages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };
  return (
    <PaginationDemo
      pages={pages}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export default PaginationContainer;
