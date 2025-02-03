export class Game {
    id?: number;
    categoryId?: number;
    gameName?: string;
    gameDescription?: string;
    gameImage?: string;
    gameFile?: string;

    constructor({ id, categoryId, gameName, gameDescription, gameImage, gameFile }) {

        if (id !== undefined) {
            this.id = id;
        }
        if (categoryId !== undefined) {
            this.categoryId = categoryId;
        }
        if (gameName !== undefined) {
            this.gameName = gameName;
        }
        if (gameDescription !== undefined) {
            this.gameDescription = gameDescription;
        }
        if (gameImage !== undefined) {
            this.gameImage = gameImage;
        }
        if (gameFile !== undefined) {
            this.gameFile = gameFile;
        }
    }
}