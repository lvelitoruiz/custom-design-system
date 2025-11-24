import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ButtonComponent,
  InputComponent,
  TextareaComponent,
  SelectComponent,
  CheckboxComponent,
  RadioComponent,
  SwitchComponent,
  BadgeComponent,
  SpinnerComponent,
  CardComponent,
  AlertComponent,
  SelectOption
} from '@luisvelito/angular';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideUser, lucideSettings, lucideStar, lucideInfo, lucideCircleCheck, lucideTriangleAlert, lucideCircleX } from '@ng-icons/lucide';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent,
    BadgeComponent,
    SpinnerComponent,
    CardComponent,
    AlertComponent,
    NgIconComponent
  ],
  providers: [
    provideIcons({
      lucideUser,
      lucideSettings,
      lucideStar,
      lucideInfo,
      lucideCircleCheck,
      lucideTriangleAlert,
      lucideCircleX
    })
  ],
  template: `
    <div class="min-h-screen bg-background">
      <!-- Navigation -->
      <div class="sticky top-0 z-50 bg-card border-b border-border px-6 py-4 shadow-sm">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <h1 class="text-2xl font-bold text-foreground">Angular Component Library Preview</h1>
          <div class="flex items-center gap-4">
            <button
              (click)="toggleTheme()"
              class="flex items-center gap-2 px-3 py-2 rounded-md bg-muted hover:bg-muted/80 text-foreground transition-colors"
              [attr.aria-label]="'Toggle theme'"
            >
              <svg *ngIf="isDark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
              <svg *ngIf="!isDark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
              <span class="text-sm font-medium">{{ isDark ? 'Light' : 'Dark' }}</span>
            </button>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto p-6 space-y-12">
        
        <!-- HEADER SECTION -->
        <section class="text-center">
          <div class="max-w-4xl mx-auto">
            <p class="text-lg text-muted-foreground mb-6">
              Comprehensive Angular component library with advanced functionalities including validation, auto-resize, 
              keyboard navigation, and modern Angular 20 patterns.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div class="p-4 bg-card rounded-lg border">
                <h4 class="font-semibold text-primary mb-2">✨ Angular 20 Features</h4>
                <p class="text-muted-foreground">Standalone components, control value accessor, and modern patterns</p>
              </div>
              <div class="p-4 bg-card rounded-lg border">
                <h4 class="font-semibold text-primary mb-2">🎯 Type Safety</h4>
                <p class="text-muted-foreground">Full TypeScript support with strict typing and reactive forms</p>
              </div>
              <div class="p-4 bg-card rounded-lg border">
                <h4 class="font-semibold text-primary mb-2">♿ Accessibility</h4>
                <p class="text-muted-foreground">Complete ARIA attributes, focus management, and screen reader support</p>
              </div>
            </div>
          </div>
        </section>
        
        <!-- ATOMS SECTION -->
        <section>
          <h2 class="text-3xl font-bold mb-8 text-foreground">Atoms</h2>
          
          <!-- Button -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Button</h3>
            <div class="flex flex-wrap gap-4">
              <ui-button variant="primary" size="sm">Primary Small</ui-button>
              <ui-button variant="primary" size="md">Primary Medium</ui-button>
              <ui-button variant="primary" size="lg">Primary Large</ui-button>
              <ui-button variant="secondary" size="md">Secondary</ui-button>
              <ui-button variant="ghost" size="md">Ghost</ui-button>
              <ui-button variant="outline" size="md">Outline</ui-button>
              <ui-button variant="destructive" size="md">Destructive</ui-button>
              <ui-button variant="link" size="md">Link</ui-button>
              <ui-button variant="primary" size="md" [loading]="true">Loading</ui-button>
              <ui-button variant="primary" size="md" [disabled]="true">Disabled</ui-button>
            </div>
          </div>

          <!-- Input -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Input</h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Basic States</p>
                <div class="space-y-4 max-w-md">
                  <ui-input placeholder="Normal input" [(ngModel)]="normalInput"></ui-input>
                  <ui-input placeholder="Disabled input" [disabled]="true"></ui-input>
                  <ui-input placeholder="Error input" [invalid]="true"></ui-input>
                </div>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Advanced Features</p>
                <div class="space-y-4 max-w-md">
                  <ui-input 
                    placeholder="Email validation" 
                    [(ngModel)]="emailValue"
                    [validation]="[{type: 'email', message: 'Please enter a valid email'}]"
                    [validateOnBlur]="true"
                    (validationChange)="onEmailValidation($event)"
                    [leftIcon]="true"
                    [clearable]="true"
                  >
                    <ng-icon slot="leftIcon" name="lucideUser" size="16"></ng-icon>
                  </ui-input>
                  
                  <ui-input 
                    placeholder="Phone validation" 
                    [(ngModel)]="phoneValue"
                    [validation]="[{type: 'phone', message: 'Please enter a valid phone number'}]"
                    [validateOnChange]="true"
                    (validationChange)="onPhoneValidation($event)"
                    [debounceMs]="300"
                    [clearable]="true"
                  ></ui-input>
                  
                  <ui-input 
                    placeholder="Loading state" 
                    [(ngModel)]="passwordValue"
                    [loading]="inputLoading"
                    [leftIcon]="true"
                    [rightIcon]="true"
                  >
                    <ng-icon slot="leftIcon" name="lucideSettings" size="16"></ng-icon>
                    <ng-icon slot="rightIcon" name="lucideStar" size="16"></ng-icon>
                  </ui-input>
                  
                  <ui-button (click)="simulateLoading()" size="sm" [disabled]="inputLoading">
                    {{ inputLoading ? 'Loading...' : 'Simulate Loading' }}
                  </ui-button>
                </div>
              </div>
            </div>
          </div>

          <!-- Textarea -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Textarea</h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Basic States</p>
                <div class="space-y-4 max-w-md">
                  <ds-textarea placeholder="Enter your message..." [(ngModel)]="textareaValue"></ds-textarea>
                  <ds-textarea placeholder="Disabled textarea" [disabled]="true"></ds-textarea>
                </div>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Auto-Resize Features</p>
                <div class="space-y-4 max-w-md">
                  <ds-textarea 
                    placeholder="Auto-resize (min 2, max 6 rows)" 
                    [(ngModel)]="autoResizeValue"
                    [autoResize]="true"
                    [minRows]="2"
                    [maxRows]="6"
                  ></ds-textarea>
                  
                  <ds-textarea 
                    placeholder="Auto-resize unlimited" 
                    [autoResize]="true"
                    [minRows]="3"
                  ></ds-textarea>
                  
                  <ds-textarea 
                    placeholder="Non-resizable" 
                    [resizable]="false"
                  ></ds-textarea>
                </div>
              </div>
            </div>
          </div>

          <!-- Select -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Select</h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Basic Select</p>
                <div class="space-y-4 max-w-md">
                  <ds-select 
                    placeholder="Choose an option..." 
                    [options]="selectOptions"
                    [(ngModel)]="selectedValue"
                  ></ds-select>
                </div>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Advanced Features</p>
                <div class="space-y-4 max-w-md">
                  <div>
                    <ds-select 
                      placeholder="Search countries..." 
                      [options]="countryOptions"
                      [(ngModel)]="searchableSelectValue"
                      [searchable]="true"
                      [clearable]="true"
                    ></ds-select>
                    <p class="text-xs text-muted-foreground mt-1">
                      ⌨️ Try: Arrow keys, Enter, Escape, typing to search
                    </p>
                  </div>
                  
                  <ds-select 
                    placeholder="Loading state..." 
                    [options]="selectOptions"
                    [loading]="true"
                    [disabled]="true"
                  ></ds-select>
                  
                  <ds-select 
                    placeholder="Select with custom height..." 
                    [options]="selectOptions"
                    [(ngModel)]="multiSelectValue"
                    [maxMenuHeight]="150"
                    [clearable]="true"
                  ></ds-select>
                </div>
              </div>
            </div>
          </div>

          <!-- Checkbox -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Checkbox</h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Basic States</p>
                <div class="space-y-3">
                  <ds-checkbox 
                    label="Accept terms and conditions" 
                    [(ngModel)]="checkbox1"
                  ></ds-checkbox>
                  <ds-checkbox 
                    label="Subscribe to newsletter" 
                    [(ngModel)]="checkbox2"
                  ></ds-checkbox>
                  <ds-checkbox 
                    label="Send me promotional emails" 
                    [(ngModel)]="checkbox3"
                  ></ds-checkbox>
                  <ds-checkbox 
                    label="Disabled checkbox" 
                    [disabled]="true"
                  ></ds-checkbox>
                </div>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Indeterminate State (Select All)</p>
                <div class="space-y-3 p-4 border border-border rounded-lg">
                  <ds-checkbox
                    label="Select All"
                    [(ngModel)]="isAllSelected"
                    [indeterminate]="isSomeSelected"
                    (ngModelChange)="handleSelectAllChange($event)"
                  ></ds-checkbox>
                  <div class="ml-6 space-y-2">
                    <ds-checkbox
                      label="Option 1"
                      [(ngModel)]="checkboxGroup.option1"
                      (ngModelChange)="updateSelectAllState()"
                    ></ds-checkbox>
                    <ds-checkbox
                      label="Option 2"
                      [(ngModel)]="checkboxGroup.option2"
                      (ngModelChange)="updateSelectAllState()"
                    ></ds-checkbox>
                    <ds-checkbox
                      label="Option 3"
                      [(ngModel)]="checkboxGroup.option3"
                      (ngModelChange)="updateSelectAllState()"
                    ></ds-checkbox>
                    <ds-checkbox
                      label="Option 4"
                      [(ngModel)]="checkboxGroup.option4"
                      (ngModelChange)="updateSelectAllState()"
                    ></ds-checkbox>
                  </div>
                  <p class="text-xs text-muted-foreground mt-2">
                    Selected: {{ selectedCount }} of {{ totalCount }}
                  </p>
                </div>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Inline Layout</p>
                <div class="flex gap-4 flex-wrap">
                  <ds-checkbox 
                    label="Option A" 
                    [inline]="true"
                    [(ngModel)]="inlineCheckbox1"
                  ></ds-checkbox>
                  <ds-checkbox 
                    label="Option B" 
                    [inline]="true"
                    [(ngModel)]="inlineCheckbox2"
                  ></ds-checkbox>
                  <ds-checkbox 
                    label="Option C" 
                    [inline]="true"
                    [(ngModel)]="inlineCheckbox3"
                  ></ds-checkbox>
                  <ds-checkbox 
                    label="Disabled" 
                    [inline]="true"
                    [disabled]="true"
                  ></ds-checkbox>
                </div>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Validation States</p>
                <div class="space-y-3">
                  <ds-checkbox 
                    label="Normal checkbox"
                    [(ngModel)]="validationCheckbox1"
                  ></ds-checkbox>
                  <ds-checkbox 
                    label="Invalid checkbox"
                    [invalid]="true"
                    [(ngModel)]="validationCheckbox2"
                  ></ds-checkbox>
                  <ds-checkbox 
                    label="Required checkbox"
                    [(ngModel)]="validationCheckbox3"
                    [class]="!validationCheckbox3 ? 'border-destructive' : ''"
                  ></ds-checkbox>
                  <p *ngIf="!validationCheckbox3" class="text-sm text-destructive ml-6">
                    This field is required
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Radio -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Radio</h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Basic Radio Group</p>
                <div class="space-y-3">
                  <ds-radio 
                    label="Option 1" 
                    name="basic-radio"
                    value="1"
                    [checked]="selectedRadio === '1'"
                    (checkedChange)="selectedRadio = '1'"
                  ></ds-radio>
                  <ds-radio 
                    label="Option 2" 
                    name="basic-radio"
                    value="2"
                    [checked]="selectedRadio === '2'"
                    (checkedChange)="selectedRadio = '2'"
                  ></ds-radio>
                  <ds-radio 
                    label="Option 3" 
                    name="basic-radio"
                    value="3"
                    [checked]="selectedRadio === '3'"
                    (checkedChange)="selectedRadio = '3'"
                  ></ds-radio>
                  <ds-radio 
                    label="Disabled option" 
                    name="basic-radio"
                    value="4"
                    [disabled]="true"
                  ></ds-radio>
                </div>
                <p *ngIf="selectedRadio" class="text-sm text-muted-foreground mt-2">
                  Selected: Option {{ selectedRadio }}
                </p>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Inline Layout</p>
                <div class="flex gap-4 flex-wrap">
                  <ds-radio 
                    label="Option A" 
                    name="inline-radio"
                    value="a"
                    [inline]="true"
                    [checked]="inlineRadio === 'a'"
                    (checkedChange)="inlineRadio = 'a'"
                  ></ds-radio>
                  <ds-radio 
                    label="Option B" 
                    name="inline-radio"
                    value="b"
                    [inline]="true"
                    [checked]="inlineRadio === 'b'"
                    (checkedChange)="inlineRadio = 'b'"
                  ></ds-radio>
                  <ds-radio 
                    label="Option C" 
                    name="inline-radio"
                    value="c"
                    [inline]="true"
                    [checked]="inlineRadio === 'c'"
                    (checkedChange)="inlineRadio = 'c'"
                  ></ds-radio>
                </div>
              </div>
            </div>
          </div>

          <!-- Switch -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Switch</h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Basic Switches</p>
                <div class="space-y-3">
                  <ds-switch 
                    label="Enable notifications" 
                    [(ngModel)]="switch1"
                  ></ds-switch>
                  <ds-switch 
                    label="Dark mode" 
                    [(ngModel)]="switch2"
                  ></ds-switch>
                  <ds-switch 
                    label="Auto-save" 
                    [(ngModel)]="switch3"
                  ></ds-switch>
                  <ds-switch 
                    label="Disabled switch" 
                    [disabled]="true"
                  ></ds-switch>
                </div>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Without Labels</p>
                <div class="flex gap-4">
                  <ds-switch [(ngModel)]="switch1"></ds-switch>
                  <ds-switch [(ngModel)]="switch2"></ds-switch>
                  <ds-switch [disabled]="true"></ds-switch>
                </div>
              </div>
            </div>
          </div>

          <!-- Badge -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Badge</h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Variants</p>
                <div class="flex gap-2 flex-wrap">
                  <ds-badge variant="primary">Primary</ds-badge>
                  <ds-badge variant="secondary">Secondary</ds-badge>
                  <ds-badge variant="success">Success</ds-badge>
                  <ds-badge variant="warning">Warning</ds-badge>
                  <ds-badge variant="danger">Danger</ds-badge>
                </div>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Sizes</p>
                <div class="flex gap-2 flex-wrap items-center">
                  <ds-badge size="sm">Small</ds-badge>
                  <ds-badge size="md">Medium</ds-badge>
                  <ds-badge size="lg">Large</ds-badge>
                </div>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Rounded</p>
                <div class="flex gap-2 flex-wrap">
                  <ds-badge [rounded]="true">New</ds-badge>
                  <ds-badge variant="success" [rounded]="true">Active</ds-badge>
                  <ds-badge variant="danger" [rounded]="true">99+</ds-badge>
                </div>
              </div>
            </div>
          </div>

          <!-- Spinner -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Spinner</h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Sizes</p>
                <div class="flex gap-4 items-center">
                  <ds-spinner size="sm"></ds-spinner>
                  <ds-spinner size="md"></ds-spinner>
                  <ds-spinner size="lg"></ds-spinner>
                </div>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Loading Button</p>
                <button class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md">
                  <ds-spinner size="sm"></ds-spinner>
                  Loading...
                </button>
              </div>
            </div>
          </div>

          <!-- Card -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Card</h3>
            <div class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ds-card title="Simple Card" description="This is a basic card component">
                  <p class="text-sm text-muted-foreground">Card content goes here. You can add any content you want.</p>
                </ds-card>

                <ds-card title="With Shadow" description="Card with medium shadow" shadow="md">
                  <p class="text-sm text-muted-foreground">This card has more prominent shadow.</p>
                </ds-card>

                <ds-card title="Bordered Card" [bordered]="true">
                  <p class="text-sm text-muted-foreground">This card has a border instead of shadow.</p>
                </ds-card>

                <ds-card 
                  title="Large Padding" 
                  description="More spacious layout"
                  padding="lg"
                  [bordered]="true"
                >
                  <p class="text-sm text-muted-foreground">This card has larger padding.</p>
                </ds-card>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Card with Header and Footer</p>
                <ds-card [hasHeader]="true" [hasFooter]="true" [bordered]="true">
                  <div slot="header" class="p-4 bg-muted">
                    <h4 class="font-semibold">Card Header</h4>
                  </div>
                  <p class="text-sm text-muted-foreground">Main card content with header and footer sections.</p>
                  <div slot="footer" class="flex justify-end gap-2">
                    <button class="px-3 py-1.5 text-sm border border-border rounded-md hover:bg-muted">Cancel</button>
                    <button class="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md">Save</button>
                  </div>
                </ds-card>
              </div>
            </div>
          </div>

          <!-- Alert -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Alert</h3>
            <div class="space-y-4">
              <ds-alert 
                variant="info" 
                title="Information" 
                description="This is an informational alert message."
                [hasIcon]="true"
              >
                <ng-icon slot="icon" name="lucideInfo" size="20"></ng-icon>
              </ds-alert>

              <ds-alert 
                variant="success" 
                title="Success!" 
                description="Your changes have been saved successfully."
                [hasIcon]="true"
              >
                <ng-icon slot="icon" name="lucideCircleCheck" size="20"></ng-icon>
              </ds-alert>

              <ds-alert 
                variant="warning" 
                title="Warning" 
                description="Please review your information before proceeding."
                [hasIcon]="true"
              >
                <ng-icon slot="icon" name="lucideTriangleAlert" size="20"></ng-icon>
              </ds-alert>

              <ds-alert 
                variant="danger" 
                title="Error" 
                description="There was an error processing your request."
                [hasIcon]="true"
                [closable]="true"
                (close)="showAlert = false"
                *ngIf="showAlert"
              >
                <ng-icon slot="icon" name="lucideCircleX" size="20"></ng-icon>
              </ds-alert>

              <button 
                *ngIf="!showAlert"
                (click)="showAlert = true"
                class="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md"
              >
                Show Error Alert
              </button>
            </div>
          </div>

        </section>

        <!-- FORM EXAMPLES SECTION -->
        <section>
          <h2 class="text-3xl font-bold mb-8 text-foreground">Form Examples</h2>
          
          <!-- Contact Form -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Contact Form</h3>
            <div class="max-w-2xl space-y-6 p-6 bg-card rounded-lg border">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <ui-input 
                    placeholder="Enter your first name" 
                    [(ngModel)]="form.firstName"
                    [fullWidth]="true"
                  ></ui-input>
                </div>
                <div>
                  <label class="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <ui-input 
                    placeholder="Enter your last name" 
                    [(ngModel)]="form.lastName"
                    [fullWidth]="true"
                  ></ui-input>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <ui-input 
                  type="email"
                  placeholder="Enter your email" 
                  [(ngModel)]="form.email"
                  [fullWidth]="true"
                ></ui-input>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Subject</label>
                <ds-select 
                  placeholder="Choose a subject..." 
                  [options]="subjectOptions"
                  [(ngModel)]="form.subject"
                  [fullWidth]="true"
                ></ds-select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Message</label>
                <ds-textarea 
                  placeholder="Enter your message..." 
                  [(ngModel)]="form.message"
                  [autoResize]="true"
                  [minRows]="4"
                  [maxRows]="8"
                ></ds-textarea>
              </div>
              
              <div>
                <ds-checkbox 
                  label="I agree to the terms and conditions"
                  [(ngModel)]="form.agreeToTerms"
                ></ds-checkbox>
              </div>
              
              <div class="flex gap-4">
                <ui-button variant="primary" (click)="submitForm()">Send Message</ui-button>
                <ui-button variant="outline" (click)="clearForm()">Clear</ui-button>
              </div>
            </div>
          </div>

          <!-- Settings Form -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Settings Form</h3>
            <div class="max-w-2xl space-y-6 p-6 bg-card rounded-lg border">
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Username</label>
                <ui-input 
                  placeholder="Choose a username" 
                  [(ngModel)]="settings.username"
                  [fullWidth]="true"
                ></ui-input>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Language</label>
                <ds-select 
                  placeholder="Select language..." 
                  [options]="languageOptions"
                  [(ngModel)]="settings.language"
                  [fullWidth]="true"
                ></ds-select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Timezone</label>
                <ds-select 
                  placeholder="Select timezone..." 
                  [options]="timezoneOptions"
                  [(ngModel)]="settings.timezone"
                  [fullWidth]="true"
                ></ds-select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Bio</label>
                <ds-textarea 
                  placeholder="Tell us about yourself..." 
                  [(ngModel)]="settings.bio"
                  [autoResize]="true"
                  [minRows]="3"
                  [maxRows]="6"
                ></ds-textarea>
              </div>
              
              <div class="space-y-3">
                <h4 class="text-sm font-medium text-foreground">Notifications</h4>
                <ds-checkbox 
                  label="Email notifications"
                  [(ngModel)]="settings.notifications.email"
                ></ds-checkbox>
                <ds-checkbox 
                  label="SMS notifications"
                  [(ngModel)]="settings.notifications.sms"
                ></ds-checkbox>
                <ds-checkbox 
                  label="Push notifications"
                  [(ngModel)]="settings.notifications.push"
                ></ds-checkbox>
              </div>
              
              <div class="space-y-3">
                <h4 class="text-sm font-medium text-foreground">Privacy</h4>
                <ds-checkbox 
                  label="Make profile public"
                  [(ngModel)]="settings.privacy.publicProfile"
                ></ds-checkbox>
                <ds-checkbox 
                  label="Show online status"
                  [(ngModel)]="settings.privacy.showOnlineStatus"
                ></ds-checkbox>
                <ds-checkbox 
                  label="Allow direct messages"
                  [(ngModel)]="settings.privacy.allowDirectMessages"
                ></ds-checkbox>
              </div>
              
              <div class="flex gap-4">
                <ui-button variant="primary" (click)="saveSettings()">Save Settings</ui-button>
                <ui-button variant="outline" (click)="resetSettings()">Reset to Default</ui-button>
              </div>
            </div>
          </div>
        </section>

        <!-- COMPONENT COMBINATIONS SECTION -->
        <section>
          <h2 class="text-3xl font-bold mb-8 text-foreground">Component Combinations</h2>
          
          <!-- Search and Filters -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Search and Filters</h3>
            <div class="space-y-6 p-6 bg-card rounded-lg border">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ui-input 
                  placeholder="Search..." 
                  [(ngModel)]="searchValue"
                  [fullWidth]="true"
                ></ui-input>
                <ds-select 
                  placeholder="Category..." 
                  [options]="categoryOptions"
                  [(ngModel)]="filterCategory"
                ></ds-select>
                <ds-select 
                  placeholder="Status..." 
                  [options]="statusOptions"
                  [(ngModel)]="filterStatus"
                ></ds-select>
              </div>
              
              <div class="flex gap-2 flex-wrap">
                <ui-button variant="primary" (click)="applyFilters()">Apply Filters</ui-button>
                <ui-button variant="outline" (click)="clearFilters()">Clear</ui-button>
              </div>
              
              <div *ngIf="hasActiveFilters()" class="space-y-2">
                <p class="text-sm font-medium text-foreground">Active Filters:</p>
                <div class="flex gap-2 flex-wrap">
                  <span *ngIf="searchValue" class="inline-flex items-center px-2 py-1 rounded-md text-xs bg-primary/10 text-primary">
                    Search: {{ searchValue }}
                  </span>
                  <span *ngIf="filterCategory" class="inline-flex items-center px-2 py-1 rounded-md text-xs bg-primary/10 text-primary">
                    Category: {{ filterCategory }}
                  </span>
                  <span *ngIf="filterStatus" class="inline-flex items-center px-2 py-1 rounded-md text-xs bg-primary/10 text-primary">
                    Status: {{ filterStatus }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Multi-step Form Preview -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Multi-step Form Preview</h3>
            <div class="space-y-6 p-6 bg-card rounded-lg border">
              <div class="flex items-center justify-between mb-6">
                <h4 class="text-lg font-medium text-foreground">Step {{ currentStep }} of {{ totalSteps }}</h4>
                <div class="flex gap-2">
                  <div 
                    *ngFor="let step of steps; let i = index"
                    class="w-8 h-1 rounded-full"
                    [class]="i < currentStep ? 'bg-primary' : i === currentStep ? 'bg-primary/50' : 'bg-muted'"
                  ></div>
                </div>
              </div>
              
              <div [ngSwitch]="currentStep">
                <!-- Step 1: Personal Info -->
                <div *ngSwitchCase="1" class="space-y-4">
                  <h5 class="font-medium text-foreground">Personal Information</h5>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <ui-input placeholder="John" [(ngModel)]="multiStepForm.firstName"></ui-input>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <ui-input placeholder="Doe" [(ngModel)]="multiStepForm.lastName"></ui-input>
                    </div>
                  </div>
                </div>
                
                <!-- Step 2: Contact Info -->
                <div *ngSwitchCase="2" class="space-y-4">
                  <h5 class="font-medium text-foreground">Contact Information</h5>
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-foreground mb-2">Email</label>
                      <ui-input type="email" placeholder="john@example.com" [(ngModel)]="multiStepForm.email"></ui-input>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <ui-input type="tel" placeholder="+1 (555) 123-4567" [(ngModel)]="multiStepForm.phone"></ui-input>
                    </div>
                  </div>
                </div>
                
                <!-- Step 3: Preferences -->
                <div *ngSwitchCase="3" class="space-y-4">
                  <h5 class="font-medium text-foreground">Preferences</h5>
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-foreground mb-2">Preferred Contact Method</label>
                      <ds-select 
                        placeholder="Choose method..." 
                        [options]="contactMethodOptions"
                        [(ngModel)]="multiStepForm.contactMethod"
                      ></ds-select>
                    </div>
                    <div class="space-y-3">
                      <label class="block text-sm font-medium text-foreground">Interests</label>
                      <ds-checkbox 
                        label="Technology"
                        [(ngModel)]="multiStepForm.interests.technology"
                      ></ds-checkbox>
                      <ds-checkbox 
                        label="Design"
                        [(ngModel)]="multiStepForm.interests.design"
                      ></ds-checkbox>
                      <ds-checkbox 
                        label="Business"
                        [(ngModel)]="multiStepForm.interests.business"
                      ></ds-checkbox>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="flex justify-between pt-6">
                <ui-button 
                  variant="outline" 
                  (click)="previousStep()" 
                  [disabled]="currentStep === 1"
                >
                  Previous
                </ui-button>
                <ui-button 
                  variant="primary" 
                  (click)="nextStep()"
                >
                  {{ currentStep === totalSteps ? 'Submit' : 'Next' }}
                </ui-button>
              </div>
            </div>
          </div>
        </section>

        <!-- FEEDBACK SECTION -->
        <section class="text-center">
          <div class="p-8 bg-card rounded-lg border">
            <h2 class="text-2xl font-bold mb-4 text-foreground">Component Library Status</h2>
            <p class="text-muted-foreground mb-6">
              This Angular component library demonstrates the ported components from React with full functionality.
              All components support form integration, validation, and accessibility features.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div class="p-3 bg-background rounded border">
                <p class="font-semibold text-primary">✅ Components</p>
                <p class="text-muted-foreground">Button, Input, Textarea, Select, Checkbox</p>
              </div>
              <div class="p-3 bg-background rounded border">
                <p class="font-semibold text-primary">✅ Features</p>
                <p class="text-muted-foreground">Auto-resize, Validation, Loading states</p>
              </div>
              <div class="p-3 bg-background rounded border">
                <p class="font-semibold text-primary">✅ Forms</p>
                <p class="text-muted-foreground">NgModel, ControlValueAccessor integration</p>
              </div>
              <div class="p-3 bg-background rounded border">
                <p class="font-semibold text-primary">✅ Theming</p>
                <p class="text-muted-foreground">Design tokens, Light/Dark mode support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-demo';
  isDark = false;
  
  // Basic input values
  normalInput = '';
  emailValue = '';
  phoneValue = '';
  passwordValue = '';
  inputLoading = false;
  
  // Textarea values
  textareaValue = '';
  autoResizeValue = '';
  
  // Select values
  selectedValue = '';
  searchableSelectValue = '';
  multiSelectValue = '';
  
  // Checkbox values
  checkbox1 = false;
  checkbox2 = true;
  checkbox3 = false;
  inlineCheckbox1 = false;
  inlineCheckbox2 = true;
  inlineCheckbox3 = false;
  validationCheckbox1 = false;
  validationCheckbox2 = false;
  validationCheckbox3 = false;
  
  // Radio values
  selectedRadio = '1';
  inlineRadio = 'a';
  
  // Switch values
  switch1 = false;
  switch2 = true;
  switch3 = false;
  
  // Alert
  showAlert = true;
  
  // Checkbox group for indeterminate example
  checkboxGroup = {
    option1: false,
    option2: true,
    option3: false,
    option4: false
  };
  
  // Select all checkbox state (not a getter since we need to bind it)
  isAllSelected = false;
  
  // Contact form
  form = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    agreeToTerms: false
  };
  
  // Settings form
  settings = {
    username: '',
    language: '',
    timezone: '',
    bio: '',
    notifications: {
      email: true,
      sms: false,
      push: true
    },
    privacy: {
      publicProfile: false,
      showOnlineStatus: true,
      allowDirectMessages: true
    }
  };
  
  // Search and filters
  searchValue = '';
  filterCategory = '';
  filterStatus = '';
  
  // Multi-step form
  currentStep = 1;
  totalSteps = 3;
  steps = [1, 2, 3];
  multiStepForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    contactMethod: '',
    interests: {
      technology: false,
      design: false,
      business: false
    }
  };
  
  // Select options
  selectOptions: SelectOption[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Disabled Option', value: 'disabled', disabled: true },
    { label: 'Option 5', value: 'option5' }
  ];
  
  countryOptions: SelectOption[] = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' },
    { label: 'Spain', value: 'es' },
    { label: 'Japan', value: 'jp' },
    { label: 'Australia', value: 'au' }
  ];
  
  sizeOptions: SelectOption[] = [
    { label: 'Extra Small', value: 'xs' },
    { label: 'Small', value: 's' },
    { label: 'Medium', value: 'm' },
    { label: 'Large', value: 'l' },
    { label: 'Extra Large', value: 'xl' }
  ];
  
  priorityOptions: SelectOption[] = [
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
    { label: 'Critical', value: 'critical' }
  ];
  
  subjectOptions: SelectOption[] = [
    { label: 'General Inquiry', value: 'general' },
    { label: 'Technical Support', value: 'support' },
    { label: 'Sales Question', value: 'sales' },
    { label: 'Feedback', value: 'feedback' },
    { label: 'Bug Report', value: 'bug' }
  ];
  
  languageOptions: SelectOption[] = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Italian', value: 'it' },
    { label: 'Portuguese', value: 'pt' }
  ];
  
  timezoneOptions: SelectOption[] = [
    { label: 'UTC-8 (PST)', value: 'pst' },
    { label: 'UTC-5 (EST)', value: 'est' },
    { label: 'UTC+0 (GMT)', value: 'gmt' },
    { label: 'UTC+1 (CET)', value: 'cet' },
    { label: 'UTC+9 (JST)', value: 'jst' }
  ];
  
  categoryOptions: SelectOption[] = [
    { label: 'All Categories', value: '' },
    { label: 'Technology', value: 'tech' },
    { label: 'Design', value: 'design' },
    { label: 'Business', value: 'business' },
    { label: 'Marketing', value: 'marketing' }
  ];
  
  statusOptions: SelectOption[] = [
    { label: 'All Statuses', value: '' },
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Pending', value: 'pending' },
    { label: 'Archived', value: 'archived' }
  ];
  
  contactMethodOptions: SelectOption[] = [
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' },
    { label: 'SMS', value: 'sms' },
    { label: 'Mail', value: 'mail' }
  ];

  // Computed properties for checkbox group
  get selectedCount(): number {
    return Object.values(this.checkboxGroup).filter(Boolean).length;
  }
  
  get totalCount(): number {
    return Object.keys(this.checkboxGroup).length;
  }
  
  get isSomeSelected(): boolean {
    const count = this.selectedCount;
    return count > 0 && count < this.totalCount;
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  simulateLoading(): void {
    this.inputLoading = true;
    setTimeout(() => this.inputLoading = false, 2000);
  }

  onEmailValidation(event: {isValid: boolean, errors: string[]}): void {
    console.log('Email validation:', event);
  }

  onPhoneValidation(event: {isValid: boolean, errors: string[]}): void {
    console.log('Phone validation:', event);
  }

  // Checkbox group methods
  updateSelectAllState(): void {
    // Update the select all checkbox state when individual checkboxes change
    const count = this.selectedCount;
    this.isAllSelected = count === this.totalCount;
  }
  
  handleSelectAllChange(checked: boolean): void {
    this.checkboxGroup = {
      option1: checked,
      option2: checked,
      option3: checked,
      option4: checked
    };
    this.isAllSelected = checked;
  }

  // Form methods
  submitForm(): void {
    console.log('Form submitted:', this.form);
    // Here you would typically send the form data to a server
    alert('Form submitted! Check console for details.');
  }
  
  clearForm(): void {
    this.form = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      agreeToTerms: false
    };
  }

  saveSettings(): void {
    console.log('Settings saved:', this.settings);
    alert('Settings saved successfully!');
  }
  
  resetSettings(): void {
    this.settings = {
      username: '',
      language: '',
      timezone: '',
      bio: '',
      notifications: {
        email: true,
        sms: false,
        push: true
      },
      privacy: {
        publicProfile: false,
        showOnlineStatus: true,
        allowDirectMessages: true
      }
    };
  }

  // Search and filter methods
  applyFilters(): void {
    console.log('Filters applied:', {
      search: this.searchValue,
      category: this.filterCategory,
      status: this.filterStatus
    });
    alert('Filters applied! Check console for details.');
  }
  
  clearFilters(): void {
    this.searchValue = '';
    this.filterCategory = '';
    this.filterStatus = '';
  }
  
  hasActiveFilters(): boolean {
    return !!(this.searchValue || this.filterCategory || this.filterStatus);
  }

  // Multi-step form methods
  nextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    } else {
      // Submit form
      console.log('Multi-step form submitted:', this.multiStepForm);
      alert('Multi-step form submitted! Check console for details.');
      this.currentStep = 1; // Reset to first step
    }
  }
  
  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}