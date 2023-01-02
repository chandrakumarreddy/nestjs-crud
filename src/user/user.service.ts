import { Injectable } from '@nestjs/common';

type User = {
  userId: number;
  username: string;
  email: string;
  password: string;
};

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'test 1',
      email: 'test1@test.com',
      password: 'test',
    },
    {
      userId: 1,
      username: 'test 1',
      email: 'test1@test.com',
      password: 'test',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((_user) => _user.username === username);
  }
}
