import AdminDashboard from "@/components/AdminDashboard/AdminDashboard";
import Signin from "@/components/Signin/Signin";
import { useSession } from "next-auth/react";

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <AdminDashboard data={session} />
        <div className="" style={{ position: "absolute", left: "18rem" }}>{children}</div>
      </>
    );
  }
  return (
    <>
      <Signin />
    </>
  );
}
