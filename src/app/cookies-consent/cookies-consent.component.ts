import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookies-consent.component.html',
  styleUrls: ['./cookies-consent.component.scss']
})
export class CookieConsentComponent implements OnInit {
  isVisible = false;

  ngOnInit(): void {
    const consent = localStorage.getItem('cookieConsent');

    if (!consent) {
      this.isVisible = true;
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookieConsent', 'accepted');
    this.isVisible = false;
  }
}