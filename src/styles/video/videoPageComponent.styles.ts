import { makeStyles } from "@mui/styles";

export const useVideoPageStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  cardsContainer: {
    width: 1280,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: 40,
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  videoCard: {
    marginTop: 20,
    width: "90%",
    transition: "transform 0.3s ease", // Added transition for hover effect
    "&:hover": {
      transform: "scale(1.05)", // Enlarge the video card on hover
      cursor: "pointer", // Add pointer cursor to indicate interactivity
    },
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  paginationButton: {
    padding: "10px 20px",
    margin: "0 5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    borderRadius: "4px", // Optional: for rounded corners
    fontSize: "16px", // Optional: to adjust font size
    "&:disabled": {
      backgroundColor: "#cccccc",
      cursor: "not-allowed",
    },
  },
}));
