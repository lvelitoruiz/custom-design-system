<template>
  <div class="min-h-screen bg-background">
    <!-- Navigation -->
    <div class="sticky top-0 z-50 bg-card border-b border-border px-6 py-4 shadow-sm">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <h1 class="text-2xl font-bold text-foreground">Vue Component Library Preview</h1>
        <div class="flex items-center gap-4">
          <button @click="toggleTheme" class="flex items-center gap-2 px-3 py-2 rounded-md bg-muted hover:bg-muted/80 text-foreground transition-colors" aria-label="Toggle theme">
            <Sun v-if="isDark" :size="20" />
            <Moon v-else :size="20" />
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
            Comprehensive Vue component library - portado desde React y Angular con todas las funcionalidades.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div class="p-4 bg-card rounded-lg border">
              <h4 class="font-semibold text-primary mb-2">✨ Vue 3 Features</h4>
              <p class="text-muted-foreground">Composition API, TypeScript, Reactivity</p>
            </div>
            <div class="p-4 bg-card rounded-lg border">
              <h4 class="font-semibold text-primary mb-2">⌨️ Keyboard Navigation</h4>
              <p class="text-muted-foreground">Full keyboard support with Arrow keys, Enter, Escape</p>
            </div>
            <div class="p-4 bg-card rounded-lg border">
              <h4 class="font-semibold text-primary mb-2">♿ Accessibility</h4>
              <p class="text-muted-foreground">Complete ARIA attributes and screen reader support</p>
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
          
          <div class="mb-6">
            <h4 class="text-lg font-medium text-foreground mb-3">Variantes</h4>
            <div class="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-lg font-medium text-foreground mb-3">Tamaños</h4>
            <div class="flex flex-wrap gap-4 items-center">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-lg font-medium text-foreground mb-3">Estados</h4>
            <div class="flex flex-wrap gap-4">
              <Button>Normal</Button>
              <Button :loading="true">Loading</Button>
              <Button :disabled="true">Disabled</Button>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-lg font-medium text-foreground mb-3">Con Íconos</h4>
            <div class="flex flex-wrap gap-4">
              <Button>
                <template #leftIcon>
                  <Mail :size="16" />
                </template>
                Left Icon
              </Button>
              <Button>
                Right Icon
                <template #rightIcon>
                  <ArrowRight :size="16" />
                </template>
              </Button>
              <Button>
                <template #leftIcon>
                  <Check :size="16" />
                </template>
                Both Icons
                <template #rightIcon>
                  <ArrowRight :size="16" />
                </template>
              </Button>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-lg font-medium text-foreground mb-3">Full Width</h4>
            <Button :fullWidth="true">Full Width Button</Button>
          </div>
        </div>

        <!-- Input -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Input</h3>
          
          <div class="space-y-6">
            <div>
              <p class="text-sm mb-3 text-muted-foreground">Basic States</p>
              <div class="space-y-4 max-w-md">
                <Input placeholder="Normal input" v-model="inputBasic1" />
                <Input placeholder="Disabled input" disabled />
                <Input placeholder="Error input" :invalid="true" />
              </div>
            </div>

            <div>
              <p class="text-sm mb-3 text-muted-foreground">Advanced Features</p>
              <div class="space-y-4 max-w-md">
                <Input 
                  placeholder="Email validation" 
                  v-model="emailValue"
                  :validation="[{ type: 'email', message: 'Please enter a valid email' }]"
                  :validateOnBlur="true"
                  @validationChange="(valid, errors) => isEmailValid = valid"
                  :clearable="true"
                >
                  <template #leftIcon>
                    <UserIcon :size="16" />
                  </template>
                </Input>
                
                <Input 
                  placeholder="Phone validation" 
                  v-model="phoneValue"
                  :validation="[{ type: 'phone', message: 'Please enter a valid phone number' }]"
                  :validateOnChange="true"
                  @validationChange="(valid, errors) => isPhoneValid = valid"
                  :debounceMs="300"
                  :clearable="true"
                />
                
                <Input 
                  placeholder="Loading state" 
                  v-model="passwordValue"
                  :loading="loadingInput"
                >
                  <template #leftIcon>
                    <Settings :size="16" />
                  </template>
                  <template #rightIcon>
                    <Check :size="16" />
                  </template>
                </Input>
                
                <Button @click="simulateLoading" size="sm" :disabled="loadingInput">
                  {{ loadingInput ? 'Loading...' : 'Simulate Loading' }}
                </Button>
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
                <Textarea placeholder="Enter your message..." v-model="textareaValue" />
                <Textarea placeholder="Disabled textarea" disabled />
              </div>
            </div>

            <div>
              <p class="text-sm mb-3 text-muted-foreground">Auto-Resize Features</p>
              <div class="space-y-4 max-w-md">
                <Textarea 
                  placeholder="Auto-resize (min 2, max 6 rows)" 
                  v-model="autoResizeValue"
                  :autoResize="true"
                  :minRows="2"
                  :maxRows="6"
                />
                
                <Textarea 
                  placeholder="Auto-resize unlimited" 
                  :autoResize="true"
                  :minRows="3"
                />
                
                <Textarea 
                  placeholder="Non-resizable" 
                  :resizable="false"
                />
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
                <Select 
                  :options="selectOptions"
                  v-model="selectValue"
                  placeholder="Choose an option..."
                />
              </div>
            </div>

            <div>
              <p class="text-sm mb-3 text-muted-foreground">Advanced Features</p>
              <div class="space-y-4 max-w-md">
                <div>
                  <Select 
                    :options="countryOptions"
                    v-model="searchableSelectValue"
                    placeholder="Search countries..."
                    :searchable="true"
                    :clearable="true"
                  />
                  <p class="text-xs text-muted-foreground mt-1">
                    ⌨️ Try: Arrow keys, Enter, Escape, typing to search
                  </p>
                </div>
                
                <Select 
                  :options="selectOptions"
                  placeholder="Loading state..."
                  :loading="true"
                  disabled
                />
                
                <Select 
                  :options="selectOptions"
                  v-model="multiSelectValue"
                  placeholder="Select with custom height..."
                  :maxMenuHeight="150"
                  :clearable="true"
                />
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
                <Checkbox 
                  v-model="checkbox1"
                  label="Accept terms and conditions" 
                />
                <Checkbox 
                  v-model="checkbox2"
                  label="Subscribe to newsletter" 
                />
                <Checkbox 
                  v-model="checkbox3"
                  label="Disabled checkbox" 
                  disabled 
                />
              </div>
            </div>

            <div>
              <p class="text-sm mb-3 text-muted-foreground">Indeterminate State (Select All)</p>
              <div class="space-y-3 p-4 border border-border rounded-lg">
                <Checkbox
                  :modelValue="isAllSelected"
                  @update:modelValue="handleSelectAllChange"
                  :indeterminate="isSomeSelected"
                  label="Select All"
                />
                <div class="ml-6 space-y-2">
                  <Checkbox
                    v-model="checkboxGroup.option1"
                    label="Option 1"
                  />
                  <Checkbox
                    v-model="checkboxGroup.option2"
                    label="Option 2"
                  />
                  <Checkbox
                    v-model="checkboxGroup.option3"
                    label="Option 3"
                  />
                  <Checkbox
                    v-model="checkboxGroup.option4"
                    label="Option 4"
                  />
                </div>
              </div>
            </div>

            <div>
              <p class="text-sm mb-2 text-muted-foreground">Inline</p>
              <div class="flex gap-4">
                <Checkbox 
                  v-model="checkbox1"
                  label="Option 1" 
                  inline
                />
                <Checkbox 
                  v-model="checkbox2"
                  label="Option 2" 
                  inline
                />
                <Checkbox 
                  v-model="checkbox3"
                  label="Option 3" 
                  inline
                  disabled 
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Radio -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Radio</h3>
          
          <div class="space-y-6">
            <div>
              <p class="text-sm mb-2 text-muted-foreground">Vertical (default)</p>
              <div class="space-y-3">
                <Radio 
                  name="option" 
                  label="Option 1" 
                  value="1" 
                  :checked="selectedRadio === '1'"
                  @change="() => selectedRadio = '1'"
                />
                <Radio 
                  name="option" 
                  label="Option 2" 
                  value="2" 
                  :checked="selectedRadio === '2'"
                  @change="() => selectedRadio = '2'"
                />
                <Radio 
                  name="option" 
                  label="Option 3" 
                  value="3" 
                  :checked="selectedRadio === '3'"
                  @change="() => selectedRadio = '3'"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Switch -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Switch</h3>
          
          <div class="space-y-6">
            <div>
              <p class="text-sm mb-2 text-muted-foreground">Vertical</p>
              <div class="space-y-3">
                <Switch 
                  :checked="switch1"
                  @change="(val: boolean) => switch1 = val"
                  label="Enable notifications"
                  :inline="false"
                />
                <Switch 
                  :checked="switch2"
                  @change="(val: boolean) => switch2 = val"
                  label="Dark mode"
                  :inline="false"
                />
                <Switch 
                  :checked="switch3"
                  @change="(val: boolean) => switch3 = val"
                  label="Disabled" 
                  disabled
                  :inline="false"
                />
              </div>
            </div>
            <div>
              <p class="text-sm mb-2 text-muted-foreground">Inline (default)</p>
              <div class="flex gap-4">
                <Switch 
                  :checked="switch1"
                  @change="(val: boolean) => switch1 = val"
                  label="Notifications"
                />
                <Switch 
                  :checked="switch2"
                  @change="(val: boolean) => switch2 = val"
                  label="Dark mode"
                />
                <Switch 
                  :checked="switch3"
                  @change="(val: boolean) => switch3 = val"
                  label="Disabled" 
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Slider -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Slider</h3>
          <div class="max-w-md space-y-6">
            <div>
              <label class="block text-sm font-medium mb-2">Volume: {{ sliderValue }}%</label>
              <Slider v-model="sliderValue" :min="0" :max="100" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Opacity: {{ sliderValue2 }}%</label>
              <Slider v-model="sliderValue2" :min="0" :max="100" :step="5" />
            </div>
          </div>
        </div>

        <!-- Badge -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Badge</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Variantes</h4>
              <div class="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Tamaños</h4>
              <div class="flex flex-wrap gap-3 items-center">
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Rounded</h4>
              <div class="flex flex-wrap gap-3">
                <Badge :rounded="true">Rounded</Badge>
                <Badge variant="primary" :rounded="true">Primary</Badge>
                <Badge variant="success" :rounded="true">Success</Badge>
              </div>
            </div>
          </div>
        </div>

        <!-- Tag -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Tag</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Variantes</h4>
              <div class="flex flex-wrap gap-3">
                <Tag>Default</Tag>
                <Tag variant="primary">Primary</Tag>
                <Tag variant="success">Success</Tag>
                <Tag variant="warning">Warning</Tag>
                <Tag variant="danger">Danger</Tag>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Tamaños</h4>
              <div class="flex flex-wrap gap-3 items-center">
                <Tag size="sm">Small</Tag>
                <Tag size="md">Medium</Tag>
                <Tag size="lg">Large</Tag>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Removable</h4>
              <div class="flex flex-wrap gap-3">
                <Tag :removable="true" @remove="() => console.log('Tag removed')">Removable</Tag>
                <Tag variant="primary" :removable="true">Primary</Tag>
                <Tag variant="success" :removable="true">Success</Tag>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Not Rounded</h4>
              <div class="flex flex-wrap gap-3">
                <Tag :rounded="false">Square</Tag>
                <Tag variant="primary" :rounded="false">Primary</Tag>
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
                  <Progress :value="progress" variant="primary" :label="true" />
                  <Progress :value="75" variant="secondary" :label="true" />
                  <Progress :value="90" variant="success" :label="true" />
                  <Progress :value="50" variant="warning" :label="true" />
                  <Progress :value="30" variant="danger" :label="true" />
                </div>
              </div>
              <div>
                <p class="text-sm mb-2 text-muted-foreground">Sizes</p>
                <div class="space-y-3">
                  <Progress :value="60" size="sm" label="Small" />
                  <Progress :value="70" size="md" label="Medium" />
                  <Progress :value="80" size="lg" label="Large" />
                </div>
              </div>
              <div>
                <p class="text-sm mb-2 text-muted-foreground">Custom Labels</p>
                <div class="space-y-3">
                  <Progress :value="progress" :label="`${progress}% Complete`" />
                  <Progress :value="45" label="Loading assets..." variant="secondary" />
                  <Progress :value="100" label="Done!" variant="success" />
                </div>
              </div>
              <div>
                <p class="text-sm mb-2 text-muted-foreground">Without Label</p>
                <Progress :value="progress" />
              </div>
              <Button size="sm" @click="increaseProgress">
                Increase +10%
              </Button>
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
                <Avatar size="sm" fallback="SM" alt="Small Avatar" />
                <Avatar size="md" fallback="MD" alt="Medium Avatar" />
                <Avatar size="lg" fallback="LG" alt="Large Avatar" />
                <Avatar size="xl" fallback="XL" alt="Extra Large Avatar" />
              </div>
            </div>

            <div>
              <p class="text-sm mb-3 text-muted-foreground">With Images</p>
              <div class="flex items-center gap-3">
                <Avatar size="sm" src="https://i.pravatar.cc/150?img=1" alt="User 1" />
                <Avatar size="md" src="https://i.pravatar.cc/150?img=2" alt="User 2" />
                <Avatar size="lg" src="https://i.pravatar.cc/150?img=3" alt="User 3" />
                <Avatar size="xl" src="https://i.pravatar.cc/150?img=4" alt="User 4" />
              </div>
            </div>
          </div>
        </div>

        <!-- Icon -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Icon</h3>
          <div class="flex flex-wrap gap-4 items-end">
            <Check :size="16" />
            <Check :size="20" />
            <Check :size="24" />
            <Check :size="32" />
          </div>
        </div>

        <!-- Skeleton -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Skeleton</h3>
          <div class="space-y-4 max-w-md">
            <Skeleton class="h-4 w-full" />
            <Skeleton class="h-4 w-3/4" />
            <Skeleton class="h-20 w-full" />
            <div class="flex gap-3">
              <Skeleton class="h-12 w-12 rounded-full" />
              <div class="flex-1 space-y-2">
                <Skeleton class="h-4 w-full" />
                <Skeleton class="h-4 w-2/3" />
              </div>
            </div>
          </div>
        </div>

        <!-- Spinner -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Spinner</h3>
          <div class="flex flex-wrap gap-6 items-end">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </div>

        <!-- Divider -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Divider</h3>
          
          <div class="space-y-8">
            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Horizontal</h4>
              <div>
                <p class="text-muted-foreground">Content above</p>
                <Divider />
                <p class="text-muted-foreground">Content below</p>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Vertical</h4>
              <div class="flex items-center gap-4" style="height: 60px;">
                <span class="text-muted-foreground">Left</span>
                <Divider orientation="vertical" />
                <span class="text-muted-foreground">Middle</span>
                <Divider orientation="vertical" />
                <span class="text-muted-foreground">Right</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Chip -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Chip</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Variantes</h4>
              <div class="flex flex-wrap gap-3">
                <Chip label="Default" />
                <Chip label="Primary" variant="primary" />
                <Chip label="Success" variant="success" />
                <Chip label="Error" variant="error" />
              </div>
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Removable</h4>
              <div class="flex flex-wrap gap-3">
                <Chip label="Removable" :onRemove="() => console.log('removed')" />
                <Chip label="Primary" variant="primary" :onRemove="() => console.log('removed')" />
                <Chip label="Success" variant="success" :onRemove="() => console.log('removed')" />
              </div>
            </div>
          </div>
        </div>

        <!-- KBD -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">KBD</h3>
          <div class="flex flex-wrap gap-3">
            <p class="text-muted-foreground">
              Press <KBD>Ctrl</KBD> + <KBD>C</KBD> to copy
            </p>
            <p class="text-muted-foreground">
              Press <KBD>Cmd</KBD> + <KBD>V</KBD> to paste
            </p>
            <p class="text-muted-foreground">
              Press <KBD>Enter</KBD> to submit
            </p>
          </div>
        </div>
      </section>

      <!-- MOLECULES SECTION -->
      <section>
        <h2 class="text-3xl font-bold mb-8 text-foreground">Molecules</h2>

        <!-- FormField -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">FormField</h3>
          <div class="space-y-6 max-w-md">
            <FormField label="Name" helperText="Enter your full name" required>
              <Input placeholder="John Doe" v-model="formName" />
            </FormField>
            
            <FormField label="Bio" helperText="Tell us about yourself">
              <Textarea placeholder="Write something..." v-model="formBio" :rows="4" />
            </FormField>
            
            <FormField label="Country">
              <Select :options="countryOptions" placeholder="Select your country" v-model="formCountry" />
            </FormField>
            
            <FormField>
              <Checkbox label="I agree to the terms and conditions" v-model="formAgree" />
            </FormField>
          </div>
        </div>

        <!-- Card -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Card</h3>
          
          <div class="space-y-6">
            <div>
              <p class="text-sm mb-3 text-muted-foreground">Básico con título y descripción</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card
                  title="Card Title"
                  description="This is a description that provides context about the card content."
                >
                  <p class="text-sm text-foreground">
                    Main card content goes here. You can add any React elements.
                  </p>
                </Card>
                
                <Card title="Simple Card">
                  <p class="text-sm text-foreground">
                    Card with only a title and content.
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <p class="text-sm mb-3 text-muted-foreground">Con header y footer</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <template #header>
                    <div class="p-4 bg-primary/10">
                      <p class="text-sm font-semibold text-primary">Header Section</p>
                    </div>
                  </template>
                  <p class="text-sm text-foreground">
                    Card with custom header and footer sections.
                  </p>
                  <template #footer>
                    <div class="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">Cancel</Button>
                      <Button variant="primary" size="sm">Save</Button>
                    </div>
                  </template>
                </Card>
                
                <Card>
                  <p class="text-sm font-medium text-foreground mb-2">Status Update</p>
                  <p class="text-sm text-muted-foreground">
                    All systems operational.
                  </p>
                  <template #footer>
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-muted-foreground">Updated 2 hours ago</span>
                      <Button variant="ghost" size="sm">View Details</Button>
                    </div>
                  </template>
                </Card>
              </div>
            </div>

            <div>
              <p class="text-sm mb-3 text-muted-foreground">Padding variants</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card title="Small Padding" padding="sm">
                  <p class="text-sm text-foreground">Compact card with small padding.</p>
                </Card>
                
                <Card title="Medium Padding" padding="md">
                  <p class="text-sm text-foreground">Default padding (medium).</p>
                </Card>
                
                <Card title="Large Padding" padding="lg">
                  <p class="text-sm text-foreground">Spacious card with large padding.</p>
                </Card>
              </div>
            </div>

            <div>
              <p class="text-sm mb-3 text-muted-foreground">Shadow variants</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card title="No Shadow" shadow="none" bordered>
                  <p class="text-sm text-foreground">Card without shadow but with border.</p>
                </Card>
                
                <Card title="Small Shadow" shadow="sm">
                  <p class="text-sm text-foreground">Card with subtle shadow (default).</p>
                </Card>
                
                <Card title="Medium Shadow" shadow="md">
                  <p class="text-sm text-foreground">Card with medium shadow.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <!-- Dropdown -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Dropdown</h3>
          
          <div class="flex gap-4">
            <Dropdown
              :items="[
                { label: 'Profile', value: 'profile' },
                { label: 'Settings', value: 'settings' },
                { label: 'Logout', value: 'logout' }
              ]"
              @select="handleDropdownSelect"
            >
              <template #trigger>
                <Button variant="primary">Open Menu</Button>
              </template>
            </Dropdown>
            
            <Dropdown
              :items="[
                { label: 'Edit', value: 'edit' },
                { label: 'Duplicate', value: 'duplicate' },
                { label: 'Delete', value: 'delete' }
              ]"
              @select="handleDropdownSelect"
              align="right"
            >
              <template #trigger>
                <Button variant="secondary">Options</Button>
              </template>
            </Dropdown>
            
            <Dropdown
              :items="[
                { label: 'Item 1', value: 'item1' },
                { label: 'Item 2', value: 'item2' }
              ]"
              @select="handleDropdownSelect"
              disabled
            >
              <template #trigger>
                <Button variant="primary" disabled>Disabled</Button>
              </template>
            </Dropdown>
          </div>
        </div>

        <!-- InputGroup -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">InputGroup</h3>
          
          <div class="max-w-md space-y-4">
            <InputGroup>
              <template #leftAddon>
                <Icon :size="18">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-full h-full">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </Icon>
              </template>
              <Input placeholder="Search..." />
            </InputGroup>
            
            <InputGroup>
              <template #leftAddon>
                <span class="font-medium">$</span>
              </template>
              <Input placeholder="0.00" />
            </InputGroup>
            
            <InputGroup>
              <template #rightAddon>
                <span class="text-sm">.com</span>
              </template>
              <Input placeholder="yourwebsite" />
            </InputGroup>
            
            <InputGroup>
              <template #leftAddon>
                <span class="font-medium">https://</span>
              </template>
              <template #rightAddon>
                <Icon :size="18">
                  <Check class="w-full h-full text-success" />
                </Icon>
              </template>
              <Input placeholder="example.com" />
            </InputGroup>
          </div>
        </div>

        <!-- Alert -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Alert</h3>
          
          <div class="space-y-4 max-w-2xl">
            <Alert
              variant="info"
              title="Information"
              description="This is an informational alert with additional context."
            >
              <template #icon>
                <Icon :size="20">
                  <Info class="w-full h-full" />
                </Icon>
              </template>
            </Alert>
            
            <Alert
              variant="success"
              title="Success"
              description="Your changes have been saved successfully."
              :closable="true"
              :onClose="() => console.log('Alert closed')"
            >
              <template #icon>
                <Icon :size="20">
                  <CheckCircle class="w-full h-full" />
                </Icon>
              </template>
            </Alert>
            
            <Alert
              variant="warning"
              title="Warning"
              description="Please review your settings before proceeding."
            >
              <template #icon>
                <Icon :size="20">
                  <AlertTriangle class="w-full h-full" />
                </Icon>
              </template>
            </Alert>
            
            <Alert
              variant="danger"
              title="Error"
              description="An error occurred while processing your request."
              :closable="true"
              :onClose="() => console.log('Error alert closed')"
            >
              <template #icon>
                <Icon :size="20">
                  <XCircle class="w-full h-full" />
                </Icon>
              </template>
            </Alert>
          </div>
        </div>

        <!-- Breadcrumbs -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Breadcrumbs</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Básico</h4>
              <Breadcrumbs :items="breadcrumbItems" />
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Short</h4>
              <Breadcrumbs :items="breadcrumbItemsShort" />
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Current Page Only</h4>
              <Breadcrumbs :items="breadcrumbItemsSingle" />
            </div>
          </div>
        </div>

        <!-- Tabs -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Tabs</h3>
          
          <div class="space-y-6">
            <div>
              <p class="text-sm mb-3 text-muted-foreground">Default Tabs</p>
              <Tabs
                :tabs="[
                  { label: 'Overview', value: 'overview' },
                  { label: 'Analytics', value: 'analytics' },
                  { label: 'Reports', value: 'reports' },
                  { label: 'Settings', value: 'settings' },
                ]"
                :value="activeTab"
                @change="(val: string) => activeTab = val"
              />
              <div class="mt-4 p-4 bg-muted/50 rounded-md">
                <p class="text-sm text-foreground">Active tab content: {{ activeTab }}</p>
              </div>
            </div>
            
            <div>
              <p class="text-sm mb-3 text-muted-foreground">Full Width Tabs</p>
              <Tabs
                :tabs="[
                  { label: 'Profile', value: 'profile' },
                  { label: 'Account', value: 'account' },
                  { label: 'Notifications', value: 'notifications' },
                ]"
                :value="activeTab2"
                @change="(val: string) => activeTab2 = val"
                :fullWidth="true"
              />
              <div class="mt-4 p-4 bg-muted/50 rounded-md">
                <p class="text-sm text-foreground">Active tab: {{ activeTab2 }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Accordion -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Accordion</h3>
          
          <div class="space-y-6 max-w-2xl">
            <div>
              <p class="text-sm text-muted-foreground mb-3">Single mode (only one open at a time)</p>
              <Accordion
                :items="[
                  {
                    id: 'item1',
                    title: 'What is this component library?',
                    content: 'This is a comprehensive design system built with Vue, TypeScript, and Tailwind CSS. It provides a collection of reusable components following atomic design principles.',
                  },
                  {
                    id: 'item2',
                    title: 'How do I use these components?',
                    content: 'Simply import the components you need from the library and use them in your Vue application. All components are fully typed with TypeScript and documented.',
                  },
                  {
                    id: 'item3',
                    title: 'Can I customize the styling?',
                    content: 'Yes! All components use design tokens defined in the tokens folder. You can customize colors, spacing, typography, and more by modifying these tokens.',
                  },
                ]"
                :defaultOpen="['item1']"
              />
            </div>
            
            <div>
              <p class="text-sm text-muted-foreground mb-3">Multiple mode (can open multiple at once)</p>
              <Accordion
                :items="[
                  {
                    id: 'faq1',
                    title: 'Is it accessible?',
                    content: 'Yes, all components follow WCAG accessibility guidelines.',
                  },
                  {
                    id: 'faq2',
                    title: 'Does it support dark mode?',
                    content: 'Yes, the design system supports both light and dark themes.',
                  },
                  {
                    id: 'faq3',
                    title: 'Is it responsive?',
                    content: 'Absolutely! All components are mobile-friendly and responsive.',
                  },
                ]"
                :multiple="true"
                :defaultOpen="['faq1', 'faq2']"
              />
            </div>
          </div>
        </div>

        <!-- SearchBar -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">SearchBar</h3>
          <div class="space-y-4 max-w-md">
            <div>
              <p class="text-sm text-muted-foreground mb-2">With clear button (default)</p>
              <SearchBar
                :value="searchValue"
                @update:value="(val: string) => searchValue = val"
                placeholder="Search components..."
              />
            </div>
            
            <div v-if="searchValue" class="text-sm text-foreground">
              Current search: <span class="font-medium">{{ searchValue }}</span>
            </div>
          </div>
        </div>

        <!-- Multi-step Form Preview -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Multi-step Form Preview</h3>
          <Card padding="lg">
            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <h4 class="text-lg font-medium text-foreground">Step {{ multiStepForm.currentStep }} of {{ multiStepForm.totalSteps }}</h4>
                <div class="flex gap-2">
                  <div
                    v-for="step in [1, 2, 3]"
                    :key="step"
                    :class="[
                      'w-8 h-1 rounded-full',
                      step < multiStepForm.currentStep
                        ? 'bg-primary'
                        : step === multiStepForm.currentStep
                        ? 'bg-primary/50'
                        : 'bg-muted'
                    ]"
                  />
                </div>
              </div>

              <!-- Step 1: Personal Info -->
              <div v-if="multiStepForm.currentStep === 1" class="space-y-4">
                <h5 class="font-medium text-foreground">Personal Information</h5>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField id="ms-firstName" label="First Name">
                    <Input
                      placeholder="John"
                      v-model="multiStepForm.firstName"
                    />
                  </FormField>
                  <FormField id="ms-lastName" label="Last Name">
                    <Input
                      placeholder="Doe"
                      v-model="multiStepForm.lastName"
                    />
                  </FormField>
                </div>
              </div>

              <!-- Step 2: Contact Info -->
              <div v-if="multiStepForm.currentStep === 2" class="space-y-4">
                <h5 class="font-medium text-foreground">Contact Information</h5>
                <div class="space-y-4">
                  <FormField id="ms-email" label="Email">
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      v-model="multiStepForm.email"
                    />
                  </FormField>
                  <FormField id="ms-phone" label="Phone">
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      v-model="multiStepForm.phone"
                    />
                  </FormField>
                </div>
              </div>

              <!-- Step 3: Preferences -->
              <div v-if="multiStepForm.currentStep === 3" class="space-y-4">
                <h5 class="font-medium text-foreground">Preferences</h5>
                <div class="space-y-4">
                  <FormField id="ms-contactMethod" label="Preferred Contact Method">
                    <Select
                      placeholder="Choose method..."
                      :options="[
                        { label: 'Email', value: 'email' },
                        { label: 'Phone', value: 'phone' },
                        { label: 'SMS', value: 'sms' },
                      ]"
                      v-model="multiStepForm.contactMethod"
                    />
                  </FormField>
                  <div class="space-y-3">
                    <label class="block text-sm font-medium text-foreground">Interests</label>
                    <Checkbox
                      label="Technology"
                      :checked="multiStepForm.interests.technology"
                      @update:checked="(val: boolean) => multiStepForm.interests.technology = val"
                    />
                    <Checkbox
                      label="Design"
                      :checked="multiStepForm.interests.design"
                      @update:checked="(val: boolean) => multiStepForm.interests.design = val"
                    />
                    <Checkbox
                      label="Business"
                      :checked="multiStepForm.interests.business"
                      @update:checked="(val: boolean) => multiStepForm.interests.business = val"
                    />
                  </div>
                </div>
              </div>

              <div class="flex justify-between pt-6">
                <Button
                  variant="outline"
                  @click="() => multiStepForm.currentStep--"
                  :disabled="multiStepForm.currentStep === 1"
                >
                  Previous
                </Button>
                <Button
                  variant="primary"
                  @click="() => {
                    if (multiStepForm.currentStep === multiStepForm.totalSteps) {
                      console.log('Form submitted:', multiStepForm);
                    } else {
                      multiStepForm.currentStep++;
                    }
                  }"
                >
                  {{ multiStepForm.currentStep === multiStepForm.totalSteps ? 'Submit' : 'Next' }}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <!-- ORGANISMS SECTION -->
      <section>
        <h2 class="text-3xl font-bold mb-8 text-foreground">Organisms</h2>

        <!-- Navbar -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Navbar</h3>
          <div class="space-y-6">
            <div>
              <p class="text-sm text-muted-foreground mb-3">With logo, links, and right content</p>
              <Navbar
                :links="[
                  { label: 'Home', href: '#home' },
                  { label: 'Products', href: '#products' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ]"
              >
                <template #logo>
                  <span class="font-bold text-primary">Brand</span>
                </template>
                <template #rightContent>
                  <Button size="sm" variant="primary">
                    Sign In
                  </Button>
                </template>
              </Navbar>
            </div>
            
            <div>
              <p class="text-sm text-muted-foreground mb-3">With search bar</p>
              <Navbar
                :links="[
                  { label: 'Dashboard', href: '#dashboard' },
                  { label: 'Settings', href: '#settings' },
                ]"
              >
                <template #logo>
                  <div class="flex items-center gap-2">
                    <Icon :size="24">
                      <Home class="w-full h-full text-primary" />
                    </Icon>
                    <span class="font-bold">Logo</span>
                  </div>
                </template>
                <template #rightContent>
                  <div class="w-64">
                    <SearchBar
                      :value="searchValue"
                      @update:value="(val: string) => searchValue = val"
                      placeholder="Search..."
                    />
                  </div>
                </template>
              </Navbar>
            </div>
          </div>
        </div>

        <!-- Header -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Header</h3>
          <Header>
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-bold">Page Title</h2>
              <Button size="sm">Action</Button>
            </div>
          </Header>
        </div>

        <!-- Sidebar -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Sidebar</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Expanded</h4>
              <div class="border rounded-lg" style="height: 400px;">
                <Sidebar :items="sidebarItems" :collapsed="false">
                  <template #header>
                    <div class="p-4 border-b">
                      <h3 class="font-bold">My App</h3>
                    </div>
                  </template>
                </Sidebar>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Collapsed</h4>
              <div class="border rounded-lg" style="height: 400px;">
                <Sidebar :items="sidebarItems" :collapsed="true" />
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Footer</h3>
          <Footer>
            <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>&copy; 2024 My Company. All rights reserved.</p>
              <div class="flex gap-4">
                <a href="#" class="hover:text-foreground">Privacy</a>
                <a href="#" class="hover:text-foreground">Terms</a>
                <a href="#" class="hover:text-foreground">Contact</a>
              </div>
            </div>
          </Footer>
        </div>

        <!-- Toolbar -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Toolbar</h3>
          <Toolbar>
            <div class="flex items-center justify-between">
              <div class="flex gap-2">
                <Button size="sm" variant="outline">
                  <template #leftIcon>
                    <Plus :size="16" />
                  </template>
                  New
                </Button>
                <Button size="sm" variant="outline">
                  <template #leftIcon>
                    <Download :size="16" />
                  </template>
                  Export
                </Button>
              </div>
              <div class="flex gap-2">
                <Button size="sm" variant="ghost">
                  <Filter :size="16" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Settings :size="16" />
                </Button>
              </div>
            </div>
          </Toolbar>
        </div>

        <!-- ListItem -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">ListItem</h3>
          
          <div class="space-y-2 max-w-md">
            <ListItem 
              title="Simple list item" 
            />
            <ListItem 
              title="With description" 
              description="This is a secondary description text"
            />
            <ListItem 
              title="With left icon"
              description="Email notification settings"
            >
              <template #leftIcon>
                <Icon :size="20">
                  <Bell class="w-full h-full" />
                </Icon>
              </template>
            </ListItem>
            <ListItem 
              title="With right icon"
              description="Navigate to profile page"
            >
              <template #rightIcon>
                <Icon :size="16">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-full h-full">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </Icon>
              </template>
            </ListItem>
            <ListItem 
              title="Clickable item"
              description="Click me to see the action"
              :clickable="true"
              @click="() => console.log('Item clicked!')"
            >
              <template #leftIcon>
                <Icon :size="20">
                  <UserIcon class="w-full h-full" />
                </Icon>
              </template>
              <template #rightIcon>
                <Icon :size="16">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-full h-full">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </Icon>
              </template>
            </ListItem>
          </div>
        </div>

        <!-- ListGroup with ListItem -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">ListGroup & ListItem</h3>
          <ListGroup>
            <ListItem 
              title="Home"
              :clickable="true"
              @click="() => console.log('Home')"
            >
              <template #leftIcon>
                <Icon :size="20">
                  <Home class="w-full h-full" />
                </Icon>
              </template>
            </ListItem>
            <ListItem 
              title="Profile" 
              description="View and edit your profile"
              :clickable="true"
              :active="true"
              @click="() => console.log('Profile')"
            >
              <template #leftIcon>
                <Icon :size="20">
                  <UserIcon class="w-full h-full" />
                </Icon>
              </template>
            </ListItem>
            <ListItem 
              title="Notifications" 
              description="3 new notifications"
              :clickable="true"
              @click="() => console.log('Notifications')"
            >
              <template #leftIcon>
                <Icon :size="20">
                  <Bell class="w-full h-full" />
                </Icon>
              </template>
              <template #rightIcon>
                <Badge size="sm" variant="primary">3</Badge>
              </template>
            </ListItem>
            <ListItem 
              title="Settings"
              :clickable="true"
              @click="() => console.log('Settings')"
            >
              <template #leftIcon>
                <Icon :size="20">
                  <Settings class="w-full h-full" />
                </Icon>
              </template>
            </ListItem>
          </ListGroup>
        </div>

        <!-- Modal -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Modal</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Básico</h4>
              <div class="flex gap-4">
                <Button @click="openModal('sm')">Small Modal</Button>
                <Button @click="openModal('md')">Medium Modal</Button>
                <Button @click="openModal('lg')">Large Modal</Button>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Con Formulario</h4>
              <Button @click="modalFormOpen = true">Open Form Modal</Button>
            </div>
          </div>

          <!-- Small Modal -->
          <Modal :open="modalSmOpen" @close="closeModalSm" title="Small Modal" size="sm">
            <p class="text-muted-foreground">This is a small modal dialog.</p>
            <template #footer>
              <div class="flex gap-2 justify-end">
                <Button variant="outline" @click="closeModalSm">Cancel</Button>
                <Button @click="closeModalSm">Confirm</Button>
              </div>
            </template>
          </Modal>

          <!-- Medium Modal -->
          <Modal :open="modalMdOpen" @close="closeModalMd" title="Medium Modal" size="md">
            <p class="text-muted-foreground">This is a medium modal dialog with more content space.</p>
            <p class="text-muted-foreground mt-2">You can add more complex content here.</p>
            <template #footer>
              <div class="flex gap-2 justify-end">
                <Button variant="outline" @click="closeModalMd">Cancel</Button>
                <Button @click="closeModalMd">Confirm</Button>
              </div>
            </template>
          </Modal>

          <!-- Large Modal -->
          <Modal :open="modalLgOpen" @close="closeModalLg" title="Large Modal" size="lg">
            <div class="space-y-4">
              <p class="text-muted-foreground">This is a large modal dialog perfect for complex forms or detailed content.</p>
              <div class="grid grid-cols-2 gap-4">
                <Card padding="sm">
                  <p class="text-sm text-muted-foreground">Content block 1</p>
                </Card>
                <Card padding="sm">
                  <p class="text-sm text-muted-foreground">Content block 2</p>
                </Card>
              </div>
            </div>
            <template #footer>
              <div class="flex gap-2 justify-end">
                <Button variant="outline" @click="closeModalLg">Cancel</Button>
                <Button @click="closeModalLg">Confirm</Button>
              </div>
            </template>
          </Modal>

          <!-- Form Modal -->
          <Modal :open="modalFormOpen" @close="() => modalFormOpen = false" title="Create New Item">
            <div class="space-y-4">
              <FormField label="Item Name" required>
                <Input placeholder="Enter name..." v-model="modalFormName" />
              </FormField>
              <FormField label="Description">
                <Textarea placeholder="Enter description..." v-model="modalFormDesc" :rows="3" />
              </FormField>
              <FormField label="Category">
                <Select :options="selectOptions" v-model="modalFormCategory" />
              </FormField>
            </div>
            <template #footer>
              <div class="flex gap-2 justify-end">
                <Button variant="outline" @click="modalFormOpen = false">Cancel</Button>
                <Button @click="modalFormOpen = false">Create</Button>
              </div>
            </template>
          </Modal>
        </div>

        <!-- Drawer -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Drawer</h3>
          
          <div class="flex gap-4">
            <Button @click="openDrawer('right')">Right Drawer</Button>
            <Button @click="openDrawer('left')">Left Drawer</Button>
            <Button @click="openDrawer('top')">Top Drawer</Button>
            <Button @click="openDrawer('bottom')">Bottom Drawer</Button>
          </div>

          <Drawer 
            :open="drawerOpen" 
            @close="closeDrawer" 
            :position="drawerPosition"
            :title="`${drawerPosition.charAt(0).toUpperCase() + drawerPosition.slice(1)} Drawer`"
          >
            <div class="space-y-4">
              <p class="text-muted-foreground">This is a {{ drawerPosition }} drawer.</p>
              <div class="space-y-2">
                <Input placeholder="Search..." v-model="drawerSearch" />
                <div class="border rounded-lg divide-y">
                  <ListItem title="Item 1" :clickable="true" />
                  <ListItem title="Item 2" :clickable="true" />
                  <ListItem title="Item 3" :clickable="true" />
                </div>
              </div>
            </div>
            <template #footer>
              <div class="flex gap-2 justify-end">
                <Button variant="outline" @click="closeDrawer">Close</Button>
                <Button>Save</Button>
              </div>
            </template>
          </Drawer>
        </div>

        <!-- Table -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Table</h3>
          <div class="max-w-4xl">
            <Table :columns="tableColumns" :data="tableData" />
          </div>
        </div>

        <!-- Pagination -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">Pagination</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Middle Page</h4>
              <Pagination :page="currentPage1" :totalPages="10" @change="handlePaginationChange1" />
              <p class="text-sm text-muted-foreground mt-2">Current page: {{ currentPage1 }}</p>
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">First Page</h4>
              <Pagination :page="currentPage2" :totalPages="5" @change="handlePaginationChange2" />
              <p class="text-sm text-muted-foreground mt-2">Current page: {{ currentPage2 }}</p>
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Last Page</h4>
              <Pagination :page="currentPage3" :totalPages="5" @change="handlePaginationChange3" />
              <p class="text-sm text-muted-foreground mt-2">Current page: {{ currentPage3 }}</p>
            </div>
          </div>
        </div>

        <!-- CardList -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">CardList</h3>
          
          <div class="space-y-8">
            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">3 Columns</h4>
              <CardList :items="cardListItems1" :cols="3">
                <template #item="{ item, index }">
                  <Card padding="md">
                    <h4 class="font-semibold mb-2">{{ item.title }}</h4>
                    <p class="text-sm text-muted-foreground">{{ item.description }}</p>
                  </Card>
                </template>
              </CardList>
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">4 Columns with Larger Gap</h4>
              <CardList :items="cardListItems2" :cols="4" :gap="6">
                <template #item="{ item }">
                  <Card padding="sm">
                    <div class="text-center">
                      <Box :size="24" class="mx-auto mb-2" />
                      <p class="text-sm font-medium">{{ item }}</p>
                    </div>
                  </Card>
                </template>
              </CardList>
            </div>
          </div>
        </div>

        <!-- KpiCard -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">KpiCard (StatCard)</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Con Trends</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <KpiCard 
                  label="Total Revenue"
                  value="$45,231"
                  trend="up"
                  trendValue="+20.1%"
                >
                  <template #icon>
                    <DollarSign :size="24" />
                  </template>
                </KpiCard>
                
                <KpiCard 
                  label="Active Users"
                  value="2,350"
                  trend="up"
                  trendValue="+15.3%"
                >
                  <template #icon>
                    <Users :size="24" />
                  </template>
                </KpiCard>
                
                <KpiCard 
                  label="Bounce Rate"
                  value="42.5%"
                  trend="down"
                  trendValue="-8.2%"
                >
                  <template #icon>
                    <Activity :size="24" />
                  </template>
                </KpiCard>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Sin Trend Values</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <KpiCard 
                  label="Total Sales"
                  value="1,234"
                >
                  <template #icon>
                    <ShoppingCart :size="24" />
                  </template>
                </KpiCard>
                
                <KpiCard 
                  label="New Customers"
                  value="89"
                >
                  <template #icon>
                    <UserPlus :size="24" />
                  </template>
                </KpiCard>
              </div>
            </div>
          </div>
        </div>

        <!-- EmptyState -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">EmptyState</h3>
          <div class="max-w-2xl">
            <Card>
              <EmptyState 
                title="No data available"
                description="Get started by creating your first item."
              >
                <template #icon>
                  <Inbox :size="48" />
                </template>
                <template #action>
                  <Button>
                    <template #leftIcon>
                      <Plus :size="16" />
                    </template>
                    Create Item
                  </Button>
                </template>
              </EmptyState>
            </Card>
          </div>
        </div>

        <!-- UserMenu -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold mb-4 text-foreground">UserMenu</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Con Avatar y Opciones</h4>
              <div class="flex gap-4">
                <UserMenu 
                  :user="{ name: 'John Doe', email: 'john@example.com', avatarSrc: 'https://i.pravatar.cc/150?img=1' }"
                  :items="userMenuItems"
                  @select="handleUserMenuSelect"
                />
              </div>
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Sin Email</h4>
              <UserMenu 
                :user="{ name: 'Jane Smith', avatarSrc: 'https://i.pravatar.cc/150?img=2' }"
                :items="userMenuItems2"
                @select="handleUserMenuSelect"
              />
            </div>

            <div>
              <h4 class="text-lg font-medium text-foreground mb-3">Fallback Avatar</h4>
              <UserMenu 
                :user="{ name: 'Bob Johnson', email: 'bob@example.com' }"
                :items="userMenuItems"
                @select="handleUserMenuSelect"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import {
  Mail, ArrowRight, Check, Home, Settings, User as UserIcon, Folder, Users, 
  Plus, Download, Filter, Box, DollarSign, Activity, ShoppingCart, UserPlus, 
  Inbox, Sun, Moon, Info, AlertTriangle, CheckCircle, XCircle, Bell
} from 'lucide-vue-next';
import {
  // Atoms
  Button, Input, Textarea, Select, Checkbox, Radio, Switch, Slider, 
  Badge, Tag, Progress, Avatar, Icon, Skeleton, Spinner, Divider, Chip, KBD,
  // Molecules
  FormField, Card, Dropdown, InputGroup, ListItem, Alert, Breadcrumbs, 
  Tabs, Accordion, SearchBar,
  // Organisms
  Navbar, Sidebar, Header, Footer, Toolbar, ListGroup, Modal, Drawer, 
  Table, Pagination, CardList, KpiCard, EmptyState, UserMenu,
  // Types
  SelectOption, BreadcrumbItem, TabItem, AccordionItem, DropdownItem, 
  SidebarItem, NavLink, User, UserMenuItem, TableColumn
} from '@luisvelito/vue';

