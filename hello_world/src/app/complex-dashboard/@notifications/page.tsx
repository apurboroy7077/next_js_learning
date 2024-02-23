import GreenCard from "@/components/GreenCard";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <GreenCard>This is Notifications</GreenCard>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </>
  );
};

export default Page;
