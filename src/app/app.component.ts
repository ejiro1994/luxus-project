import {
    Component
} from '@angular/core';
import {
    Router
} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'luxus-project';

    constructor(private router: Router) {}

    navigateTo = function (value) {
        if (value) {
            this.router.navigate([value]);
        }
        return false;
    }
}
