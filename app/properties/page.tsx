import Link from 'next/link';
import Image from 'next/image';
import properties from '@/properties';
import { formatter } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { EyeIcon } from 'lucide-react';

const Properties = () => {
  return (
    <main className="py-10 max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
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
              className="w-full object-cover"
            />
            <div className="p-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-md font-medium">{property.title}</h2>
                  <p className="text-sm text-gray-500">{property.type}</p>
                </div>
                <p className="text-2xl text-red-600 font-bold">
                  {formatter(property.price)}
                  <small className="text-xs text-slate-500 font-light">
                    /night
                  </small>
                </p>
              </div>
              <Link href={`/properties/${property.slug}`} className="">
                <Button className="bg-red-600 rounded-full text-md uppercase">
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
