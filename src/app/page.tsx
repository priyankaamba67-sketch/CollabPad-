// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <header className="absolute top-0 w-full flex justify-between px-8 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-indigo-600">CollabEdit</h1>
        <nav className="flex gap-6">
          <Link href="/documents/111" className="hover:text-indigo-500">Docs</Link>
          <Link href="/login" className="hover:text-indigo-500">Sign In</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-20">
        <h2 className="text-4xl font-bold mb-4">
          Edit documents together in <span className="text-indigo-600">real time</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-lg mb-8">
          Collaborate with your team instantly. No saving, no reloading —
          just seamless editing across all devices.
        </p>
        <Link
          href="/editor/new"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700"
        >
          Create New Document
        </Link>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-2">Real-time Sync</h3>
          <p className="text-gray-600">See changes from your teammates instantly.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-2">Version History</h3>
          <p className="text-gray-600">Restore previous versions with one click.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-2">Multi-Device</h3>
          <p className="text-gray-600">Work from your laptop, tablet, or phone.</p>
        </div>
      </section>
    </main>
  );
}
