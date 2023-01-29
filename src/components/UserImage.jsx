import { Box } from "@mui/material"

const UserImage = ({ image, size = "60px" }) => {
  console.log("image _ UserImage", image)
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${import.meta.env.VITE_API_URL}/assets/${image}`}
      />
    </Box>
  )
}

export default UserImage
