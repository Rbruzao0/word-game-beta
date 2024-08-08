// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Menu, Tooltip } from "@mui/material";

// interface ShopProps {
//   points: number;
//   setPoints: (value: React.SetStateAction<number>) => void;
// }

// const Shop: React.FC<ShopProps> = ({ points, setPoints }) => {
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
//     null
//   );

//   const handleOpenItemShop = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   return (
//     <Box>
//       <Tooltip title="Open dicts">
//         <Button
//           onClick={handleOpenItemShop}
//           sx={{ my: 2, color: "white", display: "block" }}
//         >
//           <Typography textAlign="center">DICTIONARIES SHOP</Typography>
//         </Button>
//       </Tooltip>
//       <Menu
//         sx={{ mt: "45px" }}
//         id="menu-appbar"
//         anchorEl={anchorElUser}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         keepMounted
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         open={Boolean(anchorElUser)}
//         onClose={() => setAnchorElUser(null)}
//       >
//       </Menu>
//     </Box>
//   );
// };

// export default Shop;
