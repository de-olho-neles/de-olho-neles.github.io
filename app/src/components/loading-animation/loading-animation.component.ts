import { OnInit, Component } from "@angular/core"

@Component ({
    selector: "loading-animation",
    template: `
    <div class="loader"></div>
    <style>
    .loader {
        border: 8px solid #B6D6CC; /* Light grey */
        border-top: 8px solid #FB6107; /* Blue */
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 1.5s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>`
})

export class LoadingAnimationComponent implements OnInit {
    ngOnInit() {
    }
}