import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Accueil from './Accueil';
import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { firestore } from '../firebase';

export default function Appli() {

  const etatUtilisateur = useState(null);
  const [utilisateur, setUtilisateur] = etatUtilisateur;

  useEffect(
    () => {
      firebase.auth().onAuthStateChanged(
        util => { 
          setUtilisateur(util);
          if(util)
          {
            firestore.collection('utilisateurs').doc(util.uid).set({
              nom: util.displayName,
              courriel: util.email,
              photo: util.photoURL,
              date_inscription: firebase.firestore.FieldValue.serverTimestamp() 
            }, {merge: true})
          }
        }
      );
    }, []
  );

  return (
    <div className="Appli">
      {
        utilisateur ?
        <>
          <Entete etatUtilisateur={etatUtilisateur} />
          <section className="contenu-principal">
            <ListeDossiers etatUtilisateur={etatUtilisateur} />
            <Fab className="ajoutRessource" color="primary" aria-label="Ajouter dossier">
              <AddIcon />
            </Fab>
          </section>
        </>
        :
        <Accueil etatUtilisateur={etatUtilisateur} />
      }
    </div>
  );
}
