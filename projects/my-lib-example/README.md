# Angular Custom Library

**Dependency**
```
"@angular/common": "^16.2.0"
"@angular/core": "^16.2.0"
"tslib": "^2.3.0"
```

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
    formControlName="email"
>
</rabi-input>
```

give the property valu as instructed