import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    email,
    name,
    password,
    username,
  }: ICreateUserDTO): Promise<void> {
    const userNameAlreadyExist = await this.usersRepository.findByUserName(
      username,
    );
    const emailAlreadyExist = await this.usersRepository.findByEmail(email);

    if (userNameAlreadyExist) {
      throw new AppError('User Already exists');
    }

    if (emailAlreadyExist) {
      throw new AppError('Email in use');
    }
    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      username,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
