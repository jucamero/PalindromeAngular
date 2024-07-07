import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  inputText: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome(): void {
    const sanitizedInput = this.inputText.replace(/[\W_]/g, '').toLowerCase();
    const reversedInput = sanitizedInput.split('').reverse().join('');
    this.isPalindrome = sanitizedInput === reversedInput;
    setTimeout(() => {
      this.inputText = '';  
      this.isPalindrome = null;  
    }, 2000);  
  }

  
}