import React, { useState } from 'react';
import { Heart, Star, Settings, User, Bell, Home, Info, CheckCircle, AlertTriangle, XCircle, Folder, Users, LogOut, TrendingUp, DollarSign, ShoppingCart, Activity, Inbox, FileX, Search } from 'lucide-react';
import {
  // Atoms
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Slider,
  Badge,
  Tag,
  Progress,
  Avatar,
  Icon,
  Skeleton,
  Spinner,
  Divider,
  Chip,
  KBD,
  // Molecules
  FormField,
  Card,
  Dropdown,
  InputGroup,
  ListItem,
  Alert,
  Breadcrumbs,
  Tabs,
  Accordion,
  SearchBar,
  // Organisms
  Navbar,
  Sidebar,
  Header,
  Footer,
  Toolbar,
  ListGroup,
  Modal,
  Drawer,
  Table,
  Pagination,
  CardList,
  KpiCard,
  EmptyState,
  UserMenu,
} from '@luisvelito/react';

const App = () => {
  const [progress, setProgress] = useState(65);
  const [sliderValue, setSliderValue] = useState(50);
  const [isDark, setIsDark] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('1');
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [checkbox3, setCheckbox3] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeTab2, setActiveTab2] = useState('profile');
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSmOpen, setModalSmOpen] = useState(false);
  const [modalMdOpen, setModalMdOpen] = useState(false);
  const [modalLgOpen, setModalLgOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerPosition, setDrawerPosition] = useState<"left" | "right" | "top" | "bottom">("right");
  const [currentPage1, setCurrentPage1] = useState(2);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [currentPage3, setCurrentPage3] = useState(5);

  // New Phase 2 states
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [loadingInput, setLoadingInput] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [autoResizeValue, setAutoResizeValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [searchableSelectValue, setSearchableSelectValue] = useState('');
  const [multiSelectValue, setMultiSelectValue] = useState('');
  const [checkboxIndeterminate, setCheckboxIndeterminate] = useState(false);
  const [checkboxGroup, setCheckboxGroup] = useState({
    option1: false,
    option2: true,
    option3: false,
    option4: false
  });

  // Helper functions for Phase 2
  const selectOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4 (Disabled)', value: '4', disabled: true },
    { label: 'Option 5', value: '5' }
  ];

  const countryOptions = [
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

  const simulateLoading = () => {
    setLoadingInput(true);
    setTimeout(() => setLoadingInput(false), 2000);
  };

  const handleCheckboxGroupChange = (key: keyof typeof checkboxGroup) => {
    setCheckboxGroup(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const selectedCount = Object.values(checkboxGroup).filter(Boolean).length;
  const totalCount = Object.keys(checkboxGroup).length;
  const isAllSelected = selectedCount === totalCount;
  const isNoneSelected = selectedCount === 0;
  const isSomeSelected = selectedCount > 0 && selectedCount < totalCount;

  const handleSelectAllChange = (checked: boolean) => {
    // Simple logic: just use the checked value from the checkbox
    // The indeterminate state is only visual, the actual checked state drives the behavior
    setCheckboxGroup({
      option1: checked,
      option2: checked,
      option3: checked,
      option4: checked
    });
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-card border-b border-border px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Component Library Preview</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-muted hover:bg-muted/80 text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  <span className="text-sm font-medium">Light</span>
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                  <span className="text-sm font-medium">Dark</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-12">
        
        {/* HEADER SECTION */}
        <section className="text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Comprehensive React component library with advanced functionalities including validation, auto-resize, 
              keyboard navigation, and custom dropdown implementations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-card rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">✨ Phase 2 Features</h4>
                <p className="text-muted-foreground">Advanced validation, loading states, auto-resize, and custom dropdowns</p>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">⌨️ Keyboard Navigation</h4>
                <p className="text-muted-foreground">Full keyboard support with Arrow keys, Enter, Escape, and more</p>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">♿ Accessibility</h4>
                <p className="text-muted-foreground">Complete ARIA attributes, focus management, and screen reader support</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* ATOMS SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-foreground">Atoms</h2>
          
          {/* Button */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Button</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="sm">Primary Small</Button>
              <Button variant="primary" size="md">Primary Medium</Button>
              <Button variant="primary" size="lg">Primary Large</Button>
              <Button variant="secondary" size="md">Secondary</Button>
              <Button variant="ghost" size="md">Ghost</Button>
              <Button variant="primary" size="md" loading>Loading</Button>
              <Button variant="primary" size="md" disabled>Disabled</Button>
            </div>
          </div>

          {/* Input */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Input</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm mb-3 text-muted-foreground">Basic States</p>
                <div className="space-y-4 max-w-md">
                  <Input placeholder="Normal input" />
                  <Input placeholder="Disabled input" disabled />
                  <Input placeholder="Error input" invalid />
                </div>
              </div>

              <div>
                <p className="text-sm mb-3 text-muted-foreground">Advanced Features</p>
                <div className="space-y-4 max-w-md">
                  <Input 
                    placeholder="Email validation" 
                    value={emailValue}
                    onChange={setEmailValue}
                    validation={[{ type: 'email', message: 'Please enter a valid email' }]}
                    validateOnBlur
                    onValidationChange={(valid, errors) => setIsEmailValid(valid)}
                    leftIcon={<User className="w-4 h-4" />}
                    clearable
                  />
                  
                  <Input 
                    placeholder="Phone validation" 
                    value={phoneValue}
                    onChange={setPhoneValue}
                    validation={[{ type: 'phone', message: 'Please enter a valid phone number' }]}
                    validateOnChange
                    onValidationChange={(valid, errors) => setIsPhoneValid(valid)}
                    debounceMs={300}
                    clearable
                  />
                  
                  <Input 
                    placeholder="Loading state" 
                    value={passwordValue}
                    onChange={setPasswordValue}
                    loading={loadingInput}
                    leftIcon={<Settings className="w-4 h-4" />}
                    rightIcon={<Star className="w-4 h-4" />}
                  />
                  
                  <Button onClick={simulateLoading} size="sm" disabled={loadingInput}>
                    {loadingInput ? 'Loading...' : 'Simulate Loading'}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Textarea */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Textarea</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm mb-3 text-muted-foreground">Basic States</p>
                <div className="space-y-4 max-w-md">
                  <Textarea placeholder="Enter your message..." value={textareaValue} onChange={setTextareaValue} />
                  <Textarea placeholder="Disabled textarea" disabled />
                </div>
              </div>

              <div>
                <p className="text-sm mb-3 text-muted-foreground">Auto-Resize Features</p>
                <div className="space-y-4 max-w-md">
                  <Textarea 
                    placeholder="Auto-resize (min 2, max 6 rows)" 
                    value={autoResizeValue}
                    onChange={setAutoResizeValue}
                    autoResize
                    minRows={2}
                    maxRows={6}
                  />
                  
                  <Textarea 
                    placeholder="Auto-resize unlimited" 
                    autoResize
                    minRows={3}
                  />
                  
                  <Textarea 
                    placeholder="Non-resizable" 
                    resizable={false}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Select */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Select</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm mb-3 text-muted-foreground">Basic Select</p>
                <div className="space-y-4 max-w-md">
                  <Select
                    options={selectOptions}
                    value={selectValue}
                    onChange={setSelectValue}
                    placeholder="Choose an option..."
                  />
                </div>
              </div>

              <div>
                <p className="text-sm mb-3 text-muted-foreground">Advanced Features</p>
                <div className="space-y-4 max-w-md">
                  <div>
                    <Select
                      options={countryOptions}
                      value={searchableSelectValue}
                      onChange={setSearchableSelectValue}
                      placeholder="Search countries..."
                      searchable
                      clearable
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      ⌨️ Try: Arrow keys, Enter, Escape, typing to search
                    </p>
                  </div>
                  
                  <Select
                    options={selectOptions}
                    placeholder="Loading state..."
                    loading
                    disabled
                  />
                  
                  <Select
                    options={selectOptions}
                    value={multiSelectValue}
                    onChange={setMultiSelectValue}
                    placeholder="Select with custom height..."
                    maxMenuHeight={150}
                    clearable
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Checkbox</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm mb-3 text-muted-foreground">Basic States</p>
                <div className="space-y-3">
                  <Checkbox 
                    checked={checkbox1} 
                    onChange={setCheckbox1}
                    label="Accept terms and conditions" 
                  />
                  <Checkbox 
                    checked={checkbox2} 
                    onChange={setCheckbox2}
                    label="Subscribe to newsletter" 
                  />
                  <Checkbox 
                    checked={checkbox3} 
                    onChange={setCheckbox3}
                    label="Disabled checkbox" 
                    disabled 
                  />
                </div>
              </div>

              <div>
                <p className="text-sm mb-3 text-muted-foreground">Indeterminate State (Select All)</p>
                <div className="space-y-3 p-4 border border-border rounded-lg">
                  <Checkbox
                    checked={isAllSelected}
                    onChange={handleSelectAllChange}
                    indeterminate={isSomeSelected}
                    label="Select All"
                  />
                  <div className="ml-6 space-y-2">
                    <Checkbox
                      checked={checkboxGroup.option1}
                      onChange={() => handleCheckboxGroupChange('option1')}
                      label="Option 1"
                    />
                    <Checkbox
                      checked={checkboxGroup.option2}
                      onChange={() => handleCheckboxGroupChange('option2')}
                      label="Option 2"
                    />
                    <Checkbox
                      checked={checkboxGroup.option3}
                      onChange={() => handleCheckboxGroupChange('option3')}
                      label="Option 3"
                    />
                    <Checkbox
                      checked={checkboxGroup.option4}
                      onChange={() => handleCheckboxGroupChange('option4')}
                      label="Option 4"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm mb-2 text-muted-foreground">Inline</p>
                <div className="flex gap-4">
                  <Checkbox 
                    checked={checkbox1} 
                    onChange={setCheckbox1}
                    label="Option 1" 
                    inline
                  />
                  <Checkbox 
                    checked={checkbox2} 
                    onChange={setCheckbox2}
                    label="Option 2" 
                    inline
                  />
                  <Checkbox 
                    checked={checkbox3} 
                    onChange={setCheckbox3}
                    label="Option 3" 
                    inline
                    disabled 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Radio */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Radio</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Vertical (default)</p>
                <div className="space-y-3">
                  <Radio 
                    name="option" 
                    label="Option 1" 
                    value="1" 
                    checked={selectedRadio === '1'}
                    onChange={() => setSelectedRadio('1')}
                  />
                  <Radio 
                    name="option" 
                    label="Option 2" 
                    value="2" 
                    checked={selectedRadio === '2'}
                    onChange={() => setSelectedRadio('2')}
                  />
                  <Radio 
                    name="option" 
                    label="Option 3" 
                    value="3" 
                    checked={selectedRadio === '3'}
                    onChange={() => setSelectedRadio('3')}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Switch */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Switch</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Vertical</p>
                <div className="space-y-3">
                  <Switch 
                    checked={switch1}
                    onChange={setSwitch1}
                    label="Enable notifications"
                    inline={false}
                  />
                  <Switch 
                    checked={switch2}
                    onChange={setSwitch2}
                    label="Dark mode"
                    inline={false}
                  />
                  <Switch 
                    checked={switch3}
                    onChange={setSwitch3}
                    label="Disabled" 
                    disabled
                    inline={false}
                  />
                </div>
              </div>
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Inline (default)</p>
                <div className="flex gap-4">
                  <Switch 
                    checked={switch1}
                    onChange={setSwitch1}
                    label="Notifications"
                  />
                  <Switch 
                    checked={switch2}
                    onChange={setSwitch2}
                    label="Dark mode"
                  />
                  <Switch 
                    checked={switch3}
                    onChange={setSwitch3}
                    label="Disabled" 
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Slider</h3>
            <div className="max-w-md space-y-4">
              <div>
                <p className="text-sm mb-2 text-foreground">Volume: {sliderValue}%</p>
                <Slider
                  value={sliderValue}
                  onChange={setSliderValue}
                />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Badge</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Variants</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                </div>
              </div>
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Sizes</p>
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Rounded</p>
                <div className="flex flex-wrap gap-2">
                  <Badge rounded>Rounded Badge</Badge>
                  <Badge variant="success" rounded>Success</Badge>
                  <Badge variant="danger" size="sm" rounded>Danger</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Tag */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Tag</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Variants</p>
                <div className="flex flex-wrap gap-2">
                  <Tag variant="primary">Primary</Tag>
                  <Tag variant="secondary">Secondary</Tag>
                  <Tag variant="success">Success</Tag>
                  <Tag variant="warning">Warning</Tag>
                  <Tag variant="danger">Danger</Tag>
                </div>
              </div>
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Sizes</p>
                <div className="flex flex-wrap gap-2 items-center">
                  <Tag size="sm">Small</Tag>
                  <Tag size="md">Medium</Tag>
                  <Tag size="lg">Large</Tag>
                </div>
              </div>
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Removable</p>
                <div className="flex flex-wrap gap-2">
                  <Tag variant="primary" removable onRemove={() => console.log('Remove primary')}>React</Tag>
                  <Tag variant="success" removable onRemove={() => console.log('Remove success')}>TypeScript</Tag>
                  <Tag variant="danger" size="sm" removable onRemove={() => console.log('Remove danger')}>Remove me</Tag>
                </div>
              </div>
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Not Rounded</p>
                <div className="flex flex-wrap gap-2">
                  <Tag rounded={false}>Square Tag</Tag>
                  <Tag variant="success" rounded={false}>Success</Tag>
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Progress</h3>
            <div className="space-y-6">
              <div className="max-w-md space-y-4">
                <div>
                  <p className="text-sm mb-2 text-muted-foreground">Variants</p>
                  <div className="space-y-3">
                    <Progress value={progress} variant="primary" label={true} />
                    <Progress value={75} variant="secondary" label={true} />
                    <Progress value={90} variant="success" label={true} />
                    <Progress value={50} variant="warning" label={true} />
                    <Progress value={30} variant="danger" label={true} />
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-2 text-muted-foreground">Sizes</p>
                  <div className="space-y-3">
                    <Progress value={60} size="sm" label="Small" />
                    <Progress value={70} size="md" label="Medium" />
                    <Progress value={80} size="lg" label="Large" />
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-2 text-muted-foreground">Custom Labels</p>
                  <div className="space-y-3">
                    <Progress value={progress} label={`${progress}% Complete`} />
                    <Progress value={45} label="Loading assets..." variant="secondary" />
                    <Progress value={100} label="Done!" variant="success" />
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-2 text-muted-foreground">Without Label</p>
                  <Progress value={progress} />
                </div>
                <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                  Increase +10%
                </Button>
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Avatar</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm mb-3 text-muted-foreground">Sizes</p>
                <div className="flex items-center gap-3">
                  <Avatar size="sm" fallback="SM" alt="Small Avatar" />
                  <Avatar size="md" fallback="MD" alt="Medium Avatar" />
                  <Avatar size="lg" fallback="LG" alt="Large Avatar" />
                  <Avatar size="xl" fallback="XL" alt="Extra Large Avatar" />
                </div>
              </div>
              <div>
                <p className="text-sm mb-3 text-muted-foreground">With Images</p>
                <div className="flex items-center gap-3">
                  <Avatar size="sm" src="https://i.pravatar.cc/150?img=1" alt="User 1" />
                  <Avatar size="md" src="https://i.pravatar.cc/150?img=2" alt="User 2" />
                  <Avatar size="lg" src="https://i.pravatar.cc/150?img=3" alt="User 3" />
                  <Avatar size="xl" src="https://i.pravatar.cc/150?img=4" alt="User 4" />
                </div>
              </div>
            </div>
          </div>

          {/* Icon */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Icon</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm mb-3 text-muted-foreground">Sizes</p>
                <div className="flex items-center gap-4">
                  <Icon size={16}>
                    <Heart className="w-full h-full" />
                  </Icon>
                  <Icon size={20}>
                    <Star className="w-full h-full" />
                  </Icon>
                  <Icon size={24}>
                    <Settings className="w-full h-full" />
                  </Icon>
                  <Icon size={32}>
                    <User className="w-full h-full" />
                  </Icon>
                  <Icon size={40}>
                    <Bell className="w-full h-full" />
                  </Icon>
                </div>
              </div>
            </div>
          </div>

          {/* Skeleton */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Skeleton</h3>
            <div className="space-y-4 max-w-md">
              <Skeleton width="100%" height="20px" />
              <Skeleton width="80%" height="20px" />
              <Skeleton width="60%" height="20px" />
              <Skeleton variant="circular" width="60px" height="60px" />
            </div>
          </div>

          {/* Spinner */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Spinner</h3>
            <div className="flex items-center gap-4">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
            </div>
          </div>

          {/* Divider */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Divider</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Horizontal</p>
                <Divider />
              </div>
              <div className="flex items-center gap-4 h-20">
                <p className="text-sm text-muted-foreground">Vertical</p>
                <Divider orientation="vertical" />
                <p className="text-sm text-muted-foreground">Example</p>
              </div>
            </div>
          </div>

          {/* Chip */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Chip</h3>
            <div className="flex flex-wrap gap-2">
              <Chip label="Default" />
              <Chip label="Primary" variant="primary" />
              <Chip label="Success" variant="success" />
              <Chip label="Error" variant="error" />
              <Chip label="Removable" onRemove={() => alert('Chip removed')} />
            </div>
          </div>

          {/* KBD */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">KBD</h3>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-foreground">Press</p>
              <KBD>Ctrl</KBD>
              <p>+</p>
              <KBD>K</KBD>
              <p>to search</p>
            </div>
          </div>
        </section>

        {/* MOLECULES SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-foreground">Molecules</h2>

          {/* FormField */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">FormField</h3>
            <div className="max-w-md space-y-4">
              <div>
                <p className="text-sm mb-3 text-muted-foreground">Con Input</p>
                <div className="space-y-4">
                  <FormField
                    id="email"
                    label="Email"
                    required
                  >
                    <Input placeholder="Enter your email" />
                  </FormField>
                  
                  <FormField
                    id="password"
                    label="Password"
                    hint="Must be at least 8 characters"
                  >
                    <Input type="password" placeholder="Enter your password" />
                  </FormField>
                  
                  <FormField
                    id="username"
                    label="Username"
                    error="Username is already taken"
                  >
                    <Input placeholder="Choose a username" />
                  </FormField>
                </div>
              </div>

              <div>
                <p className="text-sm mb-3 text-muted-foreground">Con Textarea</p>
                <FormField
                  id="message"
                  label="Message"
                  hint="Enter your message here"
                  required
                >
                  <Textarea placeholder="Type your message..." rows={4} />
                </FormField>
              </div>

              <div>
                <p className="text-sm mb-3 text-muted-foreground">Con Select</p>
                <FormField
                  id="country"
                  label="Country"
                  required
                >
                  <Select
                    options={[
                      { label: 'United States', value: 'us' },
                      { label: 'Canada', value: 'ca' },
                      { label: 'Mexico', value: 'mx' },
                      { label: 'United Kingdom', value: 'uk' },
                    ]}
                  />
                </FormField>
              </div>

              <div>
                <p className="text-sm mb-3 text-muted-foreground">Con Checkbox</p>
                <FormField
                  id="terms"
                  hint="You must agree to continue"
                >
                  <Checkbox 
                    checked={false}
                    onChange={() => {}}
                    label="I agree to the terms and conditions" 
                  />
                </FormField>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Card</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm mb-3 text-muted-foreground">Básico con título y descripción</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card
                    title="Card Title"
                    description="This is a description that provides context about the card content."
                  >
                    <p className="text-sm text-foreground">
                      Main card content goes here. You can add any React elements.
                    </p>
                  </Card>
                  
                  <Card title="Simple Card">
                    <p className="text-sm text-foreground">
                      Card with only a title and content.
                    </p>
                  </Card>
                </div>
              </div>

              <div>
                <p className="text-sm mb-3 text-muted-foreground">Con header y footer</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card
                    header={
                      <div className="p-4 bg-primary/10">
                        <p className="text-sm font-semibold text-primary">Header Section</p>
                      </div>
                    }
                    footer={
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">Cancel</Button>
                        <Button variant="primary" size="sm">Save</Button>
                      </div>
                    }
                  >
                    <p className="text-sm text-foreground">
                      Card with custom header and footer sections.
                    </p>
                  </Card>
                  
                  <Card
                    footer={
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Updated 2 hours ago</span>
                        <Button variant="ghost" size="sm">View Details</Button>
                      </div>
                    }
                  >
                    <p className="text-sm font-medium text-foreground mb-2">Status Update</p>
                    <p className="text-sm text-muted-foreground">
                      All systems operational.
                    </p>
                  </Card>
                </div>
              </div>

              <div>
                <p className="text-sm mb-3 text-muted-foreground">Padding variants</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card title="Small Padding" padding="sm">
                    <p className="text-sm text-foreground">Compact card with small padding.</p>
                  </Card>
                  
                  <Card title="Medium Padding" padding="md">
                    <p className="text-sm text-foreground">Default padding (medium).</p>
                  </Card>
                  
                  <Card title="Large Padding" padding="lg">
                    <p className="text-sm text-foreground">Spacious card with large padding.</p>
                  </Card>
                </div>
              </div>

              <div>
                <p className="text-sm mb-3 text-muted-foreground">Shadow variants</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card title="No Shadow" shadow="none" bordered>
                    <p className="text-sm text-foreground">Card without shadow but with border.</p>
                  </Card>
                  
                  <Card title="Small Shadow" shadow="sm">
                    <p className="text-sm text-foreground">Card with subtle shadow (default).</p>
                  </Card>
                  
                  <Card title="Medium Shadow" shadow="md">
                    <p className="text-sm text-foreground">Card with medium shadow.</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Dropdown</h3>
            <div className="flex gap-4">
              <Dropdown
                trigger={<Button variant="primary">Open Menu</Button>}
                items={[
                  { label: "Profile", value: "profile" },
                  { label: "Settings", value: "settings" },
                  { label: "Logout", value: "logout" }
                ]}
                onSelect={(value) => console.log("Selected:", value)}
              />
              <Dropdown
                trigger={<Button variant="secondary">Options</Button>}
                items={[
                  { label: "Edit", value: "edit" },
                  { label: "Duplicate", value: "duplicate" },
                  { label: "Delete", value: "delete" }
                ]}
                onSelect={(value) => console.log("Selected:", value)}
                align="right"
              />
              <Dropdown
                trigger={<Button variant="primary" disabled>Disabled</Button>}
                items={[
                  { label: "Item 1", value: "item1" },
                  { label: "Item 2", value: "item2" }
                ]}
                onSelect={(value) => console.log("Selected:", value)}
                disabled
              />
            </div>
          </div>

          {/* InputGroup */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">InputGroup</h3>
            <div className="max-w-md space-y-4">
              <InputGroup leftAddon={
                <Icon size={18}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </Icon>
              }>
                <Input placeholder="Search..." />
              </InputGroup>
              
              <InputGroup leftAddon={<span className="font-medium">$</span>}>
                <Input placeholder="0.00" />
              </InputGroup>
              
              <InputGroup rightAddon={<span className="text-sm">.com</span>}>
                <Input placeholder="yourwebsite" />
              </InputGroup>
              
              <InputGroup 
                leftAddon={<span className="font-medium">https://</span>}
                rightAddon={<Icon size={18}><CheckCircle className="w-full h-full text-success" /></Icon>}
              >
                <Input placeholder="example.com" />
              </InputGroup>
            </div>
          </div>

          {/* Alert */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Alert</h3>
            <div className="space-y-4 max-w-2xl">
              <Alert
                variant="info"
                title="Information"
                description="This is an informational alert with additional context."
                icon={
                  <Icon size={20}>
                    <Info className="w-full h-full" />
                  </Icon>
                }
              />
              
              <Alert
                variant="success"
                title="Success"
                description="Your changes have been saved successfully."
                icon={
                  <Icon size={20}>
                    <CheckCircle className="w-full h-full" />
                  </Icon>
                }
                closable
                onClose={() => console.log('Alert closed')}
              />
              
              <Alert
                variant="warning"
                title="Warning"
                description="Please review your settings before proceeding."
                icon={
                  <Icon size={20}>
                    <AlertTriangle className="w-full h-full" />
                  </Icon>
                }
              />
              
              <Alert
                variant="danger"
                title="Error"
                description="An error occurred while processing your request."
                icon={
                  <Icon size={20}>
                    <XCircle className="w-full h-full" />
                  </Icon>
                }
                closable
                onClose={() => console.log('Error alert closed')}
              />
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Breadcrumbs</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Basic breadcrumbs</p>
                <Breadcrumbs
                  items={[
                    { label: 'Home', href: '#home' },
                    { label: 'Products', href: '#products' },
                    { label: 'Electronics', href: '#electronics' },
                    { label: 'Laptop' }
                  ]}
                />
              </div>
              
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Short breadcrumbs</p>
                <Breadcrumbs
                  items={[
                    { label: 'Dashboard', href: '#dashboard' },
                    { label: 'Settings' }
                  ]}
                />
              </div>
              
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Current page only</p>
                <Breadcrumbs
                  items={[
                    { label: 'Current Page' }
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Tabs</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm mb-3 text-muted-foreground">Default Tabs</p>
                <Tabs
                  tabs={[
                    { label: 'Overview', value: 'overview' },
                    { label: 'Analytics', value: 'analytics' },
                    { label: 'Reports', value: 'reports' },
                    { label: 'Settings', value: 'settings' },
                  ]}
                  value={activeTab}
                  onChange={setActiveTab}
                />
                <div className="mt-4 p-4 bg-muted/50 rounded-md">
                  <p className="text-sm text-foreground">Active tab content: {activeTab}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm mb-3 text-muted-foreground">Full Width Tabs</p>
                <Tabs
                  tabs={[
                    { label: 'Profile', value: 'profile' },
                    { label: 'Account', value: 'account' },
                    { label: 'Notifications', value: 'notifications' },
                  ]}
                  value={activeTab2}
                  onChange={setActiveTab2}
                  fullWidth
                />
                <div className="mt-4 p-4 bg-muted/50 rounded-md">
                  <p className="text-sm text-foreground">Active tab: {activeTab2}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Accordion</h3>
            <div className="space-y-6 max-w-2xl">
              {/* Single mode (only one open at a time) */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Single mode (only one open at a time)</p>
                <Accordion
                  items={[
                    {
                      id: 'item1',
                      title: 'What is this component library?',
                      content: 'This is a comprehensive design system built with React, TypeScript, and Tailwind CSS. It provides a collection of reusable components following atomic design principles.',
                    },
                    {
                      id: 'item2',
                      title: 'How do I use these components?',
                      content: 'Simply import the components you need from the library and use them in your React application. All components are fully typed with TypeScript and documented.',
                    },
                    {
                      id: 'item3',
                      title: 'Can I customize the styling?',
                      content: 'Yes! All components use design tokens defined in the tokens folder. You can customize colors, spacing, typography, and more by modifying these tokens.',
                    },
                  ]}
                  defaultOpen={['item1']}
                />
              </div>
              
              {/* Multiple mode */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Multiple mode (can open multiple at once)</p>
                <Accordion
                  items={[
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
                  ]}
                  multiple
                  defaultOpen={['faq1', 'faq2']}
                />
              </div>
            </div>
          </div>

          {/* SearchBar */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">SearchBar</h3>
            <div className="space-y-4 max-w-md">
              <div>
                <p className="text-sm text-muted-foreground mb-2">With clear button (default)</p>
                <SearchBar
                  value={searchValue}
                  onChange={setSearchValue}
                  placeholder="Search components..."
                />
              </div>
              
              {searchValue && (
                <div className="text-sm text-foreground">
                  Current search: <span className="font-medium">{searchValue}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ORGANISMS SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-foreground">Organisms</h2>

          {/* Navbar */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Navbar</h3>
            <div className="space-y-6">
              {/* Default navbar with links */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">With logo, links, and right content</p>
                <Navbar
                  logo={<span className="font-bold text-primary">Brand</span>}
                  links={[
                    { label: 'Home', href: '#home' },
                    { label: 'Products', href: '#products' },
                    { label: 'About', href: '#about' },
                    { label: 'Contact', href: '#contact' },
                  ]}
                  rightContent={
                    <Button size="sm" variant="primary">
                      Sign In
                    </Button>
                  }
                />
              </div>
              
              {/* Navbar with SearchBar */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">With search bar</p>
                <Navbar
                  logo={
                    <div className="flex items-center gap-2">
                      <Icon size={24}>
                        <Home className="w-full h-full text-primary" />
                      </Icon>
                      <span className="font-bold">Logo</span>
                    </div>
                  }
                  links={[
                    { label: 'Dashboard', href: '#dashboard' },
                    { label: 'Settings', href: '#settings' },
                  ]}
                  rightContent={
                    <div className="w-64">
                      <SearchBar
                        value={searchValue}
                        onChange={setSearchValue}
                        placeholder="Search..."
                      />
                    </div>
                  }
                  sticky={false}
                />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Header</h3>
            <Header>
              <div className="flex items-center justify-between w-full">
                <h2 className="text-xl font-bold text-foreground">Page Header</h2>
                <Button size="sm">Action</Button>
              </div>
            </Header>
          </div>

          {/* Sidebar */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Sidebar</h3>
            
            {/* Expanded Sidebar */}
            <div className="flex gap-4 h-96 mb-4">
              <Sidebar
                header={
                  <div className="flex items-center gap-2">
                    <Icon size={24}>
                      <Home className="w-full h-full text-primary" />
                    </Icon>
                    <span className="text-base font-bold text-foreground">My App</span>
                  </div>
                }
                items={[
                  {
                    id: 'dashboard',
                    label: 'Dashboard',
                    icon: <Icon size={20}><Home className="w-full h-full" /></Icon>,
                    href: '#dashboard',
                    active: true
                  },
                  {
                    id: 'projects',
                    label: 'Projects',
                    icon: <Icon size={20}><Folder className="w-full h-full" /></Icon>,
                    href: '#projects'
                  },
                  {
                    id: 'team',
                    label: 'Team',
                    icon: <Icon size={20}><Users className="w-full h-full" /></Icon>,
                    href: '#team'
                  },
                  {
                    id: 'settings',
                    label: 'Settings',
                    icon: <Icon size={20}><Settings className="w-full h-full" /></Icon>,
                    href: '#settings'
                  }
                ]}
                footer={
                  <Button variant="ghost" size="sm" fullWidth>
                    <Icon size={16}><LogOut className="w-full h-full" /></Icon>
                    <span className="ml-2">Logout</span>
                  </Button>
                }
              />
              <div className="flex-1 p-4 bg-muted rounded">
                <p className="text-foreground">Main content area (expanded sidebar)</p>
              </div>
            </div>

            {/* Collapsed Sidebar */}
            <div className="flex gap-4 h-96">
              <Sidebar
                collapsed={true}
                header={
                  <Icon size={24}>
                    <Home className="w-full h-full text-primary" />
                  </Icon>
                }
                items={[
                  {
                    id: 'dashboard',
                    label: 'Dashboard',
                    icon: <Icon size={20}><Home className="w-full h-full" /></Icon>,
                    href: '#dashboard',
                    active: true
                  },
                  {
                    id: 'projects',
                    label: 'Projects',
                    icon: <Icon size={20}><Folder className="w-full h-full" /></Icon>,
                    href: '#projects'
                  },
                  {
                    id: 'team',
                    label: 'Team',
                    icon: <Icon size={20}><Users className="w-full h-full" /></Icon>,
                    href: '#team'
                  },
                  {
                    id: 'settings',
                    label: 'Settings',
                    icon: <Icon size={20}><Settings className="w-full h-full" /></Icon>,
                    href: '#settings'
                  }
                ]}
                footer={
                  <Icon size={20}>
                    <LogOut className="w-full h-full" />
                  </Icon>
                }
              />
              <div className="flex-1 p-4 bg-muted rounded">
                <p className="text-foreground">Main content area (collapsed sidebar)</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Footer</h3>
            <Footer>
              <div className="flex justify-between items-center w-full">
                <p className="text-sm text-muted-foreground">
                  © 2024 Component Library. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Privacy
                  </a>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Terms
                  </a>
                </div>
              </div>
            </Footer>
          </div>

          {/* Toolbar */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Toolbar</h3>
            <Toolbar>
              <Button size="sm" variant="ghost">Bold</Button>
              <Button size="sm" variant="ghost">Italic</Button>
              <Button size="sm" variant="ghost">Underline</Button>
              <div className="border-l border-border h-6 mx-1" />
              <Button size="sm" variant="ghost">Link</Button>
            </Toolbar>
          </div>

          {/* ListItem */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">ListItem</h3>
            <div className="space-y-2 max-w-md">
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
                leftIcon={
                  <Icon size={20}>
                    <Bell className="w-full h-full" />
                  </Icon>
                }
              />
              <ListItem 
                title="With right icon"
                description="Navigate to profile page"
                rightIcon={
                  <Icon size={16}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </Icon>
                }
              />
              <ListItem 
                title="Clickable item"
                description="Click me to see the action"
                leftIcon={
                  <Icon size={20}>
                    <User className="w-full h-full" />
                  </Icon>
                }
                rightIcon={
                  <Icon size={16}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </Icon>
                }
                clickable
                onClick={() => console.log('Item clicked!')}
              />
            </div>
          </div>

          {/* ListGroup with ListItem */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">ListGroup & ListItem</h3>
            <ListGroup>
              <ListItem 
                title="Home" 
                leftIcon={
                  <Icon size={20}>
                    <Home className="w-full h-full" />
                  </Icon>
                }
                clickable
                onClick={() => console.log('Home')}
              />
              <ListItem 
                title="Profile" 
                description="View and edit your profile"
                leftIcon={
                  <Icon size={20}>
                    <User className="w-full h-full" />
                  </Icon>
                }
                clickable
                active
                onClick={() => console.log('Profile')}
              />
              <ListItem 
                title="Notifications" 
                description="3 new notifications"
                leftIcon={
                  <Icon size={20}>
                    <Bell className="w-full h-full" />
                  </Icon>
                }
                rightIcon={<Badge size="sm" variant="primary">3</Badge>}
                clickable
                onClick={() => console.log('Notifications')}
              />
              <ListItem 
                title="Settings" 
                leftIcon={
                  <Icon size={20}>
                    <Settings className="w-full h-full" />
                  </Icon>
                }
                clickable
                onClick={() => console.log('Settings')}
              />
            </ListGroup>
          </div>

          {/* Modal */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Modal</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm mb-4 text-muted-foreground">Basic Modal</p>
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                
                <Modal
                  open={modalOpen}
                  onClose={() => setModalOpen(false)}
                  title="Example Modal"
                  footer={
                    <>
                      <Button variant="ghost" size="md" onClick={() => setModalOpen(false)}>
                        Cancel
                      </Button>
                      <Button variant="primary" size="md" onClick={() => {
                        console.log('Confirmed');
                        setModalOpen(false);
                      }}>
                        Confirm
                      </Button>
                    </>
                  }
                >
                  <div className="space-y-4">
                    <p className="text-foreground">
                      This is a simple modal example. You can put any content here, including forms, images, or other components.
                    </p>
                    <p className="text-muted-foreground">
                      Click outside the modal, press Escape, or click the close button to dismiss it.
                    </p>
                  </div>
                </Modal>
              </div>

              {/* Modal Sizes */}
              <div>
                <p className="text-sm mb-4 text-muted-foreground">Modal Sizes</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm mb-2 text-muted-foreground">Small Modal</p>
                    <Button size="sm" onClick={() => setModalSmOpen(true)}>Small</Button>
                  </div>
                  <div>
                    <p className="text-sm mb-2 text-muted-foreground">Medium Modal (Default)</p>
                    <Button size="sm" onClick={() => setModalMdOpen(true)}>Medium</Button>
                  </div>
                  <div>
                    <p className="text-sm mb-2 text-muted-foreground">Large Modal</p>
                    <Button size="sm" onClick={() => setModalLgOpen(true)}>Large</Button>
                  </div>
                </div>
                
                {/* Small Modal */}
                <Modal
                  open={modalSmOpen}
                  onClose={() => setModalSmOpen(false)}
                  title="Small Modal"
                  size="sm"
                  footer={
                    <>
                      <Button variant="ghost" size="sm" onClick={() => setModalSmOpen(false)}>
                        Cancel
                      </Button>
                      <Button variant="primary" size="sm" onClick={() => setModalSmOpen(false)}>
                        Confirm
                      </Button>
                    </>
                  }
                >
                  <p className="text-foreground">This is a small modal.</p>
                </Modal>
                
                {/* Medium Modal */}
                <Modal
                  open={modalMdOpen}
                  onClose={() => setModalMdOpen(false)}
                  title="Medium Modal"
                  size="md"
                  footer={
                    <>
                      <Button variant="ghost" size="md" onClick={() => setModalMdOpen(false)}>
                        Cancel
                      </Button>
                      <Button variant="primary" size="md" onClick={() => setModalMdOpen(false)}>
                        Confirm
                      </Button>
                    </>
                  }
                >
                  <p className="text-foreground">This is a medium modal (default size).</p>
                </Modal>
                
                {/* Large Modal */}
                <Modal
                  open={modalLgOpen}
                  onClose={() => setModalLgOpen(false)}
                  title="Large Modal"
                  size="lg"
                  footer={
                    <>
                      <Button variant="ghost" size="lg" onClick={() => setModalLgOpen(false)}>
                        Cancel
                      </Button>
                      <Button variant="primary" size="lg" onClick={() => setModalLgOpen(false)}>
                        Confirm
                      </Button>
                    </>
                  }
                >
                  <div className="space-y-4">
                    <p className="text-foreground">This is a large modal with more content space.</p>
                    <p className="text-muted-foreground">
                      Large modals are perfect for forms, detailed content, or when you need more space to display information.
                    </p>
                    <div className="space-y-3">
                      <FormField id="large-modal-input" label="Name">
                        <Input placeholder="Enter your name" />
                      </FormField>
                      <FormField id="large-modal-email" label="Email">
                        <Input type="email" placeholder="Enter your email" />
                      </FormField>
                      <FormField id="large-modal-message" label="Message">
                        <Textarea placeholder="Enter your message..." rows={4} />
                      </FormField>
                    </div>
                  </div>
                </Modal>
              </div>

              {/* Modal without Footer */}
              <div>
                <p className="text-sm mb-4 text-muted-foreground">Modal without Footer</p>
                <Button variant="secondary" onClick={() => setModalOpen(true)}>
                  Open Modal (No Footer)
                </Button>
              </div>

              {/* Modal with Custom Content */}
              <div>
                <p className="text-sm mb-4 text-muted-foreground">Modal with Form</p>
                <Button variant="primary" onClick={() => setModalOpen(true)}>
                  Open Form Modal
                </Button>
              </div>
            </div>
          </div>

          {/* Drawer */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Drawer</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm mb-4 text-muted-foreground">Drawer Positions</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button 
                    size="sm" 
                    onClick={() => {
                      setDrawerPosition('right');
                      setDrawerOpen(true);
                    }}
                  >
                    Right Drawer
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => {
                      setDrawerPosition('left');
                      setDrawerOpen(true);
                    }}
                  >
                    Left Drawer
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => {
                      setDrawerPosition('top');
                      setDrawerOpen(true);
                    }}
                  >
                    Top Drawer
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => {
                      setDrawerPosition('bottom');
                      setDrawerOpen(true);
                    }}
                  >
                    Bottom Drawer
                  </Button>
                </div>
                
                <Drawer
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                  position={drawerPosition}
                  title="Drawer Title"
                  footer={
                    <div className="flex gap-2">
                      <Button variant="ghost" size="md" onClick={() => setDrawerOpen(false)}>
                        Cancel
                      </Button>
                      <Button variant="primary" size="md" onClick={() => {
                        console.log('Confirmed');
                        setDrawerOpen(false);
                      }}>
                        Save
                      </Button>
                    </div>
                  }
                >
                  <div className="space-y-4">
                    <p className="text-foreground">
                      This drawer slides in from the {drawerPosition}. You can put any content here including forms, lists, or other components.
                    </p>
                    <FormField id="drawer-name" label="Name">
                      <Input placeholder="Enter your name" />
                    </FormField>
                    <FormField id="drawer-email" label="Email">
                      <Input placeholder="Enter your email" />
                    </FormField>
                    <p className="text-sm text-muted-foreground">
                      Click outside, press Escape, or click the close button to dismiss.
                    </p>
                  </div>
                </Drawer>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Table</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm mb-3 text-muted-foreground">Basic Table</p>
                <Table
                  columns={[
                    { key: 'name', label: 'Name' },
                    { key: 'email', label: 'Email' },
                    { key: 'role', label: 'Role' },
                    { key: 'status', label: 'Status' },
                  ]}
                  data={[
                    { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
                    { name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
                    { name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
                    { name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'Active' },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Pagination</h3>
            <div className="space-y-8">
              <div>
                <p className="text-sm mb-4 text-muted-foreground">Middle Page</p>
                <Pagination
                  page={currentPage1}
                  totalPages={10}
                  onChange={setCurrentPage1}
                />
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  Current page: {currentPage1}
                </p>
              </div>

              <div>
                <p className="text-sm mb-4 text-muted-foreground">First Page (Prev disabled)</p>
                <Pagination
                  page={currentPage2}
                  totalPages={10}
                  onChange={setCurrentPage2}
                />
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  Current page: {currentPage2}
                </p>
              </div>

              <div>
                <p className="text-sm mb-4 text-muted-foreground">Last Page (Next disabled)</p>
                <Pagination
                  page={currentPage3}
                  totalPages={5}
                  onChange={setCurrentPage3}
                />
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  Current page: {currentPage3}
                </p>
              </div>
            </div>
          </div>

          {/* CardList */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">CardList</h3>
            <div className="space-y-8">
              <div>
                <p className="text-sm mb-4 text-muted-foreground">3 Columns Grid (Desktop)</p>
                <CardList
                  cols={3}
                  gap={4}
                  items={[
                    <Card
                      title="Feature 1"
                      description="This is a description for feature 1"
                      padding="md"
                      shadow="sm"
                    >
                      <p className="text-sm text-muted-foreground">
                        Content for card 1. This demonstrates a 3-column grid layout.
                      </p>
                    </Card>,
                    <Card
                      title="Feature 2"
                      description="This is a description for feature 2"
                      padding="md"
                      shadow="sm"
                    >
                      <p className="text-sm text-muted-foreground">
                        Content for card 2. On mobile, cards stack vertically.
                      </p>
                    </Card>,
                    <Card
                      title="Feature 3"
                      description="This is a description for feature 3"
                      padding="md"
                      shadow="sm"
                    >
                      <p className="text-sm text-muted-foreground">
                        Content for card 3. On tablets, 2 columns are shown.
                      </p>
                    </Card>,
                  ]}
                />
              </div>

              <div>
                <p className="text-sm mb-4 text-muted-foreground">4 Columns Grid with Larger Gap</p>
                <CardList
                  cols={4}
                  gap={6}
                  items={[
                    <Card padding="md" shadow="sm">
                      <div className="flex items-center gap-3">
                        <Icon size={24}>
                          <Star className="w-full h-full text-primary" />
                        </Icon>
                        <div>
                          <h4 className="font-semibold text-foreground">Rating</h4>
                          <p className="text-sm text-muted-foreground">4.9/5.0</p>
                        </div>
                      </div>
                    </Card>,
                    <Card padding="md" shadow="sm">
                      <div className="flex items-center gap-3">
                        <Icon size={24}>
                          <User className="w-full h-full text-primary" />
                        </Icon>
                        <div>
                          <h4 className="font-semibold text-foreground">Users</h4>
                          <p className="text-sm text-muted-foreground">10,000+</p>
                        </div>
                      </div>
                    </Card>,
                    <Card padding="md" shadow="sm">
                      <div className="flex items-center gap-3">
                        <Icon size={24}>
                          <Heart className="w-full h-full text-primary" />
                        </Icon>
                        <div>
                          <h4 className="font-semibold text-foreground">Reviews</h4>
                          <p className="text-sm text-muted-foreground">5,000+</p>
                        </div>
                      </div>
                    </Card>,
                    <Card padding="md" shadow="sm">
                      <div className="flex items-center gap-3">
                        <Icon size={24}>
                          <Settings className="w-full h-full text-primary" />
                        </Icon>
                        <div>
                          <h4 className="font-semibold text-foreground">Features</h4>
                          <p className="text-sm text-muted-foreground">50+</p>
                        </div>
                      </div>
                    </Card>,
                  ]}
                />
              </div>
            </div>
          </div>

          {/* KpiCard */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">KpiCard (StatCard)</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm mb-4 text-muted-foreground">Upward Trends</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <KpiCard
                    label="Total Revenue"
                    value="$45,231"
                    icon={
                      <Icon size={24}>
                        <DollarSign className="w-full h-full" />
                      </Icon>
                    }
                    trend="up"
                    trendValue="+12.5%"
                  />
                  <KpiCard
                    label="New Users"
                    value="1,234"
                    icon={
                      <Icon size={24}>
                        <Users className="w-full h-full" />
                      </Icon>
                    }
                    trend="up"
                    trendValue="+8.2%"
                  />
                  <KpiCard
                    label="Total Sales"
                    value="892"
                    icon={
                      <Icon size={24}>
                        <ShoppingCart className="w-full h-full" />
                      </Icon>
                    }
                    trend="up"
                    trendValue="+23.1%"
                  />
                  <KpiCard
                    label="Active Sessions"
                    value="573"
                    icon={
                      <Icon size={24}>
                        <Activity className="w-full h-full" />
                      </Icon>
                    }
                    trend="up"
                    trendValue="+5.4%"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm mb-4 text-muted-foreground">Downward Trends</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <KpiCard
                    label="Bounce Rate"
                    value="32.8%"
                    icon={
                      <Icon size={24}>
                        <TrendingUp className="w-full h-full" />
                      </Icon>
                    }
                    trend="down"
                    trendValue="-4.2%"
                  />
                  <KpiCard
                    label="Support Tickets"
                    value="45"
                    icon={
                      <Icon size={24}>
                        <Bell className="w-full h-full" />
                      </Icon>
                    }
                    trend="down"
                    trendValue="-12.3%"
                  />
                  <KpiCard
                    label="Page Load Time"
                    value="2.4s"
                    icon={
                      <Icon size={24}>
                        <Activity className="w-full h-full" />
                      </Icon>
                    }
                    trend="down"
                    trendValue="-0.3s"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm mb-4 text-muted-foreground">Without Trend Values</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <KpiCard
                    label="Total Views"
                    value="45.2K"
                    icon={
                      <Icon size={24}>
                        <Star className="w-full h-full" />
                      </Icon>
                    }
                  />
                  <KpiCard
                    label="Total Likes"
                    value="12.8K"
                    icon={
                      <Icon size={24}>
                        <Heart className="w-full h-full" />
                      </Icon>
                    }
                  />
                  <KpiCard
                    label="Comments"
                    value="3,456"
                  />
                  <KpiCard
                    label="Shares"
                    value="892"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* EmptyState */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">EmptyState</h3>
            <div className="space-y-8">
              <div>
                <p className="text-sm mb-4 text-muted-foreground">With Icon, Description, and Action</p>
                <div className="border border-border rounded-md bg-card">
                  <EmptyState
                    title="No data available"
                    description="There are no items to display at the moment. Create your first item to get started with your collection."
                    icon={
                      <Icon size={48}>
                        <FileX className="w-full h-full" />
                      </Icon>
                    }
                    action={
                      <Button variant="primary" size="md">
                        Create New Item
                      </Button>
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* UserMenu */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">UserMenu</h3>
            <div className="space-y-8">
              <div>
                <p className="text-sm mb-4 text-muted-foreground">User Menu with Avatar and Options</p>
                <div className="flex justify-end">
                  <UserMenu
                    user={{
                      name: "John Doe",
                      email: "john.doe@example.com",
                      avatarSrc: "https://i.pravatar.cc/150?img=12"
                    }}
                    items={[
                      {
                        label: "Profile",
                        value: "profile",
                        icon: (
                          <Icon size={18}>
                            <User className="w-full h-full" />
                          </Icon>
                        )
                      },
                      {
                        label: "Settings",
                        value: "settings",
                        icon: (
                          <Icon size={18}>
                            <Settings className="w-full h-full" />
                          </Icon>
                        )
                      },
                      {
                        label: "Logout",
                        value: "logout",
                        icon: (
                          <Icon size={18}>
                            <LogOut className="w-full h-full" />
                          </Icon>
                        )
                      }
                    ]}
                    onSelect={(value) => console.log('Selected:', value)}
                  />
                </div>
              </div>

              <div>
                <p className="text-sm mb-4 text-muted-foreground">User Menu without Email</p>
                <div className="flex justify-end">
                  <UserMenu
                    user={{
                      name: "Jane Smith"
                    }}
                    items={[
                      {
                        label: "My Account",
                        value: "account",
                        icon: (
                          <Icon size={18}>
                            <User className="w-full h-full" />
                          </Icon>
                        )
                      },
                      {
                        label: "Help & Support",
                        value: "help",
                        icon: (
                          <Icon size={18}>
                            <Info className="w-full h-full" />
                          </Icon>
                        )
                      },
                      {
                        label: "Sign Out",
                        value: "signout",
                        icon: (
                          <Icon size={18}>
                            <LogOut className="w-full h-full" />
                          </Icon>
                        )
                      }
                    ]}
                    onSelect={(value) => console.log('Selected:', value)}
                  />
                </div>
              </div>

              <div>
                <p className="text-sm mb-4 text-muted-foreground">User Menu with Fallback Avatar</p>
                <div className="flex justify-end">
                  <UserMenu
                    user={{
                      name: "Robert Johnson",
                      email: "robert.j@company.com"
                    }}
                    items={[
                      {
                        label: "Dashboard",
                        value: "dashboard",
                        icon: (
                          <Icon size={18}>
                            <Home className="w-full h-full" />
                          </Icon>
                        )
                      },
                      {
                        label: "Notifications",
                        value: "notifications",
                        icon: (
                          <Icon size={18}>
                            <Bell className="w-full h-full" />
                          </Icon>
                        )
                      },
                      {
                        label: "Preferences",
                        value: "preferences",
                        icon: (
                          <Icon size={18}>
                            <Settings className="w-full h-full" />
                          </Icon>
                        )
                      },
                      {
                        label: "Logout",
                        value: "logout",
                        icon: (
                          <Icon size={18}>
                            <LogOut className="w-full h-full" />
                          </Icon>
                        )
                      }
                    ]}
                    onSelect={(value) => console.log('Selected:', value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;