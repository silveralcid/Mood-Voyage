import { notFound } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  if (!isValidSlug(params.slug)) {
    notFound(); // Redirects to app/not-found.tsx
  }

  return <h1>Valid Page</h1>;
}

function isValidSlug(slug: string) {
  return slug === "valid-page"; // Replace with your logic
}
