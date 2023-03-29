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
      title: 'Vacanze al mare',
      description: 'Se ami il Mediterraneo, troverai le migliori vacanze al mare in Italia. Sogni una vacanza in Sardegna? Scopri i pacchetti volo + hotel di lastminute.com. Oppure scegli una vacanza in Spagna, con le classiche Baleari e Canarie, o le famose Costa Brava e Costa del Sol. Sogni le vacanze in Grecia? Scopri le offerte per le isole greche: Mykonos, Santorini, Corfù, Creta, Kos e Rodi. Qualcosa di più.. esotico? Prenota una vacanza alle Maldive o alle Mauritius, Cuba o Santo Domingo, o Kenya e Zanzibar per un viaggio da sogno, senza dimenticare la meta più celebre per chi ama lo snorkeling: il Mar Rosso.',
      urlImage : "carousel-1.webp"
    },
    {
      _id: 2,
      title: 'Vacanze in Europa',
      description: 'E se ami le città, prenota un volo+hotel e visita Barcellona, Londra, Amsterdam o Lisbona: la vacanza è anche in città! Che tu voglia viaggiare in coppia, da solo, con la famiglia o in gruppo, le vacanze ti stanno aspettando.',
      urlImage : "carousel-2.webp"
    },
    {
      _id: 3,
      title: 'Parigi',
      description: 'E se ami le città, prenota un volo+hotel e visita Barcellona, Londra, Amsterdam o Lisbona: la vacanza è anche in città! Che tu voglia viaggiare in coppia, da solo, con la famiglia o in gruppo, le vacanze ti stanno aspettando.',
      urlImage : "parigi.jpg"
    }
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
