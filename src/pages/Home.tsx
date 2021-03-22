import React from 'react'
import { useHistory } from 'react-router'
import { Search } from '../components/common/search/Search'

export const Home: React.FC = () => {
  const history = useHistory()

  const searchProducts = (productCriteria: string) => {
    history.push(`/search/result?seach-value=${productCriteria}`)
  }

  return (
    <div>
      <Search 
        onFind={searchProducts}
        placeholder="Product name"/>
    </div>
  )
}