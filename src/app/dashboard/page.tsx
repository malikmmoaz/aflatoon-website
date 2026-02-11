import Link from "next/link";
import { auth, signOut } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-background-dark">
      <header className="w-full border-b border-primary/10 bg-background-dark/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <img src="/logo.png" width={105} alt="Aflatoon" />
          </Link>
          <div className="flex items-center gap-4">
            {session?.user?.image && (
              <img
                src={session.user.image}
                alt={session.user.name ?? "User"}
                width={32}
                height={32}
                className="rounded-full"
                referrerPolicy="no-referrer"
              />
            )}
            <span className="text-sm text-gray-300">
              {session?.user?.name}
            </span>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button
                type="submit"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-100 mb-2">Dashboard</h1>
        <p className="text-gray-400 mb-8">
          Welcome back, {session?.user?.name ?? "User"}!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-card-dark border border-primary/10">
            <p className="text-sm text-gray-400 mb-1">Status</p>
            <p className="text-2xl font-bold text-primary">Active</p>
          </div>
          <div className="p-6 rounded-xl bg-card-dark border border-primary/10">
            <p className="text-sm text-gray-400 mb-1">Account</p>
            <p className="text-lg font-semibold text-gray-200 truncate">
              {session?.user?.email}
            </p>
          </div>
          <div className="p-6 rounded-xl bg-card-dark border border-primary/10">
            <p className="text-sm text-gray-400 mb-1">Plan</p>
            <p className="text-2xl font-bold text-gray-200">Free</p>
          </div>
        </div>
      </main>
    </div>
  );
}
