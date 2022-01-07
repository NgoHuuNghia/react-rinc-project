import React from 'react'

const DetailAgeRating = ({esrb_rating, ass}) => {
    const returnAgeRating = () => {
        if(esrb_rating == null) return 'There is no age rating yet'
        if(esrb_rating.slug === 'adults-only') return esrb_rating.name + ' 18+'
        if(esrb_rating.slug === 'mature') return esrb_rating.name + ' 17+'
        if(esrb_rating.slug === 'teen') return esrb_rating.name + ' 13+'
        if(esrb_rating.slug === 'everyone-10-plus') return esrb_rating.name
    }
    return (
        <p>{returnAgeRating()}</p>
    )
}

export default DetailAgeRating
