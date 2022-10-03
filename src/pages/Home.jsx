import { get } from "api";
import { useContext } from "react";

import SectionsUser from "./SectionsUser";
import { UserContext } from "context/userContext";

export default function Home() {
  const { user, onConnect } = useContext(UserContext)

  async function createWidget() {
    const config = {
      locale: "es",
      country_codes: ["MX"],
      callback: (link, institution) => successCallbackFunction(link, institution),
      onExit: (data) => onExitCallbackFunction(),
      onEvent: (data) => onEventCallbackFunction()
    }

    get("/get_token").then(({ access }) => {
      window.belvoSDK.createWidget(access, config).build()
    })
    const successCallbackFunction = (link, institution) => {
      onConnect(link)
    }
    const onExitCallbackFunction = (data) => {
    }
    const onEventCallbackFunction = (data) => {
    }
  }

  return (
    <div>
      {user ? <button onClick={createWidget}>Conectar</button> :
        <div className="cont_platform">
          <SectionsUser linkId={user} />
        </div>
      }

    </div>
  )
}