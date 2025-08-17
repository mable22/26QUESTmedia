from django.shortcuts import render

# Create your views here.


def home(request):
    # Dummy listings for initial UI scaffold
    listings = [
        {
            "id": 1,
            "title": "Weekend Art Jam",
            "category": "Art",
            "age_range": "6 - 12",
            "price": 799,
            "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
            "location": "Indiranagar, Bengaluru",
        },
        {
            "id": 2,
            "title": "Beginner Robotics",
            "category": "STEM",
            "age_range": "8 - 14",
            "price": 1299,
            "image": "https://images.unsplash.com/photo-1581093588401-16e28b68f57c?q=80&w=1200&auto=format&fit=crop",
            "location": "HSR Layout, Bengaluru",
        },
        {
            "id": 3,
            "title": "Bharatanatyam Basics",
            "category": "Dance",
            "age_range": "5 - 10",
            "price": 999,
            "image": "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
            "location": "Kothrud, Pune",
        },
        {
            "id": 4,
            "title": "Junior Football Camp",
            "category": "Sports",
            "age_range": "7 - 13",
            "price": 599,
            "image": "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
            "location": "Powai, Mumbai",
        },
        {
            "id": 5,
            "title": "Pottery & Clay Play",
            "category": "Crafts",
            "age_range": "6 - 12",
            "price": 899,
            "image": "https://images.unsplash.com/photo-1523419409543-8f3f1ec7b4ec?q=80&w=1200&auto=format&fit=crop",
            "location": "Kondapur, Hyderabad",
        },
    ]
    return render(request, "home.html", {"listings": listings})
