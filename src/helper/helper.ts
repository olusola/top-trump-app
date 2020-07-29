import { CardType } from "./constants"

export const getRandomItem = (arr: any) => arr[Math.floor(Math.random() * arr.length)]

export const getRandomCard = (data: { allStarships: any }) => {
        let cardData
        if (data && data.allStarships) {
                const arr = data && data.allStarships
                cardData = getRandomItem(arr)
        }
        return cardData
}

export const getNrandomCards = (n: number, data: any) => {
        const nCards = Array.from({ length: n }, () => getRandomCard(data))
        return nCards
}

export const compareHeight = (selectedCards: CardType[]) => {
        const sortedCards = [...selectedCards].sort((a, b) => b.crew - a.crew)
        const highestCard = sortedCards[0]
        const winners = sortedCards.filter((card: CardType) => card.crew === highestCard.crew)

        return winners
}

export const compareHyperDrive = (selectedCards: CardType[]) => {
        const sortedCards = [...selectedCards].sort((a, b) => b.hyperdriveRating - a.hyperdriveRating)
        const highestCard = sortedCards[0]
        const winners = sortedCards.filter((card: CardType) => card.hyperdriveRating === highestCard.hyperdriveRating)

        return winners
}