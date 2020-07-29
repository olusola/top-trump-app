import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_STARSHIPS } from '../../graphql/queries'
import { CardType } from '../../helper/constants'
import { getNrandomCards, compareHeight, compareHyperDrive } from '../../helper/helper'

import GameType from '../../components/GameType/GameType'
import Card from '../../components/Card/Card'
import Banner from '../../shared/Banner/Banner';
import Button from '../../shared/Button/Button'

interface Props {
    setHistory: (param:object) => void;
}

const GameContainer: React.FC<Props> = ({setHistory}) => {
    const { data } = useQuery(GET_STARSHIPS)
    const [selectedCards, updateSelectedCards] = useState<CardType[]>([])
    const [selectedGameType, setSelectedGameType] = useState<string>('')
    const [winner, setWinner] = useState<any>()
    const [NoOfPlayers] = useState<number>(2)

    const selectCards = () => {
        // select two items from data
        const randomCards = getNrandomCards(NoOfPlayers, data) // put N this number in state later for multiplayer
        updateSelectedCards(randomCards)
    }

    const handleSelectGameType = (val: string) => {
        setSelectedGameType(val)
        selectCards()
    }

    const handlePlayAgain = () => {
        setSelectedGameType('')
    }

    useEffect(() => {
        if (selectedGameType === '') {
            return;
        }

        const getCardWinner = () => {

            if (selectedGameType === 'player') {
                return compareHeight(selectedCards)
            }
            else if (selectedGameType === 'starship') {
                return compareHyperDrive(selectedCards)
            }

            return [];
        }

        const winners = getCardWinner(); // This could be more than 1;
        const onlyWinner = winners.length === 1 && winners  
        setWinner(onlyWinner);

        const archive = {
            winners,
            cards: [...selectedCards],
            gametype: selectedGameType
        }

        setHistory(archive)
    }, [selectedCards, selectedGameType, setHistory])

    return (
        <section>
            {
                selectedGameType === '' ? (
                    <GameType handleSelectedGameType={handleSelectGameType} />
                ) : (
                    <div>
                        <div className="d-flex justify-content-between">
                            <Banner label="comparing" value={selectedGameType === 'player' ? 'crew' : 'hyperDrive'}/>
                        </div>
                        <div className="row">
                            {
                                selectedCards.map((card: CardType, i: number) => {
                                    return (
                                        <div key={card.id+i} className="col-md col-xs-12 col-sm-6">
                                            <Card winnerData={winner} cardData={card} index={i}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button label="Play Again" handleClick={handlePlayAgain}/>
                        </div>
                    </div>
                )
            }
        </section>
    )
}
export default GameContainer