export const usePageSelected = (
  setCurrentPage: (page: number) => void, 
  setIsLoaded: (value: boolean) => void
) => {
  return (page: number) => {
    setCurrentPage(page)
    setIsLoaded(false)
  }
}
