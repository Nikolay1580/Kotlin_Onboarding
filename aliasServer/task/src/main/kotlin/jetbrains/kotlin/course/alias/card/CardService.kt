package jetbrains.kotlin.course.alias.card

import org.springframework.stereotype.Service
import  jetbrains.kotlin.course.alias.util.IdentifierFactory
import jetbrains.kotlin.course.alias.util.words

@Service
class CardService {

    private val identifierFactory =  IdentifierFactory()

    private val cards: List<Card> = generateCards()

    private fun generateCards(): List<Card> {
        val result = mutableListOf<Card>()
        val words = words.shuffled()
        for (i in 0 until cardsAmount) {
            val cardWords = words.subList(i * WORDS_IN_CARD, (i + 1) * WORDS_IN_CARD).toWords()
            result.add(Card(identifierFactory.uniqueIdentifier(), cardWords))
        }

        return result.toList()
    }

    private fun List<String>.toWords(): List<Word> = this.map{ Word(it) }

    fun getCardByIndex(index: Int): Card {
        try {
            return cards[index]
        } catch (e: IndexOutOfBoundsException) {
            throw IllegalArgumentException("Card with index $index not found")
        }
    }

    companion object {
        private const val WORDS_IN_CARD = 4
        val cardsAmount = words.size / WORDS_IN_CARD
    }
}
