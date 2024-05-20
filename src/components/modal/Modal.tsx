import "./index.css";

export const Modal = ({ active, setActive, videoValue }: any) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        {active && (
          <iframe
            className="iframe-video"
            src={videoValue}
            loading="lazy"
          ></iframe>
        )}
      </div>
    </div>
  );
};
