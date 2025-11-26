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
  SliderComponent,
  TagComponent,
  ProgressComponent,
  AvatarComponent,
  IconComponent,
  SkeletonComponent,
  DividerComponent,
  ChipComponent,
  KBDComponent,
  FormFieldComponent,
  DropdownComponent,
  InputGroupComponent,
  ListItemComponent,
  BreadcrumbsComponent,
  TabsComponent,
  AccordionComponent,
  SearchBarComponent,
  NavbarComponent,
  SidebarComponent,
  HeaderComponent,
  FooterComponent,
  ToolbarComponent,
  ListGroupComponent,
  ModalComponent,
  DrawerComponent,
  TableComponent,
  PaginationComponent,
  CardListComponent,
  KpiCardComponent,
  EmptyStateComponent,
  UserMenuComponent,
  SelectOption,
  BreadcrumbItem,
  TabItem,
  AccordionItem,
  DropdownItem,
  SidebarItem,
  NavLink,
  User,
  UserMenuItem,
  TableColumn
} from '@luisvelito/angular';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { 
  lucideUser, 
  lucideSettings, 
  lucideStar, 
  lucideInfo, 
  lucideCircleCheck, 
  lucideTriangleAlert, 
  lucideCircleX,
  lucideHeart,
  lucideBell,
  lucideFolder,
  lucideUsers,
  lucideLogOut,
  lucideTrendingUp,
  lucideDollarSign,
  lucideShoppingCart,
  lucideActivity,
  lucideInbox,
  lucideFileX,
  lucideSearch,
  lucideChevronRight,
  lucideChevronDown,
  lucideX
} from '@ng-icons/lucide';

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
    SliderComponent,
    TagComponent,
    ProgressComponent,
    AvatarComponent,
    IconComponent,
    SkeletonComponent,
    DividerComponent,
    ChipComponent,
    KBDComponent,
    FormFieldComponent,
    DropdownComponent,
    InputGroupComponent,
    ListItemComponent,
    BreadcrumbsComponent,
    TabsComponent,
    AccordionComponent,
    SearchBarComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    ListGroupComponent,
    ModalComponent,
    DrawerComponent,
    TableComponent,
    PaginationComponent,
    CardListComponent,
    KpiCardComponent,
    EmptyStateComponent,
    UserMenuComponent,
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
      lucideCircleX,
      lucideHeart,
      lucideBell,
      lucideFolder,
      lucideUsers,
      lucideLogOut,
      lucideTrendingUp,
      lucideDollarSign,
      lucideShoppingCart,
      lucideActivity,
      lucideInbox,
      lucideFileX,
      lucideSearch,
      lucideChevronRight,
      lucideChevronDown,
      lucideX
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
            
            <!-- Variants -->
            <div class="mb-6">
              <h4 class="text-lg font-medium text-foreground mb-3">Variantes</h4>
              <div class="flex flex-wrap gap-4">
                <ui-button variant="primary">Primary</ui-button>
                <ui-button variant="secondary">Secondary</ui-button>
                <ui-button variant="outline">Outline</ui-button>
                <ui-button variant="ghost">Ghost</ui-button>
                <ui-button variant="destructive">Destructive</ui-button>
                <ui-button variant="link">Link</ui-button>
              </div>
            </div>

            <!-- Sizes -->
            <div class="mb-6">
              <h4 class="text-lg font-medium text-foreground mb-3">Tamaños</h4>
              <div class="flex flex-wrap gap-4 items-center">
                <ui-button size="sm">Small</ui-button>
                <ui-button size="md">Medium</ui-button>
                <ui-button size="lg">Large</ui-button>
              </div>
            </div>

            <!-- States -->
            <div class="mb-6">
              <h4 class="text-lg font-medium text-foreground mb-3">Estados</h4>
              <div class="flex flex-wrap gap-4">
                <ui-button>Normal</ui-button>
                <ui-button [loading]="true">Loading</ui-button>
                <ui-button [disabled]="true">Disabled</ui-button>
              </div>
            </div>

            <!-- With Icons -->
            <div class="mb-6">
              <h4 class="text-lg font-medium text-foreground mb-3">Con íconos</h4>
              <div class="flex flex-wrap gap-4">
                <ui-button>
                  <ng-icon slot="leftIcon" name="lucideUser" size="16"></ng-icon>
                  Con ícono izquierdo
                </ui-button>
                <ui-button variant="secondary">
                  Con ícono derecho
                  <svg slot="rightIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </ui-button>
                <ui-button variant="outline">
                  <ng-icon slot="leftIcon" name="lucideHeart" size="16"></ng-icon>
                  Like
                </ui-button>
              </div>
            </div>

            <!-- Full width -->
            <div class="mb-6">
              <h4 class="text-lg font-medium text-foreground mb-3">Ancho completo</h4>
              <div class="space-y-3">
                <ui-button [fullWidth]="true">Full Width Primary</ui-button>
                <ui-button variant="outline" [fullWidth]="true">Full Width Outline</ui-button>
              </div>
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

          <!-- Slider -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Slider</h3>
            <div class="max-w-md space-y-4">
              <div>
                <p class="text-sm mb-2 text-foreground">Volume: {{ sliderValue }}%</p>
                <ds-slider
                  [(value)]="sliderValue"
                  [min]="0"
                  [max]="100"
                ></ds-slider>
              </div>
            </div>
          </div>

          <!-- Tag -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Tag</h3>
            <div class="space-y-4">
              <div>
                <p class="text-sm mb-2 text-muted-foreground">Variants</p>
                <div class="flex flex-wrap gap-2">
                  <ds-tag variant="primary">Primary</ds-tag>
                  <ds-tag variant="secondary">Secondary</ds-tag>
                  <ds-tag variant="success">Success</ds-tag>
                  <ds-tag variant="warning">Warning</ds-tag>
                  <ds-tag variant="danger">Danger</ds-tag>
                </div>
              </div>
              <div>
                <p class="text-sm mb-2 text-muted-foreground">Sizes</p>
                <div class="flex flex-wrap gap-2 items-center">
                  <ds-tag size="sm">Small</ds-tag>
                  <ds-tag size="md">Medium</ds-tag>
                  <ds-tag size="lg">Large</ds-tag>
                </div>
              </div>
              <div>
                <p class="text-sm mb-2 text-muted-foreground">Removable</p>
                <div class="flex flex-wrap gap-2">
                  <ds-tag variant="primary" [removable]="true">React</ds-tag>
                  <ds-tag variant="success" [removable]="true">TypeScript</ds-tag>
                  <ds-tag variant="danger" size="sm" [removable]="true">Remove me</ds-tag>
                </div>
              </div>
            </div>
          </div>

          <!-- Progress -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Progress</h3>
            <div class="space-y-6">
              <div class="max-w-md space-y-4">
                <div>
                  <p class="text-sm mb-2 text-muted-foreground">Variants</p>
                  <div class="space-y-3">
                    <ds-progress [value]="progress" variant="primary" [label]="true"></ds-progress>
                    <ds-progress [value]="75" variant="secondary" [label]="true"></ds-progress>
                    <ds-progress [value]="90" variant="success" [label]="true"></ds-progress>
                    <ds-progress [value]="50" variant="warning" [label]="true"></ds-progress>
                    <ds-progress [value]="30" variant="danger" [label]="true"></ds-progress>
                  </div>
                </div>
                <div>
                  <p class="text-sm mb-2 text-muted-foreground">Sizes</p>
                  <div class="space-y-3">
                    <ds-progress [value]="60" size="sm" label="Small"></ds-progress>
                    <ds-progress [value]="70" size="md" label="Medium"></ds-progress>
                    <ds-progress [value]="80" size="lg" label="Large"></ds-progress>
                  </div>
                </div>
                <ui-button size="sm" (click)="increaseProgress()">
                  Increase +10%
                </ui-button>
              </div>
            </div>
          </div>

          <!-- Avatar -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Avatar</h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Sizes</p>
                <div class="flex items-center gap-3">
                  <ds-avatar size="sm" fallback="SM" alt="Small Avatar"></ds-avatar>
                  <ds-avatar size="md" fallback="MD" alt="Medium Avatar"></ds-avatar>
                  <ds-avatar size="lg" fallback="LG" alt="Large Avatar"></ds-avatar>
                  <ds-avatar size="xl" fallback="XL" alt="Extra Large Avatar"></ds-avatar>
                </div>
              </div>
              <div>
                <p class="text-sm mb-3 text-muted-foreground">With Images</p>
                <div class="flex items-center gap-3">
                  <ds-avatar size="sm" src="https://i.pravatar.cc/150?img=1" alt="User 1"></ds-avatar>
                  <ds-avatar size="md" src="https://i.pravatar.cc/150?img=2" alt="User 2"></ds-avatar>
                  <ds-avatar size="lg" src="https://i.pravatar.cc/150?img=3" alt="User 3"></ds-avatar>
                  <ds-avatar size="xl" src="https://i.pravatar.cc/150?img=4" alt="User 4"></ds-avatar>
                </div>
              </div>
            </div>
          </div>

          <!-- Icon -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Icon</h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Sizes</p>
                <div class="flex items-center gap-4">
                  <ds-icon [size]="16">
                    <ng-icon name="lucideHeart" class="w-full h-full"></ng-icon>
                  </ds-icon>
                  <ds-icon [size]="20">
                    <ng-icon name="lucideStar" class="w-full h-full"></ng-icon>
                  </ds-icon>
                  <ds-icon [size]="24">
                    <ng-icon name="lucideSettings" class="w-full h-full"></ng-icon>
                  </ds-icon>
                  <ds-icon [size]="32">
                    <ng-icon name="lucideUser" class="w-full h-full"></ng-icon>
                  </ds-icon>
                  <ds-icon [size]="40">
                    <ng-icon name="lucideBell" class="w-full h-full"></ng-icon>
                  </ds-icon>
                </div>
              </div>
            </div>
          </div>

          <!-- Skeleton -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Skeleton</h3>
            <div class="space-y-4 max-w-md">
              <ds-skeleton [width]="'100%'" [height]="'20px'"></ds-skeleton>
              <ds-skeleton [width]="'80%'" [height]="'20px'"></ds-skeleton>
              <ds-skeleton [width]="'60%'" [height]="'20px'"></ds-skeleton>
              <ds-skeleton variant="circular" [width]="'60px'" [height]="'60px'"></ds-skeleton>
            </div>
          </div>

          <!-- Divider -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Divider</h3>
            <div class="space-y-4">
              <div>
                <p class="text-sm text-muted-foreground mb-2">Horizontal</p>
                <ds-divider></ds-divider>
              </div>
              <div class="flex items-center gap-4 h-20">
                <p class="text-sm text-muted-foreground">Vertical</p>
                <ds-divider orientation="vertical"></ds-divider>
                <p class="text-sm text-muted-foreground">Example</p>
              </div>
            </div>
          </div>

          <!-- Chip -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Chip</h3>
            <div class="flex flex-wrap gap-2">
              <ds-chip label="Default"></ds-chip>
              <ds-chip label="Primary" variant="primary"></ds-chip>
              <ds-chip label="Success" variant="success"></ds-chip>
              <ds-chip label="Error" variant="error"></ds-chip>
              <ds-chip label="Removable"></ds-chip>
            </div>
          </div>

          <!-- KBD -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">KBD</h3>
            <div class="flex items-center gap-2 flex-wrap">
              <p class="text-foreground">Press</p>
              <ds-kbd>Ctrl</ds-kbd>
              <p>+</p>
              <ds-kbd>K</ds-kbd>
              <p>to search</p>
            </div>
          </div>

          <!-- Card -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Card</h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Básico con título y descripción</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ds-card 
                    title="Card Title" 
                    description="This is a description that provides context about the card content."
                  >
                    <p class="text-sm text-foreground">
                      Main card content goes here. You can add any React elements.
                    </p>
                  </ds-card>
                  
                  <ds-card title="Simple Card">
                    <p class="text-sm text-foreground">
                      Card with only a title and content.
                    </p>
                  </ds-card>
                </div>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Con header y footer</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ds-card [hasHeader]="true" [hasFooter]="true">
                    <div slot="header" class="p-4 bg-primary/10">
                      <p class="text-sm font-semibold text-primary">Header Section</p>
                    </div>
                    <p class="text-sm text-foreground">
                      Card with custom header and footer sections.
                    </p>
                    <div slot="footer" class="flex justify-end gap-2">
                      <ui-button variant="ghost" size="sm">Cancel</ui-button>
                      <ui-button variant="primary" size="sm">Save</ui-button>
                    </div>
                  </ds-card>
                  
                  <ds-card [hasFooter]="true">
                    <p class="text-sm font-medium text-foreground mb-2">Status Update</p>
                    <p class="text-sm text-muted-foreground">
                      All systems operational.
                    </p>
                    <div slot="footer" class="flex items-center justify-between">
                      <span class="text-xs text-muted-foreground">Updated 2 hours ago</span>
                      <ui-button variant="ghost" size="sm">View Details</ui-button>
                    </div>
                  </ds-card>
                </div>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Padding variants</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ds-card title="Small Padding" padding="sm">
                    <p class="text-sm text-foreground">Compact card with small padding.</p>
                  </ds-card>
                  
                  <ds-card title="Medium Padding" padding="md">
                    <p class="text-sm text-foreground">Default padding (medium).</p>
                  </ds-card>
                  
                  <ds-card title="Large Padding" padding="lg">
                    <p class="text-sm text-foreground">Spacious card with large padding.</p>
                  </ds-card>
                </div>
              </div>

              <div>
                <p class="text-sm mb-3 text-muted-foreground">Shadow variants</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ds-card title="No Shadow" shadow="none" [bordered]="true">
                    <p class="text-sm text-foreground">Card without shadow but with border.</p>
                  </ds-card>
                  
                  <ds-card title="Small Shadow" shadow="sm">
                    <p class="text-sm text-foreground">Card with subtle shadow (default).</p>
                  </ds-card>
                  
                  <ds-card title="Medium Shadow" shadow="md">
                    <p class="text-sm text-foreground">Card with medium shadow.</p>
                  </ds-card>
                </div>
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

        <!-- MOLECULES SECTION -->
        <section>
          <h2 class="text-3xl font-bold mb-8 text-foreground">Molecules</h2>

          <!-- FormField -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">FormField</h3>
            <div class="space-y-4 max-w-md">
              <ds-form-field label="Email" [required]="true" [id]="'email-field'">
                <ui-input #formControl placeholder="Enter your email" type="email"></ui-input>
              </ds-form-field>
              
              <ds-form-field 
                label="Password" 
                [required]="true" 
                hint="Must be at least 8 characters"
                [id]="'password-field'"
              >
                <ui-input #formControl placeholder="Enter your password" type="password"></ui-input>
              </ds-form-field>
              
              <ds-form-field 
                label="Username" 
                error="Username is already taken"
                [id]="'username-field'"
              >
                <ui-input #formControl placeholder="Choose a username"></ui-input>
              </ds-form-field>
            </div>
          </div>

          <!-- Dropdown -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Dropdown</h3>
            <div class="flex gap-4">
              <ds-dropdown 
                [items]="dropdownItems1" 
                (onSelect)="handleDropdownSelect($event)"
              >
                <ui-button slot="trigger" variant="primary">Open Menu</ui-button>
              </ds-dropdown>
              
              <ds-dropdown 
                [items]="dropdownItems2" 
                (onSelect)="handleDropdownSelect($event)"
                align="right"
              >
                <ui-button slot="trigger" variant="secondary">Options</ui-button>
              </ds-dropdown>
              
              <ds-dropdown 
                [items]="dropdownItems3" 
                (onSelect)="handleDropdownSelect($event)"
                [disabled]="true"
              >
                <ui-button slot="trigger" variant="primary" [disabled]="true">Disabled</ui-button>
              </ds-dropdown>
            </div>
          </div>

          <!-- InputGroup -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">InputGroup</h3>
            <div class="space-y-4 max-w-md">
              <ds-input-group [hasLeftAddon]="true">
                <span slot="leftAddon">https://</span>
                <ui-input placeholder="example.com"></ui-input>
              </ds-input-group>
              
              <ds-input-group [hasRightAddon]="true">
                <ui-input placeholder="Username"></ui-input>
                <span slot="rightAddon">@example.com</span>
              </ds-input-group>
              
              <ds-input-group [hasLeftAddon]="true" [hasRightAddon]="true">
                <span slot="leftAddon">$</span>
                <ui-input placeholder="0.00" type="number"></ui-input>
                <span slot="rightAddon">.00</span>
              </ds-input-group>
            </div>
          </div>

          <!-- ListItem -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">ListItem</h3>
            <div class="space-y-2 max-w-md">
              <ds-list-item 
                title="Simple list item" 
              ></ds-list-item>
              
              <ds-list-item 
                title="With description" 
                description="This is a secondary description text"
              ></ds-list-item>
              
              <ds-list-item 
                title="With left icon"
                description="Email notification settings"
                [hasLeftIcon]="true"
              >
                <ds-icon slot="leftIcon" [size]="20">
                  <ng-icon name="lucideBell" class="w-full h-full"></ng-icon>
                </ds-icon>
              </ds-list-item>
              
              <ds-list-item 
                title="With right icon"
                description="Navigate to profile page"
                [hasRightIcon]="true"
              >
                <ds-icon slot="rightIcon" [size]="16">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-full h-full">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </ds-icon>
              </ds-list-item>
              
              <ds-list-item 
                title="Clickable item"
                description="Click me to see the action"
                [clickable]="true"
                [hasLeftIcon]="true"
                [hasRightIcon]="true"
                (onClick)="logAction('Item clicked!')"
              >
                <ds-icon slot="leftIcon" [size]="20">
                  <ng-icon name="lucideUser" class="w-full h-full"></ng-icon>
                </ds-icon>
                <ds-icon slot="rightIcon" [size]="16">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-full h-full">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </ds-icon>
              </ds-list-item>
            </div>
          </div>
          
          <!-- ListGroup & ListItem -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">ListGroup & ListItem</h3>
            <ds-list-group>
              <ds-list-item 
                title="Home" 
                [clickable]="true"
                [hasLeftIcon]="true"
                (onClick)="logAction('Home')"
              >
                <ds-icon slot="leftIcon" [size]="20">
                  <ng-icon name="lucideHome" class="w-full h-full"></ng-icon>
                </ds-icon>
              </ds-list-item>
              
              <ds-list-item 
                title="Profile" 
                description="View and edit your profile"
                [clickable]="true"
                [active]="true"
                [hasLeftIcon]="true"
                (onClick)="logAction('Profile')"
              >
                <ds-icon slot="leftIcon" [size]="20">
                  <ng-icon name="lucideUser" class="w-full h-full"></ng-icon>
                </ds-icon>
              </ds-list-item>
              
              <ds-list-item 
                title="Notifications" 
                description="3 new notifications"
                [clickable]="true"
                [hasLeftIcon]="true"
                [hasRightIcon]="true"
                (onClick)="logAction('Notifications')"
              >
                <ds-icon slot="leftIcon" [size]="20">
                  <ng-icon name="lucideBell" class="w-full h-full"></ng-icon>
                </ds-icon>
                <ds-badge slot="rightIcon" size="sm" variant="primary">3</ds-badge>
              </ds-list-item>
              
              <ds-list-item 
                title="Settings" 
                [clickable]="true"
                [hasLeftIcon]="true"
                (onClick)="logAction('Settings')"
              >
                <ds-icon slot="leftIcon" [size]="20">
                  <ng-icon name="lucideSettings" class="w-full h-full"></ng-icon>
                </ds-icon>
              </ds-list-item>
            </ds-list-group>
          </div>

          <!-- Breadcrumbs -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Breadcrumbs</h3>
            <ds-breadcrumbs [items]="breadcrumbItems"></ds-breadcrumbs>
          </div>

          <!-- Tabs -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Tabs</h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Basic Tabs</p>
                <ds-tabs 
                  [tabs]="tabItems" 
                  [value]="activeTab"
                  (onChange)="handleTabChange($event)"
                ></ds-tabs>
                <div class="mt-4 p-4 bg-card rounded-lg border">
                  <p class="text-sm text-foreground">Content for: {{ activeTab }}</p>
                </div>
              </div>
              
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Full Width Tabs</p>
                <ds-tabs 
                  [tabs]="tabItems2" 
                  [value]="activeTab2"
                  [fullWidth]="true"
                  (onChange)="handleTabChange2($event)"
                ></ds-tabs>
                <div class="mt-4 p-4 bg-card rounded-lg border">
                  <p class="text-sm text-foreground">Content for: {{ activeTab2 }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Accordion -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Accordion</h3>
            <ds-accordion 
              [items]="accordionItems"
              [defaultOpen]="['1']"
            ></ds-accordion>
          </div>

          <!-- SearchBar -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">SearchBar</h3>
            <div class="max-w-md">
              <ds-search-bar
                [(value)]="searchBarValue"
                placeholder="Search..."
                [clearable]="true"
              ></ds-search-bar>
              <p *ngIf="searchBarValue" class="text-sm text-muted-foreground mt-2">
                Searching for: {{ searchBarValue }}
              </p>
            </div>
          </div>
        </section>

        <!-- FORM EXAMPLES SECTION -->
        <section>
          <h2 class="text-3xl font-bold mb-8 text-foreground">Form Examples</h2>
          
          <!-- Contact Form -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Contact Form</h3>
            <div class="max-w-2xl space-y-6">
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
            <div class="max-w-2xl space-y-6">
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
            <div class="space-y-6">
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
            <ds-card padding="lg">
              <div class="space-y-6">
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
            </ds-card>
          </div>
        </section>

        <!-- ORGANISMS SECTION -->
        <section>
          <h2 class="text-3xl font-bold mb-8 text-foreground">Organisms</h2>

          <!-- Navbar -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Navbar</h3>
            <ds-navbar 
              [links]="navbarLinks"
              [sticky]="false"
              [hasLogo]="true"
              [hasRightContent]="true"
            >
              <div slot="logo" class="font-bold text-primary">Logo</div>
              <div slot="rightContent" class="flex gap-2">
                <ui-button size="sm" variant="ghost">Login</ui-button>
                <ui-button size="sm">Sign Up</ui-button>
              </div>
            </ds-navbar>
          </div>

          <!-- Sidebar -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Sidebar</h3>
            <div class="h-96 border border-border rounded-lg overflow-hidden flex">
              <ds-sidebar 
                [items]="sidebarItems"
                [collapsed]="sidebarCollapsed"
                [hasHeader]="true"
                [hasFooter]="true"
              >
                <div slot="header" class="font-bold">App</div>
                <ng-icon slot="icon-home" name="lucideHome" size="20"></ng-icon>
                <ng-icon slot="icon-projects" name="lucideFolder" size="20"></ng-icon>
                <ng-icon slot="icon-team" name="lucideUsers" size="20"></ng-icon>
                <ng-icon slot="icon-settings" name="lucideSettings" size="20"></ng-icon>
                <ui-button slot="footer" size="sm" (click)="toggleSidebar()" [fullWidth]="true">
                  {{ sidebarCollapsed ? 'Expand' : 'Collapse' }}
                </ui-button>
              </ds-sidebar>
              <div class="flex-1 p-4 bg-muted/20">
                <p class="text-sm text-muted-foreground">Main content area</p>
              </div>
            </div>
          </div>

          <!-- Header & Footer -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Header & Footer</h3>
            <div class="space-y-4">
              <ds-header>
                <div class="flex items-center justify-between">
                  <h2 class="text-lg font-semibold">Page Header</h2>
                  <ui-button size="sm">Action</ui-button>
                </div>
              </ds-header>
              <ds-footer>
                <p class="text-sm text-muted-foreground">© 2025 Company Name. All rights reserved.</p>
              </ds-footer>
            </div>
          </div>

          <!-- Toolbar -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Toolbar</h3>
            <ds-toolbar>
              <ui-button size="sm" variant="ghost">Bold</ui-button>
              <ui-button size="sm" variant="ghost">Italic</ui-button>
              <ui-button size="sm" variant="ghost">Underline</ui-button>
              <ds-divider orientation="vertical"></ds-divider>
              <ui-button size="sm" variant="ghost">Align Left</ui-button>
              <ui-button size="sm" variant="ghost">Align Center</ui-button>
              <ui-button size="sm" variant="ghost">Align Right</ui-button>
            </ds-toolbar>
          </div>
          
          <!-- ListGroup -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">ListGroup</h3>
            <div class="max-w-md">
              <ds-list-group>
                <ds-list-item title="First item" [clickable]="true"></ds-list-item>
                <ds-list-item title="Second item" [clickable]="true"></ds-list-item>
                <ds-list-item title="Third item" [clickable]="true"></ds-list-item>
              </ds-list-group>
            </div>
          </div>

          <!-- Modal -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Modal</h3>
            <div class="flex gap-2 flex-wrap">
              <ui-button (click)="openModal('sm')">Open Small Modal</ui-button>
              <ui-button (click)="openModal('md')">Open Medium Modal</ui-button>
              <ui-button (click)="openModal('lg')">Open Large Modal</ui-button>
            </div>
            
            <ds-modal 
              [open]="modalSmOpen" 
              (onClose)="closeModalSm()"
              title="Small Modal"
              size="sm"
              [hasFooter]="true"
            >
              <p class="text-sm text-foreground">This is a small modal with limited width.</p>
              <div slot="footer" class="flex gap-2">
                <ui-button variant="outline" (click)="closeModalSm()">Cancel</ui-button>
                <ui-button (click)="closeModalSm()">Confirm</ui-button>
              </div>
            </ds-modal>
            
            <ds-modal 
              [open]="modalMdOpen" 
              (onClose)="closeModalMd()"
              title="Medium Modal"
              size="md"
              [hasFooter]="true"
            >
              <p class="text-sm text-foreground">This is a medium-sized modal, perfect for most use cases.</p>
              <div slot="footer" class="flex gap-2">
                <ui-button variant="outline" (click)="closeModalMd()">Cancel</ui-button>
                <ui-button (click)="closeModalMd()">Confirm</ui-button>
              </div>
            </ds-modal>
            
            <ds-modal 
              [open]="modalLgOpen" 
              (onClose)="closeModalLg()"
              title="Large Modal"
              size="lg"
              [hasFooter]="true"
            >
              <p class="text-sm text-foreground">This is a large modal with more space for content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div slot="footer" class="flex gap-2">
                <ui-button variant="outline" (click)="closeModalLg()">Cancel</ui-button>
                <ui-button (click)="closeModalLg()">Confirm</ui-button>
              </div>
            </ds-modal>
          </div>

          <!-- Drawer -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Drawer</h3>
            <div class="flex gap-2 flex-wrap">
              <ui-button (click)="openDrawer('right')">Open Right</ui-button>
              <ui-button (click)="openDrawer('left')">Open Left</ui-button>
              <ui-button (click)="openDrawer('top')">Open Top</ui-button>
              <ui-button (click)="openDrawer('bottom')">Open Bottom</ui-button>
            </div>
            
            <ds-drawer 
              [open]="drawerOpen" 
              (onClose)="closeDrawer()"
              [title]="'Drawer ' + drawerPosition"
              [position]="drawerPosition"
              size="md"
              [hasFooter]="true"
            >
              <p class="text-sm text-foreground">This is a drawer from the {{ drawerPosition }} side.</p>
              <div slot="footer" class="flex gap-2">
                <ui-button variant="outline" (click)="closeDrawer()">Cancel</ui-button>
                <ui-button (click)="closeDrawer()">Confirm</ui-button>
              </div>
            </ds-drawer>
          </div>

          <!-- Table -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Table</h3>
            <ds-table 
              [columns]="tableColumns"
              [data]="tableData"
              emptyMessage="No users found"
            ></ds-table>
          </div>

          <!-- Pagination -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">Pagination</h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Basic Pagination</p>
                <ds-pagination 
                  [page]="currentPage1"
                  [totalPages]="5"
                  (onChange)="handlePaginationChange1($event)"
                ></ds-pagination>
              </div>
              
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Page 1 of 10</p>
                <ds-pagination 
                  [page]="currentPage2"
                  [totalPages]="10"
                  (onChange)="handlePaginationChange2($event)"
                ></ds-pagination>
              </div>
              
              <div>
                <p class="text-sm mb-3 text-muted-foreground">Page 5 of 20</p>
                <ds-pagination 
                  [page]="currentPage3"
                  [totalPages]="20"
                  (onChange)="handlePaginationChange3($event)"
                ></ds-pagination>
              </div>
            </div>
          </div>

          <!-- CardList -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">CardList</h3>
            <ds-card-list [cols]="3" [gap]="4">
              <ds-card title="Card 1" description="First card in the list">
                <p class="text-sm text-muted-foreground">Content for card 1</p>
              </ds-card>
              <ds-card title="Card 2" description="Second card in the list">
                <p class="text-sm text-muted-foreground">Content for card 2</p>
              </ds-card>
              <ds-card title="Card 3" description="Third card in the list">
                <p class="text-sm text-muted-foreground">Content for card 3</p>
              </ds-card>
            </ds-card-list>
          </div>

          <!-- KpiCard -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">KpiCard</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ds-kpi-card 
                label="Total Revenue" 
                value="$45,231" 
                trend="up"
                trendValue="+20.1%"
                [hasIcon]="true"
              >
                <ng-icon slot="icon" name="lucideDollarSign" size="20"></ng-icon>
              </ds-kpi-card>
              
              <ds-kpi-card 
                label="Active Users" 
                value="2,350" 
                trend="up"
                trendValue="+12.5%"
                [hasIcon]="true"
              >
                <ng-icon slot="icon" name="lucideUsers" size="20"></ng-icon>
              </ds-kpi-card>
              
              <ds-kpi-card 
                label="Conversion Rate" 
                value="3.24%" 
                trend="down"
                trendValue="-2.4%"
                [hasIcon]="true"
              >
                <ng-icon slot="icon" name="lucideTrendingUp" size="20"></ng-icon>
              </ds-kpi-card>
            </div>
          </div>

          <!-- EmptyState -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">EmptyState</h3>
            <ds-empty-state 
              title="No results found" 
              description="Try adjusting your search or filter to find what you're looking for."
              [hasIcon]="true"
              [hasAction]="true"
            >
              <ng-icon slot="icon" name="lucideInbox" size="48"></ng-icon>
              <ui-button slot="action">Clear Filters</ui-button>
            </ds-empty-state>
          </div>

          <!-- UserMenu -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4 text-foreground">UserMenu</h3>
            <div class="space-y-8">
              <div>
                <p class="text-sm mb-4 text-muted-foreground">User Menu with Avatar and Options</p>
                <div class="flex justify-end">
                  <ds-user-menu 
                    [user]="{name: 'John Doe', email: 'john.doe@example.com', avatarSrc: 'https://i.pravatar.cc/150?img=12'}"
                    [items]="userMenuItems"
                    (onSelect)="handleUserMenuSelect($event)"
                  ></ds-user-menu>
                </div>
              </div>
              
              <div>
                <p class="text-sm mb-4 text-muted-foreground">User Menu without Email</p>
                <div class="flex justify-end">
                  <ds-user-menu 
                    [user]="{name: 'Jane Smith'}"
                    [items]="userMenuItems2"
                    (onSelect)="handleUserMenuSelect($event)"
                  ></ds-user-menu>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- FEEDBACK SECTION -->
        <section class="text-center">
          <div class="p-8 bg-card rounded-lg border">
            <h2 class="text-2xl font-bold mb-4 text-foreground">Component Library Complete! 🎉</h2>
            <p class="text-muted-foreground mb-6">
              All 42 components from React have been successfully ported to Angular with full functionality.
              Every component supports form integration, validation, and accessibility features.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div class="p-3 bg-background rounded border">
                <p class="font-semibold text-primary">✅ 42 Components</p>
                <p class="text-muted-foreground">18 Atoms, 10 Molecules, 14 Organisms</p>
              </div>
              <div class="p-3 bg-background rounded border">
                <p class="font-semibold text-primary">✅ Advanced Features</p>
                <p class="text-muted-foreground">Auto-resize, Validation, Loading, Keyboard nav</p>
              </div>
              <div class="p-3 bg-background rounded border">
                <p class="font-semibold text-primary">✅ Forms & A11y</p>
                <p class="text-muted-foreground">NgModel, CVA, ARIA, Focus management</p>
              </div>
              <div class="p-3 bg-background rounded border">
                <p class="font-semibold text-primary">✅ Theming</p>
                <p class="text-muted-foreground">Shared tokens, Light/Dark mode</p>
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
  
  // New component states
  sliderValue = 50;
  progress = 65;
  avatarSrc = '';
  
  // Modal states
  modalOpen = false;
  modalSmOpen = false;
  modalMdOpen = false;
  modalLgOpen = false;
  
  // Drawer states
  drawerOpen = false;
  drawerPosition: 'left' | 'right' | 'top' | 'bottom' = 'right';
  
  // Pagination states
  currentPage1 = 2;
  currentPage2 = 1;
  currentPage3 = 5;
  
  // Tabs states
  activeTab = 'overview';
  activeTab2 = 'profile';
  
  // Search
  searchBarValue = '';
  
  // Dropdown items
  dropdownItems1: DropdownItem[] = [
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
    { label: 'Logout', value: 'logout' }
  ];
  
  dropdownItems2: DropdownItem[] = [
    { label: 'Edit', value: 'edit' },
    { label: 'Duplicate', value: 'duplicate' },
    { label: 'Delete', value: 'delete' }
  ];
  
  dropdownItems3: DropdownItem[] = [
    { label: 'Item 1', value: 'item1' },
    { label: 'Item 2', value: 'item2' }
  ];
  
  // Breadcrumbs items
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Category' }
  ];
  
  // Tabs items
  tabItems: TabItem[] = [
    { label: 'Overview', value: 'overview' },
    { label: 'Analytics', value: 'analytics' },
    { label: 'Reports', value: 'reports' },
    { label: 'Settings', value: 'settings' }
  ];
  
  tabItems2: TabItem[] = [
    { label: 'Profile', value: 'profile' },
    { label: 'Security', value: 'security' },
    { label: 'Notifications', value: 'notifications' }
  ];
  
  // Accordion items
  accordionItems: AccordionItem[] = [
    { 
      id: '1', 
      title: 'What is your return policy?', 
      content: 'We offer a 30-day return policy for all unused items in their original packaging.' 
    },
    { 
      id: '2', 
      title: 'How long does shipping take?', 
      content: 'Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 day delivery.' 
    },
    { 
      id: '3', 
      title: 'Do you ship internationally?', 
      content: 'Yes, we ship to over 50 countries worldwide. International shipping times vary by location.' 
    }
  ];
  
  // Table data
  tableColumns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' }
  ];
  
  tableData: any[] = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' }
  ];
  
  // Sidebar items
  sidebarItems: SidebarItem[] = [
    { id: 'home', label: 'Home', href: '/', active: true, hasIcon: true },
    { id: 'projects', label: 'Projects', href: '/projects', hasIcon: true },
    { id: 'team', label: 'Team', href: '/team', hasIcon: true },
    { id: 'settings', label: 'Settings', href: '/settings', hasIcon: true }
  ];
  
  sidebarCollapsed = false;
  
  // Navbar links
  navbarLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ];
  
  // UserMenu
  currentUser: User = {
    name: 'John Doe',
    email: 'john@example.com',
    avatarSrc: 'https://i.pravatar.cc/150?img=1'
  };
  
  userMenuItems: UserMenuItem[] = [
    { label: 'Profile', value: 'profile', hasIcon: true },
    { label: 'Settings', value: 'settings', hasIcon: true },
    { label: 'Logout', value: 'logout', hasIcon: true }
  ];
  
  userMenuItems2: UserMenuItem[] = [
    { label: 'My Account', value: 'account', hasIcon: true },
    { label: 'Help & Support', value: 'help', hasIcon: true },
    { label: 'Sign Out', value: 'signout', hasIcon: true }
  ];
  
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

  logAction(message: string): void {
    console.log(message);
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
  
  // New component methods
  increaseProgress(): void {
    this.progress = Math.min(100, this.progress + 10);
  }
  
  handleDropdownSelect(value: string): void {
    console.log('Dropdown selected:', value);
  }
  
  handleTabChange(value: string): void {
    this.activeTab = value;
  }
  
  handleTabChange2(value: string): void {
    this.activeTab2 = value;
  }
  
  handlePaginationChange1(page: number): void {
    this.currentPage1 = page;
  }
  
  handlePaginationChange2(page: number): void {
    this.currentPage2 = page;
  }
  
  handlePaginationChange3(page: number): void {
    this.currentPage3 = page;
  }
  
  handleUserMenuSelect(value: string): void {
    console.log('User menu selected:', value);
    if (value === 'logout') {
      alert('Logout clicked!');
    }
  }
  
  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
  
  openModal(size: 'sm' | 'md' | 'lg' = 'md'): void {
    if (size === 'sm') {
      this.modalSmOpen = true;
    } else if (size === 'lg') {
      this.modalLgOpen = true;
    } else {
      this.modalMdOpen = true;
    }
  }
  
  closeModalSm(): void {
    this.modalSmOpen = false;
  }
  
  closeModalMd(): void {
    this.modalMdOpen = false;
  }
  
  closeModalLg(): void {
    this.modalLgOpen = false;
  }
  
  openDrawer(position: 'left' | 'right' | 'top' | 'bottom' = 'right'): void {
    this.drawerPosition = position;
    this.drawerOpen = true;
  }
  
  closeDrawer(): void {
    this.drawerOpen = false;
  }
}