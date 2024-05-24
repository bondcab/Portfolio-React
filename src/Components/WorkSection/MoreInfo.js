import styles from "./MoreInfo.module.css";

function MoreInfo() {
  return (
    <div className={styles.moreInfoContainer}>
      <div className={styles.moreInfo}>
        <h2 className={styles.projectTitles}>myBond Flix App (React)</h2>
        <p className={styles.workText}>
          In this project, I crafted the frontend of the James Bond Movies App
          with ReactJS. Collaborating seamlessly with the Rest API project, I
          successfully delivered a comprehensive full-stack application
          utilizing the MERN stack
        </p>
      </div>
    </div>
  );
}

export default MoreInfo;
