import React, { FC } from 'react'
import styled from 'styled-components'
import { CardType } from '../../helper/constants'

type ItemType = {
    label: string;
    value: any;
}

interface Props {
    cardData: CardType;
    index: number;
    winnerData: CardType[];
}

const StyledCardWrapper = styled.div`
    background-color: ${props => props.theme.background.secondary};
    padding: 20px;
    border-radius: 15px;
    margin: 10px 0;

`
StyledCardWrapper.displayName = 'StyledCard'

const StyledItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`

const StyledCardItem = styled.div`
    color: ${props => props.theme.text.primary};
    font-weight: 500;
    font-size: 16px;
    text-transform: capitalize;
`

const Item: FC<ItemType> = ({label, value}) => {
    return (
        <StyledItemWrapper>
            <StyledCardItem>{label}</StyledCardItem>
            <StyledCardItem>{value}</StyledCardItem>
        </StyledItemWrapper>
    )
}

const Card: React.FC<Props> = ({cardData, index, winnerData}) => {
    const { id, name, crew, passengers, length, hyperdriveRating} = cardData
    
    return (
        <div>
            <StyledCardWrapper>
                <Item label="player" value={index+1}/>
                <Item label="name" value={name}/>
                <Item label="crew" value={crew}/>
                <Item label="passengers" value={passengers}/>
                <Item label="length" value={length}/>
                <Item label="Hyper Drive Rating" value={hyperdriveRating}/>
                {
                winnerData && winnerData[0].id === id
                ? 'Winner'
                : 'Lost'
            }
            </StyledCardWrapper>
        </div>
    )
}

export default Card
