import {
  createDepartmentMetadata,
  createDepartmentPage,
} from "@/lib/department-page";

export const metadata = createDepartmentMetadata("bags");
export default createDepartmentPage("bags");
