import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AssignPermissions, Role } from 'src/models';
import { RolePermissionRepository } from '../role-permission/role-permission.repository';
import { RoleRepository } from './role.repository';
import { v4 as uuid } from 'uuid';
import { DataSource } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(private roleRepository: RoleRepository, private rolePermissionRepository: RolePermissionRepository, private dataSource: DataSource) { }
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
    return permissions ?? [];
  }

  async assignPermissions(request: AssignPermissions) {
    const isExist = await this.roleRepository.orm.findOneBy({ id: request.roleId });
    if (!isExist) {
      throw new HttpException(
        'ERROR.NOT_FOUND',
        HttpStatus.BAD_REQUEST,
      );
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await this.rolePermissionRepository.orm.delete({ roleId: request.roleId });
      if (request.permissionIds?.length > 0) {
        const rolePermissions = request.permissionIds.map(permissionId => {
          return { id: uuid(), roleId: request.roleId, permissionId: permissionId };
        });

        await this.rolePermissionRepository.orm.insert(rolePermissions);
      }
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
