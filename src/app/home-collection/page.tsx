import {
  createDepartmentMetadata,
  createDepartmentPage,
} from "@/lib/department-page";

export const metadata = createDepartmentMetadata("home-collection");
export default createDepartmentPage("home-collection");
