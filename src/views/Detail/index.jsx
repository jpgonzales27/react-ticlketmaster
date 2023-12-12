import { useParams } from "react-router-dom";

export const Detail = () => {
  const { eventId } = useParams();
  console.log(eventId);
  return <div>Detail View</div>;
};
