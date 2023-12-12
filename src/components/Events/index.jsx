import { EventItem } from "./components/EventItem";
import useEventsData from "../../hooks/useEventsData";
import { useNavigate } from "react-router-dom";

// const events = data._embedded.events;
// console.log(events);

// const {
//   _embedded: { events },
// } = eventsJSON;
// console.log(events);

export const Events = ({ searchTerm }) => {
  const navigate = useNavigate();
  const { events, isLoading, error } = useEventsData();

  const handleEventItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const eventsComponent = events.map((evenItem) => (
    <EventItem
      key={evenItem.id}
      info={evenItem.info}
      name={evenItem.name}
      image={evenItem.images[0].url}
      id={evenItem.id}
      onEventClick={handleEventItemClick}
    />
  ));

  const renderEvents = () => {
    let eventsFilter = events;
    if (searchTerm.length > 0) {
      eventsFilter = eventsFilter.filter((item) => item.name.toLowerCase().includes(searchTerm));
    }
    return eventsFilter.map((evenItem) => (
      <EventItem
        key={evenItem.id}
        info={evenItem.info}
        name={evenItem.name}
        image={evenItem.images[1].url}
        id={evenItem.id}
        onEventClick={handleEventItemClick}
      />
    ));
  };

  if (error) {
    return <div>Ha ocurrido un error</div>;
  }

  if (isLoading) {
    return <div>CARGANDO...</div>;
  }

  return (
    <div>
      Eventos
      {renderEvents()}
      {/* {eventsComponent} */}
      {/* {events.map((evenItem) => (
        <EventItem
          key={evenItem.id}
          info={evenItem.info}
          name={evenItem.name}
          image={evenItem.images[1].url}
          id={evenItem.id}
          onEventClick={handleEventItemClick}
        />
      ))} */}
    </div>
  );
};
