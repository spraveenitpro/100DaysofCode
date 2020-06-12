import React from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonButton,
  IonRouterLink,
} from "@ionic/react";
import NavHeader from "../../components/Header/NavHeader";

const Forgot = () => {
  return (
    <IonPage>
      <NavHeader title="Login" />
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput name="email" type="text" required></IonInput>
        </IonItem>

        <IonRow>
          <IonCol class="ion-text-center ion-padding-vertical">
            <IonRouterLink routerLink={"/forgot"}>
              {" "}
              Forgot Password
            </IonRouterLink>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Forgot;
