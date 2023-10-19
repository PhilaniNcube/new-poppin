import properties from "@/properties";
import Image from "next/image";
import Link from "next/link";

const PropertiesGrid = () => {
  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container">
      {properties.map((item, index) => (
        <Link href={`/properties/${item.slug}`} key={index} className="bg-white cursor-pointer dark:bg-gray-800 rounded-lg shadow p-6">
          <Image
            alt="Property 1"
            className="rounded-lg"
            height="200"
            src={item.images[0]}
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {item.description}
          </p>
        </Link>
      ))}
    </div>
  );
};
export default PropertiesGrid;
