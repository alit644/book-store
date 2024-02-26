import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Root from "./layout/Root";
import Category from "./pages/Category";
import { Box, useColorModeValue } from "@chakra-ui/react";
import BookDetails from "./pages/BookDetails";
import BookByCategory from "./pages/BookByCategory";
import Blog from "./pages/Blog";
import NotFound from "./components/error/Page404";

function App() {
  const bg = useColorModeValue("#F1F1F1");

  return (
    <Box bg={bg}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Root />} />
          <Route path="/category" element={<Category/>}/>
          <Route path="/category/:id" element={<BookByCategory/>}/>
          <Route path="book/:id" element={<BookDetails/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Route>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </Box>
  );
}

export default App;
