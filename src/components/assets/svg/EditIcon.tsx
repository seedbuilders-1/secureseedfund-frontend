import Box from "@mui/material/Box";

const EditIcon = () => {
  return (
    <Box
      sx={{
        width: "1rem",
        height: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #33333333",
        borderRadius: "0.25rem",
        cursor: "pointer",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <path
          d="M8.85355 4.14645C8.65829 3.95118 8.34171 3.95118 8.14645 4.14645L4 8.29289V10.5C4 10.7761 4.22386 11 4.5 11H6.70711L10.8536 6.85355C11.0488 6.65829 11.0488 6.34171 10.8536 6.14645L8.85355 4.14645Z"
          fill="#333333"
          fill-opacity="0.4"
        />
      </svg>
    </Box>
  );
};

export default EditIcon;
