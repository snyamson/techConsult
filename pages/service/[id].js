import { useRouter } from "next/router";

const ServiceDetail = () => {
  const router = useRouter();
  const { id: serviceId } = router.query;

  return <div>This is the details of a single service {serviceId}</div>;
};

export default ServiceDetail;
