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


def explore(request):
    listings = [
        {
            "id": 101,
            "title": "Skating for Kids",
            "category": "Sports",
            "age_min": 6,
            "age_max": 12,
            "price": 699,
            "trial": True,
            "weekend": True,
            "rating": 4.6,
            "image": "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop",
            "location": "Koramangala, Bengaluru",
            "lat": 12.9352,
            "lng": 77.6245,
        },
        {
            "id": 102,
            "title": "Beginner Keyboard",
            "category": "Music",
            "age_min": 7,
            "age_max": 14,
            "price": 1199,
            "trial": True,
            "weekend": False,
            "rating": 4.4,
            "image": "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?q=80&w=1200&auto=format&fit=crop",
            "location": "BTM, Bengaluru",
            "lat": 12.9166,
            "lng": 77.6101,
        },
        {
            "id": 103,
            "title": "Painting & Gouache",
            "category": "Art",
            "age_min": 5,
            "age_max": 11,
            "price": 899,
            "trial": False,
            "weekend": True,
            "rating": 4.8,
            "image": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
            "location": "Indiranagar, Bengaluru",
            "lat": 12.9719,
            "lng": 77.6412,
        },
        {
            "id": 104,
            "title": "Intro to Robotics",
            "category": "STEM",
            "age_min": 8,
            "age_max": 14,
            "price": 1599,
            "trial": True,
            "weekend": False,
            "rating": 4.7,
            "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
            "location": "HSR Layout, Bengaluru",
            "lat": 12.9141,
            "lng": 77.6408,
        },
        {
            "id": 105,
            "title": "Bharatanatyam Beginner",
            "category": "Dance",
            "age_min": 5,
            "age_max": 10,
            "price": 999,
            "trial": False,
            "weekend": True,
            "rating": 4.5,
            "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
            "location": "Whitefield, Bengaluru",
            "lat": 12.9698,
            "lng": 77.7499,
        },
    ]
    categories = ["Art", "STEM", "Sports", "Music", "Dance", "Coding", "Drama"]
    ages = ["3-5", "5-8", "8-12", "12-16"]
    return render(request, "explore.html", {
        "listings": listings,
        "categories": categories,
        "ages": ages,
        "center": {"lat": 12.9716, "lng": 77.5946},
    })
