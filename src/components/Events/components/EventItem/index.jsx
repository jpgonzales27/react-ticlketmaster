import "./stykes.css";
import styles from "./EventItem.module.css";
import { Link } from "react-router-dom";

export const EventItem = ({ info, name, image, onEventClick, id }) => {
  const handleSeeMoreClick = (event) => {
    event.stopPropagation();
    onEventClick(id);
  };

  return (
    <div
      onClick={() => console.log("Padre clickeado")}
      className={`${styles.eventItemContainer} ${styles.anotherContainer}`}
    >
      <div className={styles.imageContainer}>
        {/* <img
          src={isEventLiked ? HearthFilled : HearthUnfilled}
          alt="Hearth button"
          className={styles.hearthImage}
          onClick={handleHearthClick}
        /> */}
        <img src={image} alt={name} width={200} height={200} />
      </div>

      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button type="button" onClick={(e) => handleSeeMoreClick(e)} className={styles.seeMoreBtn}>
          <Link to={`/detail/${id}`}>Ver Mas con Link </Link>
        </button>
        <button type="button" onClick={(e) => handleSeeMoreClick(e)} className={styles.seeMoreBtn}>
          Ver Mas con useNavigate
        </button>
      </div>
    </div>
  );
};
