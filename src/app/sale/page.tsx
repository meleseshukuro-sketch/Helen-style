import {
  createDepartmentMetadata,
  createDepartmentPage,
} from "@/lib/department-page";

export const metadata = createDepartmentMetadata("sale");
export default createDepartmentPage("sale");
