import React, { useState, useContext } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/Routes";
import { FirebaseContext } from "../context/Firebase";
import { SelectProfileContainer } from "./Profiles";
import FooterContainer from "./Footer";

export function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [category, setCategory] = useState("series");
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);

  const user = {
    displayName: "Ralph",
    photoURL: "1",
  };

  return profile.displayName ? (
    <>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="https://i.ibb.co/RSL1RQg/logo.png"
              alt="Netflix"
            />
            <Header.Link
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.Link>
          </Header.Group>
        </Header.Frame>
      </Header>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
