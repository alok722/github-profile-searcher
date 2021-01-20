import { Component, Input, OnInit, OnChanges, ChangeDetectorRef, } from '@angular/core';
import { GithubService } from './../../services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {

  @Input() repoUrl: string;
  repos = [];

  constructor(private githubService: GithubService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.repoUrl) {
      this.githubService.getRepos(this.repoUrl).subscribe(
        (repos: []) => {
          this.repos = repos;
          console.log('repos details', this.repos)
          this.ref.detectChanges();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

}
