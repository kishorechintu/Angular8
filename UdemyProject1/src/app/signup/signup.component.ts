import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormsModule,
  FormArray,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { CountriesService } from "../services/countries.service";
import { Country } from "../Modals/country";
import { CustomValidatorsService } from "../services/custom-validators.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  countries: Country[] = [];
  genders = ["male", "female"];

  constructor(
    private _countriesService: CountriesService,
    private _fb: FormBuilder,
    private _customValidatorService: CustomValidatorsService
  ) {}

  ngOnInit(): void {
    this.countries = this._countriesService.getCountries();
    this.signUpForm = this._fb.group(
      {
        personName: this._fb.group({
          firstName: [null, [Validators.required, Validators.minLength(3)]],
          lastName: null,
        }),
        email: [null, [Validators.email, Validators.required]],
        mobile: [
          null,
          [Validators.pattern(/^[789]\d{9}$/), Validators.required],
        ],
        dateOfBirth: [
          null,
          [
            Validators.required,
            this._customValidatorService.minimumAgeValidator(18),
          ],
        ],
        password: [null, [Validators.required]],
        confirmPassword: [null, [Validators.required]],
        gender: [null, [Validators.required]],
        countryID: [null, [Validators.required]],
        receiveNewsLetters: null,
        skills: this._fb.array([]),
        newTest: null,
      },

      {
        validators: [
          this._customValidatorService.compareValidator(
            "confirmPassword",
            "password"
          ),
        ],
      }
    );
    this.onAddClick();
  }
  onAddClick() {
    var formGroup = this._fb.group({
      skillName: [null, [Validators.required]],
      level: [null, [Validators.required]],
    });
    (<FormArray>this.signUpForm.get("skills")).push(formGroup);
  }
  onRemoveClick(index: number) {
    (<FormArray>this.signUpForm.get("skills")).removeAt(index);
  }
  onSubmit() {
    console.log(this.signUpForm.value);
  }
  test() {}
}
