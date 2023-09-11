import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const DefaultLoading = () => {
  return <Skeleton count={5} />;
};
