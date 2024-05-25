import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/api/services';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class BackupComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private databaseService: DatabaseService ) {}

  ngOnInit(): void {
    this.databaseService.apiDatabaseBackupPost$Response().subscribe({
      next: (response: any) => {
        console.log(response);
        alert("Backup was successfully created");
      },
      error: (err) => {
        alert("Backup failed");
      }
    });
    this.router.navigateByUrl('home');
  }

}
