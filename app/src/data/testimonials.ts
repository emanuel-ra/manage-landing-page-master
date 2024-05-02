export type Testimonials = Testimonial[]
export interface Testimonial {
    photo:string
    name:string
    testimonial:string
}
export const testimonials:Testimonials = [
    {
        photo:'/images/avatar-ali.png',
        name:'Anisha Li',
        testimonial:'“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
    },
    {
        photo:'/images/avatar-anisha.png',
        name:'Ali Bravo',
        testimonial:'“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
    },
    {
        photo:'/images/avatar-richard.png',
        name:'Richard Watts',
        testimonial:'“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'
    },
    {
        photo:'/images/avatar-shanai.png',
        name:'Shanai Gough',
        testimonial:'“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'
    }
]