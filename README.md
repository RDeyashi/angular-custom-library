# Angular Custom Library

**Dependency**
```
"@angular/common": "^16.2.0"
"@angular/core": "^16.2.0"
"tslib": "^2.3.0"
```

**Import**
`Import MyLibraryExampleModule in your app module import section`

## 1. Input

**Selector:** ```<rabi-input>```

**How to use**

```
<rabi-input 
    [labelText]="'Email'"
    [placeholderText]="'Enter email'"
    [setWidth]="'334px'"
    [setHeight]="'40px'"
    [type]="'email'"
    [filedName]="'email'"
    [parentForm]="testForm" (FormGroup name)
    [errorMessage]="'Invalid Email Address'"
    formControlName="email"
>
</rabi-input>
```

give the property value as instructed



## 1. Button

**Selector:** ```<rabi-button>```

**How to use**

```
<rabi-button
    [btnText]="'Submit'"
    [btnWidth]="'92px'"
    [btnHeight]="'48px'"
    [btnType]="'primary'"
    [isBtnDisable]="false"
    [isBtnRound]="false"
    (clickedBtnResponse)="onClickForm()"
>
</rabi-button>
```

give the property value as instructed and write the **onClickForm()** function logic to your .ts file