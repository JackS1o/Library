import { useState, useEffect } from 'react'
import IBook from '../interface/books'

function usePagination(data: IBook[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [currentData, setCurrentData] = useState<IBook[]>([])

  useEffect(() => {
    if (data) {
      const totalPages = Math.ceil(data.length / itemsPerPage)
      setTotalPages(totalPages)
      const startIndex = (currentPage - 1) * itemsPerPage
      const endIndex = currentPage * itemsPerPage
      setCurrentData(data.slice(startIndex, endIndex))
    }
  }, [data, itemsPerPage, currentPage])

  function goToPage(page: number) {
    setCurrentPage(page)
  }

  function goToNextPage() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages))
  }

  function goToPreviousPage() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
  }

  return {
    currentPage,
    totalPages,
    currentData,
    goToPage,
    goToNextPage,
    goToPreviousPage,
  }
}

export default usePagination
