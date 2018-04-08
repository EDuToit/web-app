import {Component, OnInit} from '@angular/core';
import {GolfCourse} from './GolfCourse';
import {Http} from "@angular/http";

@Component({
    selector: 'demo-api',
    template: `
        <ul>
            <li *ngFor="let course of courses">
                <strong></strong><br>
                Name : {{course.courseName}}<br>
                Course ID : {{course.courseId}}<br>
                Created AT : {{course.createdAt}}<br>
                Updated AT : {{course.updatedAt}}<br>
            </li>
        </ul>
    `
})

export class ApiDemoComponent implements OnInit {

    constructor(private _httpService: Http) {
    }

    ngOnInit() {
        this._httpService.get('http://localhost:8001/golfcourse/getcourses').subscribe(values => {
            this.courses = values.json() as GolfCourse[];
        });
    }

    courses: GolfCourse[] = [];
}

