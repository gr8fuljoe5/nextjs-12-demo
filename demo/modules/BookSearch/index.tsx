import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Input from "../../components/Input";
import Button from "../../components/Button";
import fetchData from "../../utils/fetch";
function BookSearch(props: any) {
  const { setResults } = props;
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState("false");
  useEffect(() => {
    console.log("useEffect");
    setLoading("true");
  }, [loading]);

  function getBooks() {
    const uri = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    if (query !== "") {
      fetchData(uri).then((data) => {
        setResults(data);
      });
    }
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        {/* @ts-ignore */}
        <Input onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div>
        <Button
          variant="outlined"
          disabled={false}
          onClick={() => {
            setQuery(search);
            getBooks();
          }}
        >
          Search
        </Button>
      </div>
    </Box>
  );
}

export default BookSearch;
