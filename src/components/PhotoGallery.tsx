import { ImageList, ImageListItem } from "@mui/material";

const itemData = [
  {
    img: "/ride01/01.jpg",
    title: "Breakfast",
  },
  {
    img: "/ride01/02.jpg",
    title: "Breakfast",
  },
  {
    img: "/ride01/03.jpg",
    title: "Breakfast",
  },
];

export const PhotoGallery = () => {
  <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>;
};
