import { Injectable } from "@nestjs/common";

@Injectable()
export class GameService {
    getGames(): string {
        return "This action returns all games1";
    }
    createGame(): string {
        return "This action adds a new game1";
    }
    detailGame(): string {
        return "This action returns a game1";
    }
    updateGame(): string {
        return "This action updates a game1";
    }
    deleteGame(): string {
        return "This action removes a game1";
    }
}
export default GameService;