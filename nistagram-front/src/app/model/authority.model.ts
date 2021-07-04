export interface Authority {
  id: string;
  role: Role;
}

enum Role {
 ROLE_ADMIN,
 ROLE_USER
}
