#!/bin/bash

echo "🚀 Setting up Environment Manager with Review Section"
echo "=================================================="

# Check if .env file exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cat > .env << EOF
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://postgres:password@localhost:5432/environment_manager?schema=public"
EOF
    echo "✅ .env file created"
    echo "⚠️  Please update the DATABASE_URL in .env with your actual PostgreSQL credentials"
else
    echo "✅ .env file already exists"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npm run db:generate

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update the DATABASE_URL in .env with your PostgreSQL credentials"
echo "2. Make sure PostgreSQL is running"
echo "3. Run: npm run db:push (to create database tables)"
echo "4. Run: npm run db:seed (to add sample reviews)"
echo "5. Run: npm run dev (to start the development server)"
echo ""
echo "For more information, see DATABASE_SETUP.md" 