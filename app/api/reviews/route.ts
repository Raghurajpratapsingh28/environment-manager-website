import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic'

const reviewSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  rating: z.number().min(1).max(5),
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(10, 'Review content must be at least 10 characters'),
  avatar: z.string().optional(),
})

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 10,
    })
    
    return NextResponse.json(reviews)
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('POST request received for reviews')
    
    const body = await request.json()
    console.log('Request body:', body)
    
    // Validate the data
    const validatedData = reviewSchema.parse(body)
    console.log('Validated data:', validatedData)
    
    // Create the review
    const review = await prisma.review.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        rating: validatedData.rating,
        title: validatedData.title,
        content: validatedData.content,
        avatar: validatedData.avatar || null,
        verified: false, // Default to false for new reviews
      },
    })
    
    console.log('Review created successfully:', review)
    return NextResponse.json(review, { status: 201 })
  } catch (error) {
    console.error('Error in POST /api/reviews:', error)
    
    if (error instanceof z.ZodError) {
      console.error('Validation errors:', error.errors)
      return NextResponse.json(
        { 
          error: 'Validation error', 
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }
    
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to create review' },
      { status: 500 }
    )
  }
} 