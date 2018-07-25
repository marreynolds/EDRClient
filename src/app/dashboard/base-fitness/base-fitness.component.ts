import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { FitnessModalComponent } from '../fitness-modal/fitness-modal.component';

@Component({
  selector: 'app-base-fitness',
  templateUrl: './base-fitness.component.html',
  styleUrls: ['./base-fitness.component.css']
})
export class BaseFitnessComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

    openDialog():void {
      let dialogRef = this.dialog.open(FitnessModalComponent, {
        height: '40em',
        width: '40em',
      })
    }

  ngOnInit() {
  }

}
