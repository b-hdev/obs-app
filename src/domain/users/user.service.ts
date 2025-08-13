import { Injectable } from '@nestjs/common';
import { log } from '../../infra/logger'

@Injectable()
export class UserService {
  list(): Array<{ name: string, email: string }> {
      log.info ('Buscando usuários...');
      return [
        {
          name: "User 1", 
          email: "user1@gmail.com"
        },
        {
          name: "User 2", 
          email: "user2@gmail.com"
        },
        {
          name: "User 4", 
          email: "user4@gmail.com"
        }
      ];
  }
}