import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Star } from 'lucide-react'

const reviews = [
    {
        name: 'James Hall',
        text: 'Every session feels purposeful, motivating, and designed to push students to improve their game consistently.',
        avatar: '/testomonial1.jpg', // Replace with actual images in public folder
    },
    {
        name: 'Iva Ryan',
        text: 'This platform made building my resume so much easier. The structured tools and clear guidance helped me present my skills professionally and stand out to employers.',
        avatar: '/testomonial2.jpg',
    },
    {
        name: 'Judith Rodriguez',
        text: "As a recent graduate, I didn't know where to start with my CV. Aspiring guided me through every step and made my resume look polished and professional.",
        avatar: '/testomonial3.jpg',
    },
    {
        name: 'Judith Rodriguez',
        text: "As a recent graduate, I didn't know where to start with my CV. Aspiring guided me through every step and made my resume look polished and professional.",
        avatar: '/testomonial3.jpg',
    },

    // Add more reviews if you want more slides
]

const Testomonial = () => {
    return (
        <section className="py-20 px-4 ">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Reviews from our users
                </h3>
                <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16">
                    See what our clients have to say about working with us. Their experiences highlight how we support schools and educators every step of the way
                </p>

                {/* Shadcn Carousel */}
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4 md:-ml-6">
                        {reviews.map((review, index) => (
                            <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                                <Card className="bg-white rounded-3xl shadow-xl border-0 h-full">
                                    <CardContent className="p-8 flex flex-col items-center text-center">
                                        {/* Avatar - Circular */}
                                        <Avatar className="w-32 h-32 mb-6 ring-4 ring-white shadow-lg">
                                            <AvatarImage src={review.avatar} alt={review.name} />
                                            <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>

                                        {/* Name */}
                                        <h2 className="text-xl font-bold text-gray-900 mb-4">
                                            {review.name}
                                        </h2>

                                        {/* Stars */}
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-gray-700 leading-relaxed">
                                            {review.text}
                                        </p>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation Arrows - Visible on larger screens */}
                    <CarouselPrevious className="hidden md:flex -left-12 bg-white shadow-lg hover:bg-gray-100" />
                    <CarouselNext className="hidden md:flex -right-12 bg-white shadow-lg hover:bg-gray-100" />
                </Carousel>
            </div>
        </section>
    )
}

export default Testomonial