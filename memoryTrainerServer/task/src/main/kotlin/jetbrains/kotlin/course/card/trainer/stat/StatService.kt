package jetbrains.kotlin.course.card.trainer.stat

import org.springframework.stereotype.Service
import jetbrains.kotlin.course.card.trainer.card.Back

@Service
class StatService {

    companion object {
        private val history = mutableListOf<Stat>()
    }

    fun getHistory(): MutableList<Stat> = history.reversed().toMutableList()


    fun save(knownBacks: List<String>, unknownBacks: List<String>) {
        val known = knownBacks.map { Back(it) }
        val unknown = unknownBacks.map { Back(it) }
        history.add(Stat(known, unknown))
    }




}
