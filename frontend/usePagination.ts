import { useState } from "react";

export default function usePagination() {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(prev => prev + 1);
  };

  const resetPage = () => {
    setPage(1);
  };

  return { page, nextPage, resetPage };
}
