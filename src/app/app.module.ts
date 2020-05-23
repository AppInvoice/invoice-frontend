import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserSelectorComponent } from './components/user-selector/user-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSelectorComponent,
    UserDetailsComponent,
    UserContainerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
