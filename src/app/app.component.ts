import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  items = [
    {exist: true, title: 'Comment faire des tresses africaines', to: 'Comment-faire-des-tresses-africaines'},
    {exist: true, title: 'Comment faire des vanilles', to: 'Comment-faire-des-vanilles'},
    {exist: true, title: 'Comment faire des braids', to: 'Comment-faire-des-braids'},
    {exist: true, title: 'Comment faire des lemonade braids', to: 'Comment-faire-des-lemonade-braids'},
    {exist: true, title: 'Comment faire des knotless braids', to: 'Comment-faire-des-knotless-braids'},
    {exist: true, title: 'Comment faire des crochets braids', to: 'Comment-faire-des-crochets-braids'},
    {exist: true, title: 'Comment faire des fulani braids', to: 'Comment-faire-des-fulani-braids'},
    {exist: true, title: 'Comment faire des senegalese twist', to: ''},
    {exist: true, title: 'Comment faire des cornrows', to: ''},
    {exist: true, title: 'Comment faire des fausses locks', to: ''},
    {exist: true, title: 'Comment faire des bantu knots', to: ''},
  ]

  number = [1,2,3,4,5]

  constructor(){
  }
}
