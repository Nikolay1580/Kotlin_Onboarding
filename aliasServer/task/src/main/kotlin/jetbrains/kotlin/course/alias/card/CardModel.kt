package jetbrains.kotlin.course.alias.card

import jetbrains.kotlin.course.alias.util.Identifier

// Word class with a single property 'word' defined in the primary constructor
@JvmInline
value class Word(val word: String)

// Card class with properties 'id' and 'words' defined in the primary constructor
data class Card(val id: Identifier, val words: List<Word>)
