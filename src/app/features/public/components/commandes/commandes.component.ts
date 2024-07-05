import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/core/models/commande';
import { CommandeService } from 'src/app/core/services/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {

  constructor(private commandeService: CommandeService) { }

  commandes!: Commande[];

  ngOnInit(): void {
    this.commandes = this.commandeService.getAllCommandes();
  }

}
