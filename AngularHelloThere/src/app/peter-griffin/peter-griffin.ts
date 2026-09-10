import { Component } from '@angular/core';

@Component({
  selector: 'app-peter-griffin',
  standalone: false,
  templateUrl: './peter-griffin.html',
  styleUrl: './peter-griffin.css',
})
export class PeterGriffin {
  firstName: String="Peter"
  lastName: String="Griffin";
  petersNumbers: number[]=[1, 2, 3, 4, 5];
}
