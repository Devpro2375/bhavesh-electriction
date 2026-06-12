import { structuredData } from "@/lib/business";

export function StructuredData() {
  return (
    <>
      {structuredData.map((data) => (
        <script
          key={data["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
