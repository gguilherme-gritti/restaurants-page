import Image from "next/image";
import { LoadingContainer } from "./styled";
import Spinner from "../../../assets/icons/spinner.gif";

export const Loading = () => {
  return (
    <LoadingContainer>
      <Image src={Spinner} alt="Loading" />
    </LoadingContainer>
  );
};