// Theme
const isDark = ref(false);

// Atoms - Button
const progress = ref(65);

// Atoms - Input
const inputBasic1 = ref('');
const emailValue = ref('');
const phoneValue = ref('');
const passwordValue = ref('');
const loadingInput = ref(false);
const isEmailValid = ref(false);
const isPhoneValid = ref(false);

// Atoms - Textarea
const textareaValue = ref('');
const autoResizeValue = ref('');

// Atoms - Select
const selectValue = ref('');
const searchableSelectValue = ref('');
const multiSelectValue = ref('');

const selectOptions: SelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4 (Disabled)', value: '4', disabled: true },
  { label: 'Option 5', value: '5' }
];

const countryOptions: SelectOption[] = [
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
  { label: 'Mexico', value: 'mx' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Spain', value: 'es' },
  { label: 'Italy', value: 'it' },
  { label: 'Japan', value: 'jp' },
  { label: 'Australia', value: 'au' },
  { label: 'Brazil', value: 'br' },
  { label: 'India', value: 'in' }
];

// Atoms - Checkbox
const checkbox1 = ref(false);
const checkbox2 = ref(true);
const checkbox3 = ref(false);
const checkboxGroup = ref({
  option1: false,
  option2: true,
  option3: false,
  option4: false
});

const selectedCount = computed(() => {
  return Object.values(checkboxGroup.value).filter(Boolean).length;
});
const totalCount = computed(() => Object.keys(checkboxGroup.value).length);
const isAllSelected = computed(() => selectedCount.value === totalCount.value);
const isSomeSelected = computed(() => selectedCount.value > 0 && selectedCount.value < totalCount.value);

const handleSelectAllChange = (checked: boolean) => {
  checkboxGroup.value.option1 = checked;
  checkboxGroup.value.option2 = checked;
  checkboxGroup.value.option3 = checked;
  checkboxGroup.value.option4 = checked;
};

// Atoms - Radio
const selectedRadio = ref('1');

// Atoms - Switch
const switch1 = ref(false);
const switch2 = ref(true);
const switch3 = ref(false);

// Atoms - Slider
const sliderValue = ref(50);
const sliderValue2 = ref(30);

// Molecules - FormField
const formName = ref('');
const formBio = ref('');
const formCountry = ref('');
const formAgree = ref(false);

// Molecules - Dropdown
const handleDropdownSelect = (value: string) => {
  console.log('Selected:', value);
};

// Molecules - InputGroup (no state needed)

// Molecules - Breadcrumbs
const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Electronics', href: '#electronics' },
  { label: 'Laptop' }
];

