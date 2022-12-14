import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {ROLES_KEY} from 'src/decorators/roles.decorator';
import {Permissions} from 'src/models/enums';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Permissions[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }
    const {user} = context.switchToHttp().getRequest();
    return requiredRoles.some(
      role => user.roles?.includes(role) || user.role === 'admin',
    );
  }
}
