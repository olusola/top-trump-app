import React from 'react'
import { mount } from 'enzyme'
import { act } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/client/testing'
import { GET_STARSHIPS } from '../../graphql/queries'

import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../styles/style'
import  GameContainer from './GameContainer'

describe('GameContainer', () => {
    let wrapper: any
    let setHistoryTypeSpy: any
    const mocks = [
        {
        request: {
            query: GET_STARSHIPS,
        },
        result: {
            data: {
                allStarships: [
                    {
                        id:1,
                        name: 'demo',
                        crew: 3,
                        passengers: 2,
                        length: 2,
                        hyperdriveRating: 5
                    }
                ]
            },
            },
        },
    ]

    beforeEach (async () => {
        setHistoryTypeSpy = jest.fn()

        const renderProps = {
            setHistory: setHistoryTypeSpy
        }

        wrapper  = mount(
            <ThemeProvider theme={lightTheme}>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <GameContainer {...renderProps}/> 
                </MockedProvider>
            </ThemeProvider> 
        )
        await act(()=> new Promise(resolve => setTimeout(resolve, 0)))
    })

    it('should render container with required wrappers ', async () => {
        expect(wrapper.find('section').length).toBe(1)
    })

    it('should display 2 random cards when gametype is selected', async () => {
        expect(wrapper.find('StyledCard').length).toBe(0)
        wrapper.find('Button').at(0).simulate('click')
        expect(wrapper.find('StyledCard').length).toBe(2)
    })
})