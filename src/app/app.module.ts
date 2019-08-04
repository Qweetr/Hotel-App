import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { FoodBeverageComponent } from "./food-beverage/food-beverage.component";
import { RestaurantComponent } from "./food-beverage/restaurant/restaurant.component";
import { BarsComponent } from "./food-beverage/bars/bars.component";
import { LifestyleComponent } from "./lifestyle/lifestyle.component";
import { WellnessAndSpaComponent } from "./lifestyle/wellness-and-spa/wellness-and-spa.component";
import { ResortActivitiesComponent } from "./lifestyle/resort-activities/resort-activities.component";
import { ExperiencesComponent } from "./lifestyle/experiences/experiences.component";
import { ExcursionsComponent } from "./lifestyle/excursions/excursions.component";
import { WeddingsComponent } from "./weddings/weddings.component";
import { ThaiWeddingsComponent } from "./weddings/thai-weddings/thai-weddings.component";
import { WesternWeddingsComponent } from "./weddings/western-weddings/western-weddings.component";
import { CelebrationsComponent } from "./celebrations/celebrations.component";
import { OffersComponent } from "./offers/offers.component";
import { AuthComponent } from "./auth/auth.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AccommodationComponent } from './accommodation/accommodation.component';
import { RoomsComponent } from './accommodation/rooms/rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodBeverageComponent,
    RestaurantComponent,
    BarsComponent,
    LifestyleComponent,
    WellnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    ThaiWeddingsComponent,
    WesternWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    AccommodationComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
