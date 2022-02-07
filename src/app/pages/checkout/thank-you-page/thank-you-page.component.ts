import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `
  <div class="container">
    <h1 class="title">Thank you! </h1>
    <p class="content">
        Your order is on the way!
    </p>
    <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laudantium magnam vero dolorem labore impedit distinctio voluptate aut. Tempore consequatur
         accusamus facilis quasi rem rerum! Tempora repellat deserunt maxime? Est!
    </span>

</div>

`,
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent  {

  constructor() { }


}
