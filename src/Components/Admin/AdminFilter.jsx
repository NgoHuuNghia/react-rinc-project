import React from 'react'

const AdminFilter = () => {
  return (
    <div className='filter-controls'>
        <div>
            <h4>New releases</h4>
            <label htmlFor='hot-month'>
                <input id='hot-month' type="radio" name='hotness' value='hotMonth'/>
                <span>Hot this month</span>
            </label>
            <label htmlFor='hot-week'>
                <input id='hot-week' type="radio" name='hotness' value='hotWeek'/>
                <span>Hot this week</span>
            </label>
        </div>
        <div>
            <h4>Sortings</h4>
            <label htmlFor='sort-name'>
                <input id='sort-name' type="checkbox" name='sortingOrdering' value='sortName'/>
                <span>Name</span>
            </label>
            <label htmlFor='sort-releash'>
                <input id='sort-releash' type="checkbox" name='sortingOrdering' value='sortReleash'/>
                <span>Releash date</span>
            </label>
            <label htmlFor='sort-ratings'>
                <input id='sort-ratings' type="checkbox" name='sortingOrdering' value='sortRatings'/>
                <span>Ratings</span>
            </label>
            <label htmlFor='sort-metacritic'>
                <input id='sort-metacritic' type="checkbox" name='sortingOrdering' value='sortMetacritic'/>
                <span>Metacritic</span>
            </label>
        </div>
        <div>
        <h4>Platforms</h4>
            <label htmlFor='sort-pc'>
                <input id='sort-pc' type="radio" name='sortPlatforms' value='sortPc'/>
                <span>Desktop/PC</span>
            </label>
            <label htmlFor='sort-playstation'>
                <input id='sort-playstation' type="radio" name='sortPlatforms' value='sortPlaystation'/>
                <span>Playstation</span>
            </label>
            <label htmlFor='sort-xbox'>
                <input id='sort-xbox' type="radio" name='sortPlatforms' value='sortXbox'/>
                <span>Xbox</span>
            </label>
            <label htmlFor='sort-switch'>
                <input id='sort-switch' type="radio" name='sortPlatforms' value='sortSwitch'/>
                <span>Nintendo Switch</span>
            </label>
        </div>
    </div>
  )
}

export default AdminFilter