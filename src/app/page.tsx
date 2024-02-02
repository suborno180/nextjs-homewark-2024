import ProductPreviewSection from "@/components/product-preview";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="p-2 md:p-8">
        <ProductPreviewSection />
      </div>
    </>
  );
}
