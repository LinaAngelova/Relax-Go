import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent implements OnInit{
  list : Viaggio[] = [
    {
      _id: 1,
      title: 'Capo verde',
      description: 'Questo straordinario paese si trova al largo della costa settentrionale dell’Africa e comprende una decina di isole; è famoso anche per l’incredibile cultura afro-portoghese, figlia di una straordinaria contaminazione fra più popolazioni. Oggi è molto amata per le splendide spiagge, la cultura antichissima e la musica morna, che ha influenzato molti artisti moderni. Paesaggi straordinari, onde che si susseguono placide su spiagge spettacolari e tanto verde promettono di regalarvi una vacanza unica, che ricorderete per sempre.',
      urlImage : "capoVerde.jpg"
    },
    {
      _id: 2,
      title: 'Malta',
      description: 'ituata in mezzo al Mediterraneo e da sempre crocevia di scambi commerciali, Malta è sempre stata una meta turistica sottovalutata dai viaggiatori a livello mondiale. Motivo? Probabilmente scarse campagne turistiche in passato e la vicinanza di mete attrattive la Sicilia, la Sardegna e la Corsica. Qualcuno di voi starà dicendo: “eppure io ci sono stato quando ero più giovane, per un corso d’Inglese!”. Vero. Malta è tutt’ora una delle mete predilette per chi vuole imparare l’inglese in quanto è uno stato bilingue facente parte in passato del regno britannico e per di più i corsi d’inglese a Malta risultano più economici di quelli nel Regno Unito.',
      urlImage : "Malta.jpg"
    },
    {
      _id: 3,
      title: 'Parigi',
      description: 'Parigi è rinomata come meta romantica per eccellenza, ma i visitatori rimangono estasiati dalla città in sé: i grandiosi edifici in pietra e ferro battuto, i marciapiedi costellati di caffetterie accoglienti e le rive serpeggianti della Senna sono davvero mozzafiato. La scena gastronomica offre un elenco infinito di pietanze francesi imperdibili come il coq au vin, piatto ricco e abbondante, e friabili cornetti dorati I falafel della città, ad esempio, sono straordinari. Lo spirito di Parigi ti invita ad addentrarti nelle strade secondarie, a soffermarti nei musei e a esplorare i labirinti di negozi. A fine giornata, ammira la vista indisturbata della Tour Eiffel che risplende nella notte dagli Champ-de-Mars.',
      urlImage : "parigi.jpg"
    },
    {
      _id: 4,
      title: 'Mosca',
      description: 'Dichiarata dal unesco Patrimonio del Umanità non lascia indifferente alcun visitatore. Nella piazza vi sono diversi luoghi da visitare, simboli della storia e della cultura russa: il Cremlino, il Museo Statale di Storia della Russia, la Cattedrale di San Basilio E IL Mausoleo di Lenin. Estendendosi su due continenti e con 14 paesi vicini, la Russia è una combinazione unica di culture e influenze.',
      urlImage : "Mosca.jpg"
    },
  ];

  percorso = "../assets/images/";

  constructor() {};

  ngOnInit(): void { }

}


export interface Viaggio {
  _id: number;
  title: string;
  description: string;
  urlImage:string;
}
