import { 
  Card, CardBody,
  Input, Button, Textarea,
  Checkbox, CheckboxGroup, Radio, RadioGroup,
  Switch, Slider,
  DatePicker, DateRangePicker,
  Select, SelectItem,
  Accordion, AccordionItem,
  Chip, Divider
} from '@heroui/react'
import { CalendarDate } from '@internationalized/date'
import { IconMail, IconLock, IconUser, IconSettings, IconPalette } from '@tabler/icons-react'
import { useState } from 'react'

export default function FormsPage() {
  const [notifications, setNotifications] = useState(['email'])
  const [theme, setTheme] = useState('dark')
  const [sliderValue, setSliderValue] = useState(50)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 p-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Forms and Inputs</h1>
          <p className="text-gray-400">Showcasing HeroUI form components with beautiful styling and accessibility.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
            <CardBody>
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <IconUser size={20} className="text-purple-400" />
                User Registration
              </h2>
              <form className="space-y-4">
                <Input
                  type="text"
                  label="Full Name"
                  placeholder="Enter your name"
                  variant="bordered"
                  color="primary"
                  startContent={<IconUser size={18} className="text-gray-400" />}
                  classNames={{
                    label: "text-gray-300",
                    input: "text-white",
                    inputWrapper: "bg-gray-700/50 border-gray-600"
                  }}
                />
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="Enter your email"
                  variant="bordered"
                  color="primary"
                  startContent={<IconMail size={18} className="text-gray-400" />}
                  classNames={{
                    label: "text-gray-300",
                    input: "text-white",
                    inputWrapper: "bg-gray-700/50 border-gray-600"
                  }}
                />
                <Input
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  variant="bordered"
                  color="primary"
                  startContent={<IconLock size={18} className="text-gray-400" />}
                  classNames={{
                    label: "text-gray-300",
                    input: "text-white",
                    inputWrapper: "bg-gray-700/50 border-gray-600"
                  }}
                />
                <Textarea
                  label="Bio"
                  placeholder="Tell us about yourself..."
                  variant="bordered"
                  minRows={3}
                  classNames={{
                    label: "text-gray-300",
                    textarea: "text-white",
                    inputWrapper: "bg-gray-700/50 border-gray-600"
                  }}
                />
                <Button color="primary" variant="shadow" className="w-full" size="lg">
                  Create Account
                </Button>
              </form>
            </CardBody>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
            <CardBody>
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <IconSettings size={20} className="text-blue-400" />
                Preferences
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="text-sm text-gray-300 mb-3 block">Theme Preference</label>
                  <RadioGroup
                    value={theme}
                    onValueChange={setTheme}
                    orientation="horizontal"
                  >
                    <Radio value="light" classNames={{ label: "text-white" }}>Light</Radio>
                    <Radio value="dark" classNames={{ label: "text-white" }}>Dark</Radio>
                    <Radio value="system" classNames={{ label: "text-white" }}>System</Radio>
                  </RadioGroup>
                </div>

                <Divider className="bg-gray-700" />

                <div>
                  <label className="text-sm text-gray-300 mb-3 block">Notification Preferences</label>
                  <CheckboxGroup
                    value={notifications}
                    onValueChange={setNotifications}
                  >
                    <Checkbox value="email" classNames={{ label: "text-white" }}>Email Notifications</Checkbox>
                    <Checkbox value="sms" classNames={{ label: "text-white" }}>SMS Alerts</Checkbox>
                    <Checkbox value="push" classNames={{ label: "text-white" }}>Push Notifications</Checkbox>
                  </CheckboxGroup>
                </div>

                <Divider className="bg-gray-700" />

                <div>
                  <label className="text-sm text-gray-300 mb-3 block">AI Creativity Level</label>
                  <Slider
                    size="lg"
                    step={1}
                    maxValue={100}
                    minValue={0}
                    value={sliderValue}
                    onChange={setSliderValue}
                    color="gradient"
                    showSteps
                  />
                  <p className="text-xs text-gray-400 mt-2 text-center">{sliderValue}% creativity</p>
                </div>

                <Divider className="bg-gray-700" />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Auto-save</span>
                    <Switch defaultSelected color="success" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Beta Features</span>
                    <Switch defaultSelected color="primary" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Public Profile</span>
                    <Switch color="default" />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
            <CardBody>
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <IconPalette size={20} className="text-pink-400" />
                Project Settings
              </h2>
              <div className="space-y-4">
                <Select
                  label="Project Category"
                  variant="bordered"
                  color="secondary"
                  classNames={{
                    label: "text-gray-300",
                    trigger: "bg-gray-700/50 border-gray-600",
                    value: "text-white"
                  }}
                >
                  <SelectItem key="branding">Branding and Identity</SelectItem>
                  <SelectItem key="social">Social Media</SelectItem>
                  <SelectItem key="web">Web Design</SelectItem>
                  <SelectItem key="print">Print and Publishing</SelectItem>
                  <SelectItem key="marketing">Marketing Materials</SelectItem>
                </Select>

                <DatePicker
                  label="Project Start Date"
                  variant="bordered"
                  color="primary"
                  classNames={{
                    label: "text-gray-300",
                    input: "text-white",
                    inputWrapper: "bg-gray-700/50 border-gray-600"
                  }}
                  defaultValue={new CalendarDate(2026, 1, 15)}
                />

                <DateRangePicker
                  label="Campaign Duration"
                  variant="bordered"
                  color="secondary"
                  classNames={{
                    label: "text-gray-300",
                    input: "text-white",
                    inputWrapper: "bg-gray-700/50 border-gray-600"
                  }}
                  defaultValue={{
                    start: new CalendarDate(2026, 3, 1),
                    end: new CalendarDate(2026, 3, 31)
                  }}
                />

                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Skills and Tags</label>
                  <div className="flex flex-wrap gap-2">
                    <Chip color="primary" variant="flat">AI Design</Chip>
                    <Chip color="secondary" variant="flat">Branding</Chip>
                    <Chip color="success" variant="flat">Marketing</Chip>
                    <Chip color="warning" variant="flat">UI/UX</Chip>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
            <CardBody>
              <h2 className="text-xl font-semibold text-white mb-6">Common Questions</h2>
              <Accordion variant="splitted" className="bg-transparent">
                <AccordionItem
                  key="1"
                  aria-label="How does AI generation work?"
                  title="How does AI generation work?"
                  classNames={{
                    title: "text-white",
                    content: "text-gray-400"
                  }}
                >
                  Our AI uses advanced machine learning models trained on millions of design patterns 
                  to generate unique, professional-quality visuals tailored to your brand and requirements.
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Can I export my designs?"
                  title="Can I export my designs?"
                  classNames={{
                    title: "text-white",
                    content: "text-gray-400"
                  }}
                >
                  Yes! Export in multiple formats including PNG, JPG, SVG, PDF, and even editable 
                  source files for Adobe Creative Suite and Figma.
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Is there a free trial?"
                  title="Is there a free trial?"
                  classNames={{
                    title: "text-white",
                    content: "text-gray-400"
                  }}
                >
                  Absolutely! Start with our free Starter plan that includes 5 AI generations per month. 
                  Upgrade anytime to unlock unlimited creations and premium features.
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}