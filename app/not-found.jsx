import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg mt-4">The page you are looking for does not exist.</p>
        <Link href="/" className="text-blue-500">Back To HomePage</Link>
      </div>
    </div>
  );
}