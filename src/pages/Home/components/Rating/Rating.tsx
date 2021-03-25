import React from 'react';
import Star from './Star/Star';

type Props = {
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    isActive: boolean;
    currentRating: number;
    setCurrentRating: React.Dispatch<React.SetStateAction<number>>;
};

const Rating = ( {currentRating, isActive, setActive, setCurrentRating}: Props ) => {

    const onStarClickHandler = (index: number, rating: number) => {
        setCurrentRating(rating);
        setActive(!isActive || currentRating !== rating);
    };
    
    return (
        <>
            <div className="flex flex-row">
                {
                    [...Array(5)].map((star, i) => {
                        const individualRating = i * 2 + 2;
                        return (
                            <div className="w-full cursor-pointer" key={i} >
                                <Star 
                                            
                                            fillColor={'#F59E0B'} 
                                            isActive={ isActive && currentRating >= individualRating } 
                                            index={ i }
                                            rating={ individualRating }
                                            changeRatingHandler={onStarClickHandler}
                                        />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};

export default Rating;

