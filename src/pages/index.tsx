import type { NextPage } from "next";
import { ScreenDescription, SearchInput } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <SearchInput />
      <ScreenDescription
        title="Descubra novos sabores"
        slogan="Aqui eu converso com você sobre nossa proposta"
      />
    </>
  );
};

export default Home;
