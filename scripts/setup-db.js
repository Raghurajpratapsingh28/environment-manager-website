const { PrismaClient } = require('../lib/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create some sample reviews
  const sampleReviews = [
    {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      rating: 5,
      title: 'Game Changer for Environment Management',
      content: 'This tool has completely transformed how we handle environment variables. The interface is intuitive and the security features give us peace of mind. Highly recommended for any development team!',
      verified: true,
    },
    {
      name: 'Michael Chen',
      email: 'michael.chen@example.com',
      rating: 5,
      title: 'Excellent Developer Experience',
      content: 'As a senior developer, I appreciate tools that just work. This environment manager is exactly that - simple, secure, and powerful. The team collaboration features are fantastic.',
      verified: true,
    },
    {
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@example.com',
      rating: 4,
      title: 'Great Tool with Room for Growth',
      content: 'Really solid environment management solution. The UI is clean and the functionality covers all our needs. Looking forward to future updates and features.',
      verified: true,
    },
    {
      name: 'David Kim',
      email: 'david.kim@example.com',
      rating: 5,
      title: 'Perfect for Our Startup',
      content: 'We were struggling with environment variable management across our team. This tool solved all our problems. Easy to set up, secure, and the team loves it.',
      verified: false,
    },
    {
      name: 'Lisa Thompson',
      email: 'lisa.thompson@example.com',
      rating: 5,
      title: 'Outstanding Security Features',
      content: 'The security features are top-notch. We can safely manage sensitive environment variables without worrying about exposure. The audit trail is also very helpful.',
      verified: true,
    },
  ];

  for (const review of sampleReviews) {
    await prisma.review.create({
      data: review,
    });
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 