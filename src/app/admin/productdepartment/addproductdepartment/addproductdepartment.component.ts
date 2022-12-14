import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ProductdepartmentService } from "../allproductsdepartment/productdepartment.service";
@Component({
  selector: "app-addproductdepartment",
  templateUrl: "./addproductdepartment.component.html",
  styleUrls: ["./addproductdepartment.component.sass"],
})
export class AddProductdepartmentComponent {
  productdepartmentForm: FormGroup;
  constructor(private fb: FormBuilder,
    public productdepartmentService: ProductdepartmentService,
    private snackBar: MatSnackBar,
    ) {
     this.productdepartmentForm = this.fb.group({
      name: ['', {
        validators: [Validators.required, Validators.maxLength(64)]
      }],
      eName: ['', {
        validators: [Validators.required, Validators.maxLength(64)]
      }],
      isActive: [false],
      displayOrder: [0],
    });
  }
  uploadedFiles: any[] = [];

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
  }

  showNotification(colorName, text, placementFrom, placementAlign, duration) {
    this.snackBar.open(text, "", {
      duration: duration,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  onSubmit() {
    this.productdepartmentService.addProductdepartment(this.productdepartmentForm.value).subscribe(data => {
      this.productdepartmentForm.reset();
      this.showNotification(
        "snackbar-success",
        data.messages[0],
        "bottom",
        "center",
        2000
      );
    },
      (err) => {
        console.log(err.error.status)
        this.showNotification(
          "snackbar-danger",
          err.error,
          "bottom",
          "center",
          4000
        );
      }
    );
  }
}
