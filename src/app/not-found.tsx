import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>custom Not Found</h2>
      <p>custom Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
