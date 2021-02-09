import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var switchButton = document.querySelector('.switch-button');
    var switchBtnRight = document.querySelector('.switch-button-case.right');
    var switchBtnLeft = document.querySelector('.switch-button-case.left');
    var activeSwitch = document.querySelector('.active');

    function switchLeft() {
      switchBtnRight.classList.remove('active-case');
      switchBtnLeft.classList.add('active-case');
      
    }

    function switchRight() {
      switchBtnRight.classList.add('active-case');
      switchBtnLeft.classList.remove('active-case');
      

      }
    }
}
