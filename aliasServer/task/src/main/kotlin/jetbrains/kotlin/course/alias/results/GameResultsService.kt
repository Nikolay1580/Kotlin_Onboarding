package jetbrains.kotlin.course.alias.results

import org.springframework.stereotype.Service
import jetbrains.kotlin.course.alias.team.Team
import jetbrains.kotlin.course.alias.team.TeamService

typealias GameResult = List<Team>

@Service
class GameResultsService {
    fun saveGameResults(result: GameResult): Unit {
        require(result.isNotEmpty()) { "Game result must not be empty" }
        val teamIds = result.map { it.id }
        require(teamIds.all { TeamService.teamsStorage.containsKey(it) }) { "One or more team IDs are invalid" }

        gameHistory.add(result)
    }

    fun getAllGameResults(): List<GameResult> = gameHistory.reversed()

    companion object {
        val gameHistory = mutableListOf<GameResult>()

    }
}
