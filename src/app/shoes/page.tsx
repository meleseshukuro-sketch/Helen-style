import {
  createDepartmentMetadata,
  createDepartmentPage,
} from "@/lib/department-page";

export const metadata = createDepartmentMetadata("shoes");
export default createDepartmentPage("shoes");
