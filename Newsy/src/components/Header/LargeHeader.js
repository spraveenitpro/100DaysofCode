import React from "react";
import { IonHeader, IonTitle, IonToobar, IonToolbar } from "@ionic/react";

const LargeHeader = ({ title }) => {
  return (
    <IonHeader collapse="condense">
      <IonToolbar color="primary" style={{ background: "#f0652f" }}>
        <IonTitle size="large">{title} Iphone</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default LargeHeader;
