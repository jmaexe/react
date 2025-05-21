import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { GoDash } from "react-icons/go";

export function PaginationDemo({
  pages,
  currentPage,
  onPageChange,
}: {
  pages: number;
  currentPage: number;
  onPageChange: (pages: number) => void;
}) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => onPageChange(currentPage - 1)} />
        </PaginationItem>
        {Array.from({ length: pages }, (_, i) => i + 1).map((v, i) => (
          <PaginationItem>
            <PaginationLink
              to=""
              isActive={currentPage - 1 == i}
              onClick={() => onPageChange(i + 1)}
            >
              <GoDash />
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={() => onPageChange(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
