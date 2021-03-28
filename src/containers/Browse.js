import React, { useState } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/Routes";
import { FirebaseContext } from "../context/Firebase";
import { SelectProfileContainer } from "./Profiles";
import FooterContainer from "./Footer";

export function BrowseContainer() {
  const [profile, setProfile] = useState({});

  const user = {
    displayName: "Ralph",
    photoURL: "1",
  };

  return profile.displayName ? (
    <>
      <p>Browse Container</p>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
