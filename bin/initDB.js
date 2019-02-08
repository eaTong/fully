/**
 * Created by eatong on 18-2-11.
 */
const User = require('../server/models/User');
const OperationLog = require('../server/models/OperationLog');
const Menu = require('../server/models/Menu');
const Role = require('../server/models/Role');
const RoleMenu = require('../server/models/RoleMenu');
const UserRole = require('../server/models/UserRole');
//UPDATE_TAG:importModel

(async () => {
  await initialDatabaseStructure();
  await initialMenu();
  await initRole();
  process.exit();
})();


async function initialDatabaseStructure() {

  await User.sync({alter: true});
  await OperationLog.sync({alter: true});
  await Menu.sync({alter: true});
  await Role.sync({alter: true});
  await RoleMenu.sync({alter: true});
  await UserRole.sync({alter: true});
//UPDATE_TAG:asyncModel
}

async function initialMenu() {
  const menuList = [
    {name: '系统设置', icon: 'setting', path: '/admin/system', enable: true, parentPath: '', type: 0},
    {name: '用户管理', icon: 'user', path: '/admin/user', enable: true, parentPath: '/admin/system', type: 1},
    {name: '新增', icon: 'plus', path: '/admin/user/add', enable: true, parentPath: '/admin/user', type: 2},
    {name: '编辑', icon: 'edit', path: '/admin/user/edit', enable: true, parentPath: '/admin/user', type: 2},
    {name: '删除', icon: 'delete', path: '/admin/user/delete', enable: true, parentPath: '/admin/user', type: 2},
    {name: '角色授权', icon: 'user', path: '/admin/user/grant', enable: true, parentPath: '/admin/user', type: 2},
    {name: '角色管理', icon: 'team', path: '/admin/role', enable: true, parentPath: '/admin/system', type: 1},
    {name: '新增', icon: 'plus', path: '/admin/role/add', enable: true, parentPath: '/admin/role', type: 2},
    {name: '编辑', icon: 'edit', path: '/admin/role/edit', enable: true, parentPath: '/admin/role', type: 2},
    {name: '删除', icon: 'delete', path: '/admin/role/delete', enable: true, parentPath: '/admin/role', type: 2},
    {name: '分配菜单', icon: 'user', path: '/admin/role/grant', enable: true, parentPath: '/admin/role', type: 2},

//UPDATE_TAG:asyncMenu
  ];
  await Menu.bulkCreate(menuList, {updateOnDuplicate: ['path', 'name', 'icon', 'enable', 'parentPath', 'type']});
}

async function initRole() {
  const role = await Role.findAll();
  if (role.length === 0) {
    const adminRole = await Role.create({name: '系统管理员', enable: true});
    const menus = await Menu.findAll();
    adminRole.setMenus(menus);
    await adminRole.save();
  }
}
