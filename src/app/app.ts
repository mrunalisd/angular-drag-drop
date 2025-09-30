import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  DragDropModule, 
  CdkDragDrop, 
  moveItemInArray, 
  transferArrayItem 
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  todo = ['Learn Angular', 'Build Project', 'Read Docs'];
  inProgress = ['Setup Environment'];
  done = ['Install Angular CLI'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
