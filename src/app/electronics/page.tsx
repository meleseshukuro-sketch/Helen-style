import {
  createDepartmentMetadata,
  createDepartmentPage,
} from "@/lib/department-page";

export const metadata = createDepartmentMetadata("electronics");
export default createDepartmentPage("electronics");
