import { BadRequestException, Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('users')
export class UsersController {

    constructor(private usersService : UsersService) {}

    @Post()
    @HttpCode(201)
    createUser(@Body() newUser: CreateUserDTO, @Res() response: Response){
        if(newUser.username != '' && newUser.password != ''){
            this.usersService.createUser(newUser)
            return response.send({
                statusCode: 201,
                message: `Bienvenido ${newUser.username}`
            })
        }else{
            throw new BadRequestException('Bad Request', { cause: new Error(), description: 'Se requiere ingresar un usuario y contraseña'})
        }
    }   
}