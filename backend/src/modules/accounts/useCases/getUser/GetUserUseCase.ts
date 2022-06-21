import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IResponse {
  name: string;
  username: string;
  isAdmin: boolean;
}

@injectable()
class GetUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute({ user_id }) {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not exists!', 401);
    }
    const userReform: IResponse = {
      name: user.name,
      username: user.username,
      isAdmin: user.isAdmin,
    };

    return userReform;
  }
}

export { GetUserUseCase };
