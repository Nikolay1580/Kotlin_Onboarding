package jetbrains.kotlin.course.card.trainer.card

import jetbrains.kotlin.course.card.trainer.util.countries
import org.springframework.stereotype.Service


@Service
class CardService {


    //var cards =  generateNewCardsSequence(randomCardGenerator.generateCards().first())

    fun getNextCard(): Card {
        require (cards.isNotEmpty()) { "Cards are empty" }

        return cards.removeAt(0)
    }


    fun generateCards(): List<Card>  {
        val result = mutableListOf<Card>()

        for ((key, value) in countries) {
            result.add(Card(Front(key), Back(value)))
        }

        return result.shuffled()
    }

    fun startNewGame(): Card {
        cards = generateNewCardsSequence()
        return getNextCard()
    }




    companion object {
        val randomCardGenerator = CardSequenceGenerator {
            generateCards()
        }
        var cards: MutableList<Card> = generateNewCardsSequence()

        fun generateCards(): List<Card>  {
            val result = mutableListOf<Card>()

            for ((key, value) in countries) {
                result.add(Card(Front(key), Back(value)))
            }

            return result.shuffled()
        }


        private fun generateNewCardsSequence(): MutableList<Card> {
            return generateCards().toMutableList()
        }

    }

}
