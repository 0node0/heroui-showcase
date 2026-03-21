import { 
  Card, CardBody, 
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Button, Chip, Avatar, Progress, Spinner,
  Badge, Tooltip
} from '@heroui/react'
import { 
  IconTrendingUp, IconUsers, IconCreditCard, IconActivity,
  IconBell, IconSearch, IconDots
} from '@tabler/icons-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-400">Welcome back! Here's what's happening with your AI projects.</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
              />
              <IconSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            <Tooltip content="Notifications">
              <Button isIconOnly variant="flat" className="bg-gray-800 text-white">
                <Badge content="3" color="danger">
                  <IconBell size={20} />
                </Badge>
              </Button>
            </Tooltip>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<IconTrendingUp className="text-green-400" size={24} />}
            title="Total Revenue"
            value="$12,458"
            change="+12.5%"
            trend="up"
          />
          <StatCard
            icon={<IconUsers className="text-blue-400" size={24} />}
            title="Active Users"
            value="2,456"
            change="+8.2%"
            trend="up"
          />
          <StatCard
            icon={<IconCreditCard className="text-purple-400" size={24} />}
            title="Projects Created"
            value="847"
            change="+23.1%"
            trend="up"
          />
          <StatCard
            icon={<IconActivity className="text-pink-400" size={24} />}
            title="AI Generations"
            value="15,234"
            change="-2.4%"
            trend="down"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-gray-800/50 backdrop-blur border border-gray-700">
            <CardBody>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
                <Button size="sm" variant="flat" color="primary">View All</Button>
              </div>
              <Table aria-label="Recent projects table">
                <TableHeader>
                  <TableColumn>PROJECT</TableColumn>
                  <TableColumn>STATUS</TableColumn>
                  <TableColumn>CREATED</TableColumn>
                  <TableColumn>AI SCORE</TableColumn>
                  <TableColumn>ACTION</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar src="https://api.dicebear.com/7.x/shapes/svg?seed=1" size="sm" />
                        <span className="text-white">Brand Identity Pack</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Chip color="success" size="sm" variant="flat">Completed</Chip>
                    </TableCell>
                    <TableCell className="text-gray-400">2 hours ago</TableCell>
                    <TableCell>
                      <Progress value={95} size="sm" className="w-20" color="success" showValueLabel />
                    </TableCell>
                    <TableCell>
                      <Button isIconOnly size="sm" variant="light">
                        <IconDots size={16} className="text-gray-400" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar src="https://api.dicebear.com/7.x/shapes/svg?seed=2" size="sm" />
                        <span className="text-white">Social Media Kit</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Chip color="warning" size="sm" variant="flat">In Progress</Chip>
                    </TableCell>
                    <TableCell className="text-gray-400">5 hours ago</TableCell>
                    <TableCell>
                      <Progress value={67} size="sm" className="w-20" color="warning" showValueLabel />
                    </TableCell>
                    <TableCell>
                      <Button isIconOnly size="sm" variant="light">
                        <IconDots size={16} className="text-gray-400" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar src="https://api.dicebear.com/7.x/shapes/svg?seed=3" size="sm" />
                        <span className="text-white">Landing Page Design</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Chip color="primary" size="sm" variant="flat">Review</Chip>
                    </TableCell>
                    <TableCell className="text-gray-400">1 day ago</TableCell>
                    <TableCell>
                      <Progress value={89} size="sm" className="w-20" color="primary" showValueLabel />
                    </TableCell>
                    <TableCell>
                      <Button isIconOnly size="sm" variant="light">
                        <IconDots size={16} className="text-gray-400" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar src="https://api.dicebear.com/7.x/shapes/svg?seed=4" size="sm" />
                        <span className="text-white">Email Templates</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Chip color="default" size="sm" variant="flat">Draft</Chip>
                    </TableCell>
                    <TableCell className="text-gray-400">2 days ago</TableCell>
                    <TableCell>
                      <Progress value={34} size="sm" className="w-20" color="default" showValueLabel />
                    </TableCell>
                    <TableCell>
                      <Button isIconOnly size="sm" variant="light">
                        <IconDots size={16} className="text-gray-400" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
            <CardBody>
              <h2 className="text-xl font-semibold text-white mb-4">Activity Feed</h2>
              <div className="space-y-4">
                <ActivityItem
                  user="Sarah Chen"
                  action="created a new project"
                  target="Brand Guidelines"
                  time="5m ago"
                  avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                />
                <ActivityItem
                  user="Alex Rivera"
                  action="commented on"
                  target="Marketing Campaign"
                  time="12m ago"
                  avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                />
                <ActivityItem
                  user="Mike Johnson"
                  action="exported"
                  target="Social Media Pack"
                  time="1h ago"
                  avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
                />
                <ActivityItem
                  user="Emma Wilson"
                  action="upgraded to"
                  target="Pro Plan"
                  time="3h ago"
                  avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
                />
              </div>
              <Button variant="flat" color="default" className="w-full mt-6">
                View All Activity
              </Button>
            </CardBody>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">System Status</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
              <CardBody className="flex items-center justify-center p-8">
                <Spinner color="primary" />
                <p className="text-gray-400 mt-4">AI Processing</p>
              </CardBody>
            </Card>
            <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
              <CardBody className="flex items-center justify-center p-8">
                <Spinner color="secondary" />
                <p className="text-gray-400 mt-4">Rendering</p>
              </CardBody>
            </Card>
            <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
              <CardBody className="flex items-center justify-center p-8">
                <Spinner color="success" />
                <p className="text-gray-400 mt-4">Exporting</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, title, value, change, trend }) {
  return (
    <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
      <CardBody>
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-gray-700/50 rounded-lg">{icon}</div>
          <Chip 
            color={trend === 'up' ? 'success' : 'danger'} 
            size="sm" 
            variant="flat"
            className={trend === 'up' ? 'text-green-400' : 'text-red-400'}
          >
            {change}
          </Chip>
        </div>
        <h3 className="text-gray-400 text-sm mb-1">{title}</h3>
        <p className="text-2xl font-bold text-white">{value}</p>
      </CardBody>
    </Card>
  )
}

function ActivityItem({ user, action, target, time, avatar }) {
  return (
    <div className="flex items-start gap-3">
      <Avatar src={avatar} size="sm" />
      <div className="flex-1">
        <p className="text-sm text-gray-300">
          <span className="font-medium text-white">{user}</span>{' '}
          {action}{' '}
          <span className="text-purple-400">{target}</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  )
}