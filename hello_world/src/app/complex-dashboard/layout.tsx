import TheRedCard from "@/components/Card";

type propsType = {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
};
let ComplexDashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
}: propsType) => {
  return (
    <>
      <TheRedCard>
        <div>
          <h1>This is Part of Layout</h1>
          <div>{children}</div>
          <div>{users}</div>
          <div>{revenue}</div>
          <div>{notifications}</div>
        </div>
      </TheRedCard>
    </>
  );
};
export default ComplexDashboardLayout;
