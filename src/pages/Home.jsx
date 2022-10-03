import { get } from "api";
import { useContext } from "react";
import axios from "axios";
import { useSetState } from 'react-use';
import SectionsUser from "./SectionsUser";
import { UserContext } from "context/userContext";

export default function Home() {
  const { user } = useContext(UserContext)
  const [{ access_token, success, linkId }, setState] = useSetState({
    access_token: null,
    success: false,
    linkId: ""
  });
  console.log(user)

  async function createWidget() {
    // Function to call your server-side to generate the access_token and retrieve the your access token
    get("/get_token").then(({ access }) => {
      // const { access } = data;
      console.log(access)
      window.belvoSDK.createWidget(access, config).build()
    })
    const callback = () => { }
    const successCallbackFunction = (link, institution) => {

      console.log(link, institution)
      localStorage.setItem("link_id", link)
      // Do something with the link and institution,
      // such as associate it with your registered user in your database.
    }
    const onExitCallbackFunction = (data) => {
      // Do something with the exit data.
    }
    const onEventCallbackFunction = (data) => {
      // Do something with the exit data.
    }
    const config = {

      // Add your startup configuration here.
      locale: "es",
      country_codes: ["MX"],

      callback: (link, institution) => successCallbackFunction(link, institution),
      onExit: (data) => onExitCallbackFunction(),
      onEvent: (data) => onEventCallbackFunction()
    }
  }

  return (
    <div>
      {!localStorage.getItem('link_id') ? <button onClick={createWidget}>Conectar</button> :
        <div className="cont_platform">
          <SectionsUser linkId={user} />
        </div>
      }

    </div>
  )
}