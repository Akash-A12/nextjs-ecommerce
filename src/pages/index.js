import AdminDashboard from "@/components/AdminDashboard/AdminDashboard";
import Signin from "@/components/Signin/Signin";
import { useSession } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
      <AdminDashboard data={session} />
      </>
    );
  }
  return (
    <>
      <Signin/>
    </>
  );
}
