import { Injectable } from "@angular/core";
import { Country } from "../Modals/country";
import { UseExistingWebDriver } from "protractor/built/driverProviders";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CountriesService {
  public users = [
    {
      id: 111,
      emailId: "kishore.p29@gmail.com",
    },
    {
      id: 222,
      emailId: "chintuchinni@gmail.com",
    },
    {
      id: 333,
      emailId: "kumar.p29@gmail.com",
    },
  ];
  constructor() {}
  getCountries(): Country[] {
    return [
      new Country(1, "India"),
      new Country(2, "Australia"),
      new Country(3, "USA"),
      new Country(4, "Japan"),
      new Country(5, "UK"),
    ];
  }
}
