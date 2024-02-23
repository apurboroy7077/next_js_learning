import TheRedCard from "@/components/Card";

type propsType = {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
};
let ComplexDashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: propsType) => {
  let loginTrueCode = (
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
  let loginFalseCode = (
    <>
      <div>{login}</div>
    </>
  );
  let isLoggedIn = false;
  if (isLoggedIn) {
    return loginTrueCode;
  } else {
    return loginFalseCode;
  }
};
export default ComplexDashboardLayout;
