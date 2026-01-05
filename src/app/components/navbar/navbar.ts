import { Domservice } from './../../services/domservice';
import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatIconModule, NgClass, NgIf],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isDrawerToggle = false;

  toggleSidebar() {
    this.isDrawerToggle = !this.isDrawerToggle;
  }
}
