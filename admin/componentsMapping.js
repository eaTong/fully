import AdminIndexPage from '~/pages/AdminIndexPage';
import UserPage from '~/pages/user/UserPage';
import RolePage from '~/pages/role/RolePage';
import GrantMenuPage from '~/pages/role/GrantMenuPage';
//UPDATE_TAG:importPage

const componentsMapping = {
  '/admin/index': AdminIndexPage,
  '/admin/user': UserPage,
  '/admin/role': RolePage,
  '/admin/grant': GrantMenuPage,
//UPDATE_TAG:addPageRoute
};

export default componentsMapping;
