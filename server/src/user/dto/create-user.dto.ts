// import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {

  /**
   * O e-mail é necessário apra o login, mas não necessariamente precisa ser o mesmo e-mail da
   * rede social que estiver conectada. Login sem rede social precisa de uma senha.
   * @example email@email.com
   */
  @IsEmail()
  email: string;




   /**
   * É possível conectar com redes sociais sem uma senha, mas para login usando o e-mail diretamente
   * é necessário informar uma senha.
   * @example 123@abc
   */
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;





 /**
   * O primeiro nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example Paulo Salvatore
   */
  @IsString()
  firstname: string;




  
   /**
   * O ultimo nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example Paulo Salvatore
   */
  @IsString()
  lastname: string;


}