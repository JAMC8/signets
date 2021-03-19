import './ListeDossiers.scss';
import Dossier from './Dossier';
import {useState, useEffect} from 'react';
import {firestore} from '../firebase';

export default function ListeDossiers({etatUtilisateur, etatDossiers}) {
  // Decomposer etat utilisateur
  const [utilisateur] = etatUtilisateur;

  // Decomposer etatDossiers
  const [dossiers, setDossiers] = etatDossiers;

  useEffect(
    () => {
      async function chercherDossier()
      {
        const tabDossiers = [];
        const reponse = await firestore.collection('utilisateurs').doc(utilisateur.uid).collection('dossiers').get();
        reponse.forEach(
          doss => tabDossiers.push({id: doss.id, ...doss.data()})
        );
        setDossiers(tabDossiers);
      }
      chercherDossier();
    }, []
  );
  

  return (
    <ul className="ListeDossiers">
      {
        dossiers.map( 
          dossier =>  <li key={dossier.id}><Dossier {...dossier}/></li>
        )
      }
    </ul>
  );
}