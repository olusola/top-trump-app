import React, { FC } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import HistoryContainer from './containers/History/HistoryContainer'
import App from './App'

const Router: FC<{}> = (history) => {
    return (
        <BrowserRouter>
            <Route path="/" component={App} exact setHistory={history}/>
            <Route path="/history" component={HistoryContainer} exact/>
        </BrowserRouter>
    )
}

export default Router
