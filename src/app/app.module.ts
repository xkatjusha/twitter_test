import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwitterComponent } from './twitter/twitter.component';
import { SavedPostsComponent } from './savedPosts/savedPosts.component';
import { ResponseComponent } from './response/response.component';

@NgModule({
  declarations: [				
    AppComponent,
      TwitterComponent,
      SavedPostsComponent,
      ResponseComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
