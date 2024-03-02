package jetbrains.kotlin.course.alias.team

import jetbrains.kotlin.course.alias.util.Identifier

data class Team(val id: Identifier, var points: Int = 0) {
    val name  = "Team#${id + 1}"
}