const breadcrumbItemsShort: BreadcrumbItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Current Page' }
];

const breadcrumbItemsSingle: BreadcrumbItem[] = [
  { label: 'Current Page' }
];

// Molecules - Tabs
const activeTab = ref('overview');
const activeTab2 = ref('profile');

// Tabs (inline definitions)

// Molecules - Accordion
// Molecules - Accordion (inline definitions)

// Molecules - SearchBar
const searchValue = ref('');

// Molecules - Multi-step Form
const multiStepForm = ref({
  currentStep: 1,
  totalSteps: 3,
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
});

// Organisms - Navbar
// Navbar (inline definitions)

// Organisms - Sidebar
const sidebarItems: SidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    href: '#dashboard',
    active: true
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    href: '#projects'
  },
  {
    id: 'team',
    label: 'Team',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    href: '#team'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.35a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.73v.56a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.78 1.35a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.35a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.73v-.56a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0 .73-2.73l-.78-1.35a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
    href: '#settings'
  }
];

// Organisms - Modal
const modalSmOpen = ref(false);
const modalMdOpen = ref(false);
const modalLgOpen = ref(false);
const modalFormOpen = ref(false);
const modalFormName = ref('');
const modalFormDesc = ref('');
const modalFormCategory = ref('');

const openModal = (size: 'sm' | 'md' | 'lg' = 'md') => {
  if (size === 'sm') {
    modalSmOpen.value = true;
  } else if (size === 'lg') {
    modalLgOpen.value = true;
  } else {
    modalMdOpen.value = true;
  }
};

