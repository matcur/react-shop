export const usePageSelected = (
  setCurrentPage: (page: number) => void, 
  setIsLoaded: (value: boolean) => void
) => {
  return (page: number) => {
    setIsLoaded(false)
  }
}
