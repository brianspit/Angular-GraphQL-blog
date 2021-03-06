import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router'
import { ApolloQueryObservable } from 'apollo-angular';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts: ApolloQueryObservable<Post>;

    constructor(
        private router: Router,
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.posts = this.dataService.getPosts();
    }

    onSelect(post: Post) {
        this.router.navigate(['/', post.id]);
    }
}

interface Post {
    id: number;
    title: string;
    body: string;
    createdAt: string;
    author: {
        username: string;
    }
}