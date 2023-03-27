import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
  NgForm,
} from '@angular/forms';
/**
 * @title Basic expansion panel
 *
 */
import { Arr } from './model';
import { listenOnPlayer } from '@angular/animations/browser/src/render/shared';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
  rows1 = [];
  rows2 = [];
  Scenerio = '';
  tag = '';
  file_content = '';
  content = {};
  

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onAddRow();
    this.onAddRow2();
  }

  onAddRow() {
    this.rows1.push({
      pre: '',
      pre_varibles: '',
      pre_values: '',
    });
  }
  onAddRow2() {
    this.rows2.push({
      post: '',
      post_varibles: '',
      post_values: '',
    });
  }

  onRemoveRow() {
    this.rows1.pop();
  }
  onRemoveRow2() {
    this.rows2.pop();
  }

  generate_feature() {
    console.log(this.rows1);

    for (let row of this.rows2) {
      console.log(row);
    }
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
