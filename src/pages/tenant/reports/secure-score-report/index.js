import { Layout as DashboardLayout } from "../../../../layouts/index.js";
import { CippTablePage } from "../../../../components/CippComponents/CippTablePage.jsx";

const Page = () => {
  const pageTitle = "Secure Score Report";
  const apiUrl = "/api/ListSecureScoreReport";

  const simpleColumns = [
    "Tenant",
    "CurrentScore",
    "MaxScore",
    "Percentage",
    "VsAllTenants",
    "VsSimilarSize",
    "LicensedUsers",
    "Identity",
    "Data",
    "Device",
    "Apps",
    "Infrastructure",
  ];

  return <CippTablePage title={pageTitle} apiUrl={apiUrl} simpleColumns={simpleColumns} />;
};

Page.getLayout = (page) => <DashboardLayout allTenantsSupport={true}>{page}</DashboardLayout>;

export default Page;
