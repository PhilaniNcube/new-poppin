import Link from 'next/link';
import Image from 'next/image';
import properties from '@/properties';
import { formatter } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { EyeIcon } from 'lucide-react';

const Properties = () => {
  return (
    <main className="py-10 mx-auto max-w-7xl">
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
        {properties.map((property, index) => (
          <article
            key={index}
            className="w-full rounded-md shadow-md overflow-clip"
          >
            <Image
              src={property.images[0]}
              width={1200}
              height={800}
              alt={property.title}
              className="object-cover w-full"
            />
            <div className="p-4">
              <div className="flex flex-col items-start justify-between mb-4">
                <div>
                  <h2 className="font-medium text-md">{property.title}</h2>
                  <p className="text-sm text-gray-500">{property.type}</p>
                </div>
                <p className="text-2xl font-bold text-red-600">
                  <span className="text-sm text-slate-600">From</span> {formatter(property.price)}
                  <small className="text-xs font-light text-slate-500">
                    /night
                  </small>
                </p>
              </div>
              <Link href={`/properties/${property.slug}`} className="">
                <Button className="uppercase bg-red-600 rounded-full text-md">
                  <EyeIcon /> View Property
                </Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};
export default Properties;
