import PropertyDetails from "@/components/PropertyDetails";
import properties from "@/properties";
import { redirect } from "next/navigation";
import { Resend } from "resend";



const page = ({params}: {params:{id:string}}) => {

  const property = properties.find((property) => property.slug === params.id);



  if (!property) {
    redirect("/");
  }

  return <main>
    <PropertyDetails property={property!} />
  </main>;
};
export default page;
