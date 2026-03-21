import { 
  Card, CardBody,
  Button, ButtonGroup,
  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  useDisclosure,
  Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem,
  Pagination,
  Tabs, Tab,
  Tooltip,
  Avatar, AvatarGroup,
  Badge,
  Divider,
  Spacer,
  Kbd,
  Link
} from '@heroui/react'
import { 
  IconDownload, IconShare, IconTrash, IconEdit, IconCopy,
  IconBrandGithub, IconBrandTwitter, IconBrandLinkedin
} from '@tabler/icons-react'
import { useState } from 'react'

export default function ComponentsPage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Components Gallery</h1>
          <p className="text-gray-400">Interactive showcase of HeroUI v3 components with animations and interactions.</p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Navigation</h2>
          <Card className="bg-gray-800/50 backdrop-blur border border-gray-700 overflow-hidden">
            <Navbar maxWidth="xl" className="bg-gradient-to-r from-purple-600 to-blue-600">
              <NavbarContent>
                <NavbarMenuToggle className="sm:hidden" />
                <NavbarBrand>
                  <p className="font-bold text-white">AI Creative Studio</p>
                </NavbarBrand>
              </NavbarContent>

              <NavbarContent className="hidden sm:flex gap-6" justify="center">
                <NavbarItem>
                  <Link color="foreground" href="#" className="text-white hover:text-purple-200">
                    Features
                  </Link>
                </NavbarItem>
                <NavbarItem isActive>
                  <Link href="#" aria-current="page" className="text-white font-semibold">
                    Components
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color="foreground" href="#" className="text-white hover:text-purple-200">
                    Pricing
                  </Link>
                </NavbarItem>
              </NavbarContent>

              <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                  <Link href="#" className="text-white hover:text-purple-200">
                    Login
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Button as={Link} color="secondary" href="#" variant="flat">
                    Sign Up
                  </Button>
                </NavbarItem>
              </NavbarContent>

              <NavbarMenu>
                <NavbarMenuItem><Link className="w-full text-white" href="#">Features</Link></NavbarMenuItem>
                <NavbarMenuItem><Link className="w-full text-white" href="#">Components</Link></NavbarMenuItem>
                <NavbarMenuItem><Link className="w-full text-white" href="#">Pricing</Link></NavbarMenuItem>
              </NavbarMenu>
            </Navbar>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Buttons and Actions</h2>
          <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
            <CardBody>
              <h3 className="text-lg font-medium text-white mb-4">Button Variants</h3>
              <div className="flex flex-wrap gap-4 mb-6">
                <Button color="primary" variant="solid">Solid</Button>
                <Button color="secondary" variant="bordered">Bordered</Button>
                <Button color="success" variant="flat">Flat</Button>
                <Button color="danger" variant="faded">Faded</Button>
                <Button color="warning" variant="shadow">Shadow</Button>
                <Button color="primary" variant="ghost">Ghost</Button>
              </div>

              <Divider className="bg-gray-700 my-6" />

              <h3 className="text-lg font-medium text-white mb-4">Button Sizes</h3>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Button size="sm" color="primary">Small</Button>
                <Button size="md" color="secondary">Medium</Button>
                <Button size="lg" color="success">Large</Button>
              </div>

              <Divider className="bg-gray-700 my-6" />

              <h3 className="text-lg font-medium text-white mb-4">Icon Buttons</h3>
              <div className="flex flex-wrap gap-4 mb-6">
                <Button color="primary" startContent={<IconDownload size={18} />}>
                  Download
                </Button>
                <Button color="secondary" startContent={<IconShare size={18} />}>
                  Share
                </Button>
                <Button color="danger" startContent={<IconTrash size={18} />} variant="shadow">
                  Delete
                </Button>
                <Button isIconOnly color="primary" aria-label="Edit">
                  <IconEdit size={20} />
                </Button>
                <Button isIconOnly color="secondary" aria-label="Copy">
                  <IconCopy size={20} />
                </Button>
              </div>

              <Divider className="bg-gray-700 my-6" />

              <h3 className="text-lg font-medium text-white mb-4">Button Group</h3>
              <ButtonGroup>
                <Button color="primary">One</Button>
                <Button color="primary">Two</Button>
                <Button color="primary">Three</Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Dropdowns and Menus</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
              <CardBody>
                <h3 className="text-lg font-medium text-white mb-4">Action Menu</h3>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="flat" color="primary">
                      Open Menu
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Action menu">
                    <DropdownItem key="view" startContent={<IconEdit size={16} />}>
                      View Details
                    </DropdownItem>
                    <DropdownItem key="edit" startContent={<IconEdit size={16} />}>
                      Edit
                    </DropdownItem>
                    <DropdownItem key="copy" startContent={<IconCopy size={16} />}>
                      Duplicate
                    </DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger" startContent={<IconTrash size={16} />}>
                      Delete
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CardBody>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
              <CardBody>
                <h3 className="text-lg font-medium text-white mb-4">Share Options</h3>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" color="secondary">
                      Share Project
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Share menu">
                    <DropdownItem key="twitter" startContent={<IconBrandTwitter size={16} />}>
                      Share on Twitter
                    </DropdownItem>
                    <DropdownItem key="linkedin" startContent={<IconBrandLinkedin size={16} />}>
                      Share on LinkedIn
                    </DropdownItem>
                    <DropdownItem key="github" startContent={<IconBrandGithub size={16} />}>
                      Share on GitHub
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CardBody>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Modals and Dialogs</h2>
          <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
            <CardBody>
              <div className="flex flex-wrap gap-4">
                <Button color="primary" onPress={onOpen}>
                  Open Modal
                </Button>
              </div>
              
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 text-white">Modal Title</ModalHeader>
                      <ModalBody className="text-gray-300">
                        <p>
                          This modal showcases HeroUI beautiful overlay components with smooth animations
                          and accessible keyboard navigation.
                        </p>
                        <p>
                          Press Esc to close or click outside the modal.
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                          Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Confirm
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </CardBody>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Tabs</h2>
          <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
            <CardBody>
              <Tabs aria-label="Tabs example" color="primary" variant="underlined">
                <Tab key="photos" title="Photos">
                  <div className="p-4 text-gray-300">
                    Photo gallery content goes here. Perfect for showcasing your AI-generated visuals.
                  </div>
                </Tab>
                <Tab key="music" title="Music">
                  <div className="p-4 text-gray-300">
                    Music library content. Organize your audio projects and soundtracks.
                  </div>
                </Tab>
                <Tab key="videos" title="Videos">
                  <div className="p-4 text-gray-300">
                    Video collection. Display your motion graphics and animations.
                  </div>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Avatars and Badges</h2>
          <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
            <CardBody>
              <div className="flex flex-wrap items-center gap-8">
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Avatar Sizes</h3>
                  <div className="flex items-center gap-4">
                    <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" size="sm" />
                    <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" />
                    <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=3" size="lg" />
                    <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=4" size="xl" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Avatar Group</h3>
                  <AvatarGroup isBordered>
                    <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=5" />
                    <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=6" />
                    <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=7" />
                    <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=8" />
                  </AvatarGroup>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Badges</h3>
                  <div className="flex gap-4">
                    <Badge content="5" color="primary">
                      <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=9" />
                    </Badge>
                    <Badge content="99+" color="danger">
                      <span className="text-white px-3 py-2 bg-gray-700 rounded-lg">Messages</span>
                    </Badge>
                    <Badge content="New" color="success">
                      <span className="text-white px-3 py-2 bg-gray-700 rounded-lg">Updates</span>
                    </Badge>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Tooltips</h2>
          <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
            <CardBody>
              <div className="flex flex-wrap gap-6">
                <Tooltip content="Simple tooltip" color="primary" variant="flat">
                  <Button variant="flat" color="primary">Top (Default)</Button>
                </Tooltip>
                <Tooltip content="Bottom tooltip" placement="bottom" color="success" variant="flat">
                  <Button variant="flat" color="success">Bottom</Button>
                </Tooltip>
                <Tooltip content="Left tooltip" placement="left" color="secondary" variant="flat">
                  <Button variant="flat" color="secondary">Left</Button>
                </Tooltip>
                <Tooltip content="Right tooltip" placement="right" color="warning" variant="flat">
                  <Button variant="flat" color="warning">Right</Button>
                </Tooltip>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Pagination</h2>
          <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
            <CardBody className="flex justify-center">
              <Pagination
                total={10}
                initialPage={1}
                color="primary"
                variant="flat"
                showControls
                showShadow
              />
            </CardBody>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Keyboard Shortcuts</h2>
          <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
            <CardBody>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">Save:</span>
                  <Kbd>Cmd</Kbd>
                  <Kbd>S</Kbd>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">Copy:</span>
                  <Kbd>Cmd</Kbd>
                  <Kbd>C</Kbd>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">Paste:</span>
                  <Kbd>Cmd</Kbd>
                  <Kbd>V</Kbd>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">Search:</span>
                  <Kbd>Cmd</Kbd>
                  <Kbd>K</Kbd>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        <footer className="mt-16 text-center text-gray-400">
          <p>Built with HeroUI v3 - A demo showcase application</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="#" isExternal>
              <IconBrandGithub size={20} className="text-gray-400 hover:text-white transition" />
            </Link>
            <Link href="#" isExternal>
              <IconBrandTwitter size={20} className="text-gray-400 hover:text-blue-400 transition" />
            </Link>
            <Link href="#" isExternal>
              <IconBrandLinkedin size={20} className="text-gray-400 hover:text-blue-600 transition" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}