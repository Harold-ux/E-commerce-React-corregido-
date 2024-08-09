import { useState } from "react";
import { Loading } from "../components/Loading/Loading";

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);
  const loadingScreen = loading ? <Loading /> : null;

  return { loading, showLoading, hideLoading, loadingScreen };
};

export default useLoading;
