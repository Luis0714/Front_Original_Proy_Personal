import { Component } from '@angular/core';
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent {
  faRightFromBracket = faRightFromBracket;
}
