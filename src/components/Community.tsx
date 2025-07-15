import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Award,
  TrendingUp,
  BookOpen,
  Camera,
  MapPin
} from "lucide-react";

const communityFeatures = [
  {
    icon: Users,
    title: "Photography Network",
    description: "Connect with 500+ photographers across Kenya",
    stat: "500+ Members",
    color: "bg-blue-500"
  },
  {
    icon: MessageCircle,
    title: "Discussion Forums",
    description: "Share techniques, get feedback, and learn from peers",
    stat: "50+ Daily Posts",
    color: "bg-green-500"
  },
  {
    icon: Calendar,
    title: "Photography Walks",
    description: "Join organized photo walks in major Kenyan cities",
    stat: "Weekly Events",
    color: "bg-purple-500"
  },
  {
    icon: Award,
    title: "Monthly Contests",
    description: "Showcase your work and win exciting prizes",
    stat: "KSh 50k Prizes",
    color: "bg-orange-500"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Nairobi Street Photography Walk",
    date: "Saturday, Jul 20",
    time: "9:00 AM - 2:00 PM",
    location: "Nairobi CBD",
    attendees: 24,
    maxAttendees: 30,
    type: "Photography Walk"
  },
  {
    id: 2,
    title: "Wildlife Photography Workshop",
    date: "Sunday, Jul 28",
    time: "6:00 AM - 6:00 PM",
    location: "Nairobi National Park",
    attendees: 12,
    maxAttendees: 15,
    type: "Workshop"
  },
  {
    id: 3,
    title: "Portrait Lighting Masterclass",
    date: "Saturday, Aug 3",
    time: "10:00 AM - 4:00 PM",
    location: "Westlands Studio",
    attendees: 8,
    maxAttendees: 12,
    type: "Masterclass"
  }
];

const communityStats = [
  { label: "Active Photographers", value: "500+", icon: Users },
  { label: "Photos Shared", value: "25K+", icon: Camera },
  { label: "Monthly Events", value: "20+", icon: Calendar },
  { label: "Counties Covered", value: "47", icon: MapPin }
];

const Community = () => {
  return (
    <section id="community" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Photography Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join Kenya's most vibrant photography community. Learn, share, and grow with fellow photographers 
            while exploring the beauty of our diverse landscape and culture.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 ${feature.color} rounded-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3 text-sm">
                    {feature.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {feature.stat}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {event.attendees}/{event.maxAttendees} spots
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="text-xs">
                      {event.time}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      disabled={event.attendees >= event.maxAttendees}
                    >
                      {event.attendees >= event.maxAttendees ? "Event Full" : "Join Event"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Join Our Community?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect with passionate photographers, improve your skills, and be part of Kenya's most 
            supportive photography network. Your journey to better photography starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
            <Button variant="outline" size="lg">
              <BookOpen className="mr-2 h-5 w-5" />
              Browse Forums
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;