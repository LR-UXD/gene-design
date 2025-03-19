import Breadcrumb from "./Breadcrumb.vue";
import BreadcrumbItem from "./BreadcrumbItem.vue";
import { withInstall } from '@gene-design/utils'


export const gBreadcrumb = withInstall(Breadcrumb)
export const gBreadcrumbItem = withInstall(BreadcrumbItem)


export { Breadcrumb, BreadcrumbItem };
export default Breadcrumb;


