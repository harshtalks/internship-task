import "normalize.css";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import SearchBar from "./components/SearchBar";
import Album from "./components/Album";
import { useEffect, useState } from "react";
import { fetchAlbumsFromAPI, fetchPhotosFromAPI } from "./store/dataSlice";

export default function App() {
  const albums = useSelector((state) => state.data.albums);
  const photos = useSelector((state) => state.data.photos);
  const loading = useSelector((state) => state.data.loading);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(fetchAlbumsFromAPI());
    dispatch(fetchPhotosFromAPI());
  }, []);

  return (
    loading === false && (
      <Container maxwidth="xl">
        <SearchBar setValue={setValue} />
        <Album value={value} albums={albums} photos={photos} />
      </Container>
    )
  );
}