const closeModalSm = () => { modalSmOpen.value = false; };
const closeModalMd = () => { modalMdOpen.value = false; };
const closeModalLg = () => { modalLgOpen.value = false; };

// Organisms - Drawer
const drawerOpen = ref(false);
const drawerPosition = ref<'left' | 'right' | 'top' | 'bottom'>('right');
const drawerSearch = ref('');

const openDrawer = (position: 'left' | 'right' | 'top' | 'bottom' = 'right') => {
  drawerPosition.value = position;
  drawerOpen.value = true;
};

const closeDrawer = () => {
  drawerOpen.value = false;
};

// Organisms - Table
const tableColumns: TableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' },
];

const tableData = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'Active' },
];

// Organisms - Pagination
const currentPage1 = ref(2);
const currentPage2 = ref(1);
const currentPage3 = ref(5);

// Organisms - CardList
const cardListItems1 = [
  { title: 'Card 1', description: 'This is card content number 1.' },
  { title: 'Card 2', description: 'This is card content number 2.' },
  { title: 'Card 3', description: 'This is card content number 3.' },
  { title: 'Card 4', description: 'This is card content number 4.' },
  { title: 'Card 5', description: 'This is card content number 5.' },
  { title: 'Card 6', description: 'This is card content number 6.' }
];

