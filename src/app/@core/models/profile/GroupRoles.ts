import {Role} from './role';

export class GroupRoles {
  id: number;
  name: string;
  roles: Set<Role>;
}
