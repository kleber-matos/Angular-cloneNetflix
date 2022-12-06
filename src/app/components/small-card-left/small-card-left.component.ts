import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card-left',
  templateUrl: './small-card-left.component.html',
  styleUrls: ['./small-card-left.component.css']
})
export class SmallCardLeftComponent {


@Input() 
title: string = ''
@Input()
description: string = ''
@Input()
imagem: string = ''


}