const cardListItems2 = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];

const handlePaginationChange1 = (page: number) => {
  currentPage1.value = page;
};

const handlePaginationChange2 = (page: number) => {
  currentPage2.value = page;
};

const handlePaginationChange3 = (page: number) => {
  currentPage3.value = page;
};

// Organisms - UserMenu
const userMenuItems: UserMenuItem[] = [
  {
    label: "Profile",
    value: "profile",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  },
  {
    label: "Settings",
    value: "settings",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.35a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.73v.56a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.78 1.35a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.35a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.73v-.56a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0 .73-2.73l-.78-1.35a2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>'
  },
  {
    label: "Logout",
    value: "logout",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>'
  }
];

const userMenuItems2: UserMenuItem[] = [
  {
    label: "My Account",
    value: "account",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  },
  {
    label: "Help & Support",
    value: "help",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>'
  },
  {
    label: "Sign Out",
    value: "signout",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>'
  }
];

const handleUserMenuSelect = (value: string) => {
  console.log('User menu selected:', value);
  if (value === 'logout' || value === 'signout') {
    alert('Logout clicked!');
  }
};

// Methods
const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

const increaseProgress = () => {
  progress.value = Math.min(100, progress.value + 10);
};

const simulateLoading = () => {
  loadingInput.value = true;
  setTimeout(() => loadingInput.value = false, 2000);
};

onMounted(() => {
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    isDark.value = true;
  } else {
    document.documentElement.classList.remove('dark');
    isDark.value = false;
  }
});
</script>
