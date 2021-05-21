import {
    Component,
    ElementRef,
    ViewChild,
    ViewEncapsulation
  } from '@angular/core';
  import { WizardStepStatus } from '@fundamental-ngx/core';
  
  @Component({
    selector: 'fd-wizard-customizable-example',
    templateUrl: './wizard-customizable-example.component.html',
    styleUrls: ['./wizard-customizable-example.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
      class: 'fd-wizard-example'
    }
  })
  export class WizardCustomizableExampleComponent {
    /**
     * documentation related property
     * provides access to the HTML element with "overlay" reference
     */
    @ViewChild('overlay')
    overlay: ElementRef<HTMLElement>;
  
    /**
     * documentation related property
     * specifies if the doc example is rendered in fullscreen or not
     */
    fullscreen = false;
  
    step1status: WizardStepStatus = 'current';
    step2status: WizardStepStatus = 'upcoming';
    step3status: WizardStepStatus = 'upcoming';
    step1aStatus: WizardStepStatus = 'upcoming';
    step1aEnabled = false;
  
    statusChanged(stepNumber: number, event: WizardStepStatus): void {
      if (event === 'current') {
        this.goToStep(stepNumber);
      }
    }
  
    enableStep1a() {
      this.step1aEnabled = true;
      this.goToStep(1.1);
    }
  
    goToStep(step: number): void {
      switch (step) {
        case 1: {
          this.step1status = 'current';
          this.step2status = 'upcoming';
          this.step1aStatus = 'upcoming';
          this.step3status = 'upcoming';
          break;
        }
        case 1.1: {
          this.step1status = 'completed';
          this.step1aStatus = 'current';
          this.step2status = 'upcoming';
          this.step3status = 'upcoming';
          break;
        }
        case 2: {
          this.step1status = 'completed';
          if (this.step1aEnabled) {
            this.step1aStatus = 'completed';
          }
          this.step2status = 'current';
          this.step3status = 'upcoming';
          break;
        }
        case 3: {
          this.step1status = 'completed';
          if (this.step1aEnabled) {
            this.step1aStatus = 'completed';
          }
          this.step2status = 'completed';
          this.step3status = 'current';
          break;
        }
      }
    }
  
    /**
     * documentation related function
     * opens the example in full screen
     */
    enterFullscreenExample(): void {
      this.goToStep(1);
      this.fullscreen = true;
      this.overlay.nativeElement.style.width = '100%';
    }
  
    /**
     * documentation related function
     * exits the full screen mode of the example
     */
    exitFullscreenExample(event: Event): void {
      event.stopPropagation();
      this.fullscreen = false;
      this.overlay.nativeElement.style.width = '0%';
    }
  }
  