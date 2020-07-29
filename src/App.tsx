import React, { FC, useState, useCallback } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/style'
import Button from './shared/Button/Button'
import GameContainer from './containers/Game/GameContainer'
import { useHistory } from 'react-router-dom'

const AppWrapper = styled.div`
  background-color: ${props => props.theme.background.primary};
  height: 100vh;
`

const App: FC<{}> = () => {
  const history = useHistory()
  const [theme, setTheme] = useState<string>('light')
  const [currentPlays, setCurrentPlay] = useState<object[]>([])
  const switchTheme = () => {
    if (theme === 'light'){
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const getHistory = useCallback((current:any) => {
    setCurrentPlay((previousPlays) => ([...previousPlays, current]))

  }, [setCurrentPlay])

  const goToHistory = () => {
    history.push({
      pathname: '/history',
      state: {currentPlays}
    })
  }

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <AppWrapper>
          <div className="container">
            <div className="d-flex justify-content-between">
              <Button label="switch theme" handleClick={switchTheme}/>
              <Button label="history" handleClick={goToHistory}/>
            </div>
            <GameContainer setHistory={getHistory}/>
          </div>
        </AppWrapper>
      </ThemeProvider>
  );
}

export default App
