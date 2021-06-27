import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import { NavBar } from './components/NavBar/NavBar';
import { Menu } from './components/Menu/Menu';
import { GlobalStyle } from './components/Style/GlobalStyle';
import { ModalItem } from './components/Modal/ModalItem';
import { Order } from './components/Order/Order';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrders } from './components/Hooks/useOrders';
import { useAuth } from './components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyAyaSeRMFL4ORphj3fF4MVGmG4VKbtFExY",
  authDomain: "mrdonalds-e2e84.firebaseapp.com",
  databaseURL: "https://mrdonalds-e2e84-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-e2e84",
  storageBucket: "mrdonalds-e2e84.appspot.com",
  messagingSenderId: "1071041318597",
  appId: "1:1071041318597:web:4e4b023ed2d752fb93eaac"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth)

  const openItem = useOpenItem(null);
  const orders = useOrders(null);
  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
