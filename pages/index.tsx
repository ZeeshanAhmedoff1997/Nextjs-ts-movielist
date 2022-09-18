import { setMovies } from "redux/moviesSlice";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MovieArray } from "types";
import Movies from "../components/MoviesList";
import { getMovies } from "services";

const Home: NextPage<MovieArray> = ({ movies }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMovies(movies));
  }, [movies]);

  return (
    <>
      <Head>
        <title>Movies App</title>
      </Head>
      <Movies />
    </>
  );
};

export default Home;
export const getServerSideProps = async () => {
  const res = await getMovies();
  return {
    props: {
      movies: res,
    },
  };
};
