import { auth, signIn, signOut } from "@/lib/auth";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">Indiemakers Directory</span>
        </Link>
        <div className="flex items-center gap-5">
          {session && session.user ? (
            <>
              <Link href="/startups/create">
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
                className="text-blue-500 hover:text-blue-700"
              >
                <button type="submit">Logout</button>
              </form>
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
              className="text-blue-500 hover:text-blue-700"
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
