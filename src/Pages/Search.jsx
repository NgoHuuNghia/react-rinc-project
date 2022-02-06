import React, {useEffect, useState, useRef} from 'react'
import { useGlobalContext } from '../context'
import { FaChevronDown } from 'react-icons/fa'
import SearchesComponents from '../Components/Search/SearchesComponents'

const Search = () => {
    const {searches: {searchFilteredList, searchCount}} = useGlobalContext()
    const [firstSearchesColumn, setFirstSearchesColumn] = useState([])
    const [secondSearchesColumn, setSecondSearchesColumn] = useState([])
    const [thirdSearchesColumn, setThirdSearchesColumn] = useState([])
    const [fourthSearchesColumn, setFourthSearchesColumn] = useState([])

    //const formContainer = useRef(null)

    
    //? find way to loop the from's children
    //? look at last session tabs
    
    //! make the mobile menu button an all searching tool 

    useEffect(() => {
        let firstFilter = 0, firstSearchesColumn = searchFilteredList.filter((item, index) => {if(index === firstFilter) return item, firstFilter = firstFilter + 4})
        setFirstSearchesColumn(firstSearchesColumn)
        let secondFilter = 1, secondSearchesColumn = searchFilteredList.filter((item, index) => {if(index === secondFilter) return item, secondFilter = secondFilter + 4})
        setSecondSearchesColumn(secondSearchesColumn)
        let thirdFilter = 2, thirdSearchesColumn = searchFilteredList.filter((item, index) => {if(index === thirdFilter) return item, thirdFilter = thirdFilter + 4})
        setThirdSearchesColumn(thirdSearchesColumn)
        let fourthFilter = 3, fourthSearchesColumn = searchFilteredList.filter((item, index) => {if(index === fourthFilter) return item, fourthFilter = fourthFilter + 4})
        setFourthSearchesColumn(fourthSearchesColumn)
    }, [searchFilteredList])


    return (
        <section className='search-container'>
            <div className='primary-search'>
                <div className='main-search'>
                    <div className='heading-search'>
                        <p>{searchCount ? `Found ${searchCount} games` : `Loading`}...</p>
                    </div>
                    <div className="basic-filter-search">
                        <button>
                            Order by: <span>{'Popularity'}</span> <FaChevronDown />
                        </button>
                        <button>
                            {'Releashed date'} <FaChevronDown />
                        </button>
                        <button>
                            {'Platform'} <FaChevronDown />
                        </button>
                    </div>
                    <div className='scrollable-search'>
                        <div className='mobile-results-search'>
                            {searchFilteredList.map((item) => <SearchesComponents key={item.id} {...item}/>)}
                        </div>
                        <div className='desktop-results-search'>
                            {firstSearchesColumn.map((item) => <SearchesComponents key={item.id} {...item}/>)}
                        </div>
                        <div className='desktop-results-search'>
                            {secondSearchesColumn.map((item) => <SearchesComponents key={item.id} {...item}/>)}
                        </div>
                        <div className='desktop-results-search'>
                            {thirdSearchesColumn.map((item) => <SearchesComponents key={item.id} {...item}/>)}
                        </div>
                        <div className='desktop-results-search'>
                            {fourthSearchesColumn.map((item) => <SearchesComponents key={item.id} {...item}/>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondary-filter">
                <form>
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
                </form>
            </div>
        </section>
    )
}

export default Search
