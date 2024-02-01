import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService : UsersService) {}

    @Post()
    createUser(@Body() newUser: CreateUserDTO){
        console.log('peticion')
        return this.usersService.createUser(newUser)
    }

}