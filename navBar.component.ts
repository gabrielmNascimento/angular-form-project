import { Component } from '@angular/core';

@Component({
    selector: 'navBar',
    templateUrl:"./navBar.component.html",
    styleUrls: ["./navBar.component.css"],
})

export class navBar {

    toggleImage(selected: String) {
        var logos = document.getElementsByClassName("logos")
        
        for(var i = 0; i < logos.length; i++)
        {
            logos[i].classList.remove('active')
        }

        switch (selected)
        {
            case "dragonBall":
                logos[1].classList.add('active')
                break;
            case "football":
                logos[2].classList.add('active')
                break;
            case "hero":
                logos[3].classList.add('active')
                break;
            case "ninja":
                logos[4].classList.add('active')
                break;
            case "basketball":
                logos[5].classList.add('active')
                break;

            default:
                logos[0].classList.add('active')
                break;
        }
    }
}