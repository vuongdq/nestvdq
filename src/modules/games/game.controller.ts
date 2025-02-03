import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import GameService from "./game.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";

@Controller("games")
export class GameController {
    constructor(private readonly gameService: GameService) { }
    @Get()
    getGames(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.gameService.createGame(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);

        } catch (error) {
            return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);

        }
    }
    @Post()
    createGame(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.gameService.createGame(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);

        } catch (error) {
            return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);

        }
    }
    @Get(":id")
    detailGame(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.gameService.detailGame(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);

        } catch (error) {
            return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);

        }
    }
    @Put(":id")
    updateGame(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.gameService.updateGame(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);

        } catch (error) {
            return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);

        }
    }
    @Delete(":id")
    deleteGame(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.gameService.deleteGame(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);

        } catch (error) {
            return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);

        }
    }

}
