import { useRouteError } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function ErrorPage() {
  const error = useRouteError();
  
  return (
    <>
    {/* <Header></Header> */}
    <div style={{height: '50vh'}} id="error-page">
      <h1>Вибачте</h1>
      <p>Сталося помилка, </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    {/* <Footer></Footer> */}
    </>
  );
}