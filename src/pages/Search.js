import React from 'react'
import NavigationSidebar from '../components/Tuiter/NavigationSidebar'
import WhatsHappening from '../components/Tuiter/whats-happening'
import WhoToFollowList from '../components/Tuiter/WhoToFollowList'

const Search = () => {
  return (
    <div className="row mt-2">
      <div className="col-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="search"/>
      </div>
      <div className="col-8 col-lg-7 col-xl-6">
          <WhatsHappening/>
      </div>
      <div className="col-2 col-lg-4 col-xl-4">
        <WhoToFollowList />
      </div>
    </div>
  )
}

export default Search