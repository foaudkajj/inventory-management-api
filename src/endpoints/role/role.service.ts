import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Role } from 'src/models';
import { RolePermissionRepository } from '../role-permission/role-permission.repository';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
  constructor(private roleRepository: RoleRepository, private rolePermissionRepository: RolePermissionRepository) { }
  getAll(): Promise<Role[]> {
    return this.roleRepository.orm.find();
  }

  insert(row: Role) {
    return this.roleRepository.orm.insert(row);
  }

  update(row: Partial<Role>, id: string) {
    return this.roleRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.roleRepository.orm.delete({ id: id });
  }

  async getRolePermissions(roleId: string) {
    const isExist = await this.roleRepository.orm.findOneBy({ id: roleId });
    if (!isExist) {
      throw new HttpException(
        'ERROR.NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    }
    const rolePermissions = await this.rolePermissionRepository.orm.find({
      where: { roleId },
      relations: {
        permission: true,
      },
    });
    const permissions = rolePermissions.map(rolePermission => {
      return rolePermission.permission;
    });
    return permissions;
  }
}
