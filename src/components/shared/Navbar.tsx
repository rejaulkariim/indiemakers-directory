import Logo from "@/components/shared/Logo";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import MobileNav from "@/components/shared/MobileNav";
import UserAccountNav from "@/components/shared/UserAccountNav";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getUserFromDB } from "@/server/actions/auth.action";
import Link from "next/link";
import NavItems from "./Navitems";

const Navbar = async () => {
  const user = await getUserFromDB();

  return (
    <header className="h-16 border-b w-full border-border/40 bg-background">
      <MaxWidthWrapper>
        <nav className="h-full w-full flex justify-between items-center">
          <Logo />

          {/* UserAccountNav or Login on the right */}
          <div className="hidden md:flex justify-end items-center space-x-10">
            <NavItems />
            {user ? (
              <UserAccountNav user={user} />
            ) : (
              <Link
                href="/auth/login"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Login
              </Link>
            )}
          </div>

          <div className="md:hidden w-44 flex justify-end items-center space-x-4">
            {user ? <UserAccountNav user={user} /> : <MobileNav />}
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
