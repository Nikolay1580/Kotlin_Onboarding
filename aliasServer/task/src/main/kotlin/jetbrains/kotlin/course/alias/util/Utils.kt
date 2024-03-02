package jetbrains.kotlin.course.alias.util


typealias Identifier = Int

class IdentifierFactory {
    private var counter: Identifier = 0

    fun IdentifierFactory(counter: Int = 0) {

        this.counter = 0
    }

    fun uniqueIdentifier(): Identifier = counter++

}
