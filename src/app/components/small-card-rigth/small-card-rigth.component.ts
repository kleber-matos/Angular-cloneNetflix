import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card-rigth',
  templateUrl: './small-card-rigth.component.html',
  styleUrls: ['./small-card-rigth.component.css']
})
export class SmallCardRigthComponent {
 
@Input() 
title: string = ''
@Input()
description: string = ''
@Input()
imagem: string = ''

}
