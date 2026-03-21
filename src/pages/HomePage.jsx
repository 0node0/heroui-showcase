import { Button, Card, CardBody, CardFooter, Chip } from '@heroui/react'
import { motion } from 'framer-motion'
import { IconSparkles, IconRocket, IconPalette, IconUsers } from '@tabler/icons-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Chip 
            color="gradient" 
            variant="flat"
            className="mb-6"
            startContent={<IconSparkles size={16} />}
          >
            Powered by HeroUI v3
          </Chip>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            Create Stunning AI
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Experiences in Minutes
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A fictional AI creative platform showcasing the beautiful, accessible, 
            and customizable components from HeroUI v3.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button 
              color="primary" 
              size="lg"
              variant="shadow"
              as="a"
              href="/dashboard"
            >
              <IconRocket size={20} />
              Launch Demo
            </Button>
            <Button 
              color="default" 
              size="lg"
              variant="bordered"
              className="text-white border-white"
              as="a"
              href="/components"
            >
              <IconPalette size={20} />
              View Components
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<IconSparkles className="text-purple-400" size={40} />}
            title="AI-Powered Design"
            description="Generate beautiful visuals with our advanced AI models trained on millions of designs."
          />
          <FeatureCard
            icon={<IconRocket className="text-blue-400" size={40} />}
            title="Lightning Fast"
            description="Optimized performance with instant previews and real-time collaboration."
          />
          <FeatureCard
            icon={<IconUsers className="text-pink-400" size={40} />}
            title="Team Collaboration"
            description="Work together seamlessly with shared workspaces and version control."
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            tier="Starter"
            price="$0"
            period="/month"
            features={['5 AI generations/month', 'Basic templates', 'Email support']}
            color="default"
          />
          <PricingCard
            tier="Pro"
            price="$29"
            period="/month"
            features={['Unlimited generations', 'Premium templates', 'Priority support', 'Team collaboration']}
            color="primary"
            popular
          />
          <PricingCard
            tier="Enterprise"
            price="$99"
            period="/month"
            features={['Everything in Pro', 'Custom AI models', 'Dedicated support', 'SSO & security']}
            color="secondary"
          />
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>Built with HeroUI v3 - A demo showcase application</p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="bg-gray-800/50 backdrop-blur border border-gray-700">
        <CardBody className="p-8">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </CardBody>
      </Card>
    </motion.div>
  )
}

function PricingCard({ tier, price, period, features, color, popular }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className={(popular ? 'border-purple-500 border-2' : 'border border-gray-700') + ' bg-gray-800/50 backdrop-blur'}>
        <CardBody className="p-8">
          {popular && (
            <Chip color="primary" variant="flat" className="mb-4">
              Most Popular
            </Chip>
          )}
          <h3 className="text-2xl font-bold text-white mb-2">{tier}</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">{price}</span>
            <span className="text-gray-400">{period}</span>
          </div>
          <ul className="space-y-3 mb-8">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                {feature}
              </li>
            ))}
          </ul>
          <Button 
            color={color} 
            variant={popular ? 'shadow' : 'bordered'}
            className="w-full"
          >
            Get Started
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  )
}