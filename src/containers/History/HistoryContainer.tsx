import React, { FC } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { LocationState } from '../../helper/constants'

const HistoryContainer: FC = () => {
    const history = useHistory()
    const location = useLocation<LocationState>()
    const gamesPlayed = location.state.currentPlays
    
    const goToHome = () => {
        history.push({
            pathname: '/'
        })
    }

    return (
        <div className="container">
            <hr/>
            <div className="d-flex justify-content-between">
                <h3>History</h3>
                <h3 onClick={goToHome}>Back</h3>
            </div>
            <hr/>
            <div>
                {
                    gamesPlayed && gamesPlayed.map(({gametype, cards, winners}, i) => (
                        <div key={i}>
                            <div className="d-flex justify-content-between">
                                {
                                    winners.length === 1 && <h6>Winner is: {winners[0].name}</h6>
                                }
                                <h6>Game type: {gametype}</h6>
                            </div>
                            <div className="row">
                                {
                                    cards.map((card, i) => (
                                        <div key={card.id + 1} className="col-md-6">
                                            <h6>Card: {i + 1}</h6>
                                            <h6>Name: {card.name}</h6>
                                            <h6>Crew: {card.crew}</h6>
                                            <h6>hyperdriveRating: {card.hyperdriveRating}</h6>
                                        </div>
                                    ))
                                }
                            </div>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HistoryContainer
