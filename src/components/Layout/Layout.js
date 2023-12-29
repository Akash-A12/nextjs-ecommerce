import AdminDashboard from "@/components/AdminDashboard/AdminDashboard";
import Signin from "@/components/Signin/Signin";
import { useSession } from "next-auth/react";

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <AdminDashboard data={session} />
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col w-full page-wrapper" >{children}</div>
      </>
    );
  }
  return (
    <>
      <Signin />
    </>
  );
}
