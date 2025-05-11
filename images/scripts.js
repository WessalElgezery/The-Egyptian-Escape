document.addEventListener("DOMContentLoaded", () => {

    // 1. Smooth Scroll for Navigation Links
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only prevent default for anchor links within the page
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 60,  // Offset for fixed nav
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Active Navigation Link Highlighting
    window.addEventListener('scroll', () => {
        let currentPosition = window.scrollY + 70;  // Adjust for header offset
        let sections = document.querySelectorAll('section[id]');
        let navLinks = document.querySelectorAll('nav a');

        sections.forEach(section => {
            if (currentPosition >= section.offsetTop && 
                currentPosition < (section.offsetTop + section.offsetHeight)) {
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Find the corresponding link and add active class
                const id = section.getAttribute('id');
                const correspondingLink = document.querySelector(`nav a[href="#${id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    });

    // 3. Newsletter Form Validation
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        const emailInput = newsletterForm.querySelector('input[type="email"]');

        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            alert('Thank you for subscribing!');
            emailInput.value = ''; // Clear the input after successful subscription
        });
    }

    // 4. Check if user is logged in
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        // You could add a welcome message or update UI for logged-in users
        console.log("User logged in:", user.name);
    }
});

// Email validation function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

//Search Scripts
        // Attractions data
        const attractions = [
            {
                id: 1,
                name: "Great Pyramid of Giza",
                location: "Giza Plateau, Egypt",
                shortDesc: "The last remaining wonder of the ancient world, standing tall for over 4,500 years.",
                longDesc: "The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex. Built as a tomb for the Fourth Dynasty Egyptian pharaoh Khufu, it was the tallest man-made structure in the world for over 3,800 years.",
                image: "images/pyramids.jpeg",
                bestTime: "Oct-Apr (cooler months)",
                price: "200 EGP (about $4)",
                hours: "8:00 AM - 5:00 PM daily",
                bookingUrl: "book.html"
            },
            {
                id: 2,
                name: "The Egyptian Museum",
                location: "El-Tahrir Square, Cairo",
                shortDesc: "The Egyptian Museum in Cairo, located in El-Tahrir Square, houses over 120,000 ancient artifacts, showcasing 5,000 years of Egypt’s history.",
                longDesc: "The Egyptian Museum is the oldest archaeological museum in the Middle East, and houses the largest collection of Pharaonic antiquities in the world. The museum displays an extensive collection spanning from the Predynastic Period to the Greco-Roman Era.",
                image: "images/egyptian museum.jpg",
                bestTime: "Oct-Apr (cooler months)",
                price: "300 EGP (about $6)",
                hours: "9:00 AM - 5:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 3,
                name: "Grand Egyptian Museum",
                location: "Al Remayah Square, Giza",
                shortDesc: "The Grand Egyptian Museum is the world’s largest archaeological museum, showcasing over 50,000 artifacts—including King Tutankhamun’s complete treasures—in a state-of-the-art display.",
                longDesc: "Grand Egyptian Museum (GEM), museum in Giza, Egypt, housing archaeological artifacts from thousands of years of human civilization in Egypt, spanning from the predynastic period to the Greco-Roman era (c. 3100 bce to 400 ce). Its collection draws from a number of cultural institutions in Egypt, including the Egyptian Museum (founded in 1858) in downtown Cairo. The centerpiece of that museum’s collection is the cache of items discovered in the tomb of King Tutankhamun, and it will have pride of place in the new museum. Occupying a 120-acre (50-hectare) plot of land, the Grand Egyptian Museum (GEM) is the largest archaeological museum in the world.",
                image: "images/grand egyptian museum.jpg",
                bestTime: "Oct-Apr (cooler months)",
                price: "200 EGP (about $4)",
                hours: "9:00 AM - 5:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 4,
                name: "Cairo Citadel",
                location: "Al Abageyah, El-Khalifa, Cairo",
                shortDesc: "The Citadel of Cairo or Citadel of Saladin is a medieval Islamic-era fortification in Cairo, Egypt, built by Salah ad-Din and further developed by subsequent Egyptian rulers.",
                longDesc: "The Citadel of Sultan Salah al-Din al-Ayyubi (Saladin) is one of the most iconic monuments in Islamic Cairo, and among the most impressive defensive fortresses dating to the Middle Ages. Its strategic location on the Muqattam Hills gave it a formidable defensive position, and offered, as it still does today, an unrestricted panoramic view of Cairo.",
                image: "images/cairo citadel.jpg",
                bestTime: "Oct-Apr (cooler months)",
                price: "300 EGP (about $6)",
                hours: "8:00 AM - 5:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 5,
                name: "Abu Simbel",
                location: "Aswan",
                shortDesc: "Abu Simbel is an iconic ancient temple complex in southern Egypt, built by Ramses II, featuring colossal rock-cut statues and relocated to save it from Nile flooding.",
                longDesc: "The Great Temple of Abu Simbel, in Nubia near Egypt’s southern border, is among the most awe-inspiring monuments of Egypt. It was cut into the living rock by King Ramesses II (the Great) of the Nineteenth Dynasty, around 1264 BC. The temple is most well known for the four imposing seated colossal statues that dominate its façade. One of these collapsed because of an ancient earthquake, and its fragments can still be seen on the ground.",
                image: "images/abu simbel.jpg",
                bestTime: "Oct-Apr (cooler months)",
                price: "550 EGP (about $11)",
                hours: "9:00 AM - 5:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 6,
                name: "Royal Jewelry Museum",
                location: "Alexandria",
                shortDesc: "The Royal Jewelry Museum displays the collectibles of the Egyptian royal family, founded by Muhammad Ali Pasha in 1805 and continued to rule for 150 years, until 1952.",
                longDesc: "The Royal Jewelry Museum is an art and history museum in the Zizenia neighborhood of Alexandria, Egypt. It is located in the former palace of Princess Fatma Al-Zahra'. The building's halls contain an inestimable collection of jewels and jewelry of the Muhammad Ali Dynasty. 19th-century paintings, statues, and decorative arts are also exhibited in the rooms and lobbies. The museum was first inaugurated on 24 October 1986. After several years of renovations and expansion it was reopened in April 2010.",
                image: "images/royal jewelry museum2.jpg",
                bestTime: "Mar-May (pleasant temperatures)",
                price: "220 EGP (about $4)",
                hours: "9:00 AM - 5:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 7,
                name: "Baron Empain Palace",
                location: "Heliopolis, Cairo",
                shortDesc: "Baron Empain Palace is a stunning, Hindu-inspired architectural gem in Heliopolis, Cairo, built in 1911 by Belgian industrialist Baron Édouard Empain, known for its unique design and mysterious history.",
                longDesc: "Baron Empain's palace, with its Indian style and tower, stands out in the desert landscape, distinct from the rest of the city. The palace reflects the high status of its owner and marks a major milestone in the urban landscape of Heliopolis. Baron Empain's palace is the most prominent of monuments in the capital, its unique and innovative image attracts crowds of pedestrians on the road.",
                image: "images/baron empain palace.jpeg",
                bestTime: "Oct-Apr (cooler months)",
                price: "220 EGP (about $4)",
                hours: "9:00 AM - 6:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 8,
                name: "Abdeen Palace Museum",
                location: "Abdeen Square, Cairo",
                shortDesc: "Abdeen Palace marks the inception of modern Cairo. The city that came to life upon orders of Khedive Ismail to turn into a token of European style embracing spacious squares, wide streets, palaces, buildings and bridges on the Nile, gardens with trees and rare palm trees.",
                longDesc: "Abdeen Palace marks the inception of modern Cairo. The city that came to life upon orders of Khedive Ismail to turn into a token of European style embracing spacious squares, wide streets, palaces, buildings and bridges on the Nile, gardens with trees and rare palm trees.The palace was constructed upon an order by Kedive Ismail after he was enthroned in 1863; the building process lasted for 10 years. The palace is named after Sultan Abidin Bey, a military leader during the reign of Mohamed Ali who owned a mansion in situ of Abdeen Palace. Khedive Ismail bought the palace from the military’s leader widow. Later, he built the Saray on that same land, seizing the large landscape surrounding it.",
                image: "images/abdeen palace.jpg",
                bestTime: "Nov-Feb (mild temperatures)",
                price: "150 EGP (about $3)",
                hours: "9:00 AM - 3:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 9,
                name: "Saint Catherine’s Monastery",
                location: "South Sinai",
                shortDesc: "Saint Catherine’s Monastery is a Christian monastery located in the Sinai Peninsula of Egypt. Located at the foot of Mount Sinai, it was built between AD 548 and 565, and is the world's oldest continuously inhabited Christian monastery.",
                longDesc: "On the slopes of Mount Sinai, where Moses received the Ten Commandments from God, lies one of the oldest functioning monasteries in the world. Commonly known as Saint Catherine’s Monastery, its actual name is the “Sacred Monastery of the God-Trodden Mount Sinai”. It was built by the order of the Byzantine Emperor Justinian I (527–565 AD) in 548–565 ADin order to house the monks that had been living in the Sinai Peninsula since the 4th century AD.",
                image: "images/saint catherine.jpg",
                bestTime: "Mar-May (pleasant temperatures)",
                price: "Genral Enterance: Free",
                hours: "8:45 AM - 12:45 PM",
                bookingUrl: "book.html"
            },
            {
                id: 10,
                name: "Ras Mohamed National Park",
                location: "Sharm El-Sheikh",
                shortDesc: "Ras Mohamed is a national park in Egypt at the southern extreme of the Sinai Peninsula, overlooking the Gulf of Suez on the west and the Gulf of Aqaba to the east.[1] The park is becoming a center of eco-tourism in the region.",
                longDesc: "Ras Mohamed National Park (RMNP) with its unique natural heritage and ecological diversity, are considered the cornerstone of environmental tourism within the South Sinai Peninsula, which encompasses geological features, coral reefs, mountains, transitional coast, marine and terrestrial wildlife. RMNP includes natural treasures, extraordinary landscape, beautiful beaches, magnificent coral reefs, tremendous types of fishes and fascinating nature. The park is located at the southern tip of Sinai adjacent to Sharm El-Sheikh City and 446 km from Cairo, it covering 480 km2 overlooking the junction of the Gulfs of Suez and Aqaba.",
                image: "images/ras mohamed2.jpg",
                bestTime: "Oct-Apr (cooler months)",
                price: "200 EGP (about $4)",
                hours: "9:00 AM - 5:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 11,
                name: "Manial Palace Museum",
                location: "Old Cairo",
                shortDesc: "The Manial Palace and Museum is a former Alawiyya dynasty era palace and grounds on Rhoda Island on the Nile. It is of Ottoman architecture and located in the Sharia Al-Saray area in the El-Manial district of southern Cairo, Egypt.",
                longDesc: "The Museum of Prince Muhammad Ali’s Palace in Manial is one of the most beautiful and important historical museum in Egypt. The museum exhibits an important period in the history of modern Egypt and is characterized by its architectural design. Its modern Islamic style merges with Persian and Mamluk elements. It was also inspired by Syrian, Moroccan and Andalusian motifs, as well as Ottoman style. The building thus harmonises between a number of Islamic architectural traditions.",
                image: "images/manial palace.jpg",
                bestTime: "Oct-Apr (cooler months)",
                price: "220 EGP (about $4)",
                hours: "9:00 AM - 5:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 12,
                name: "Karnak Temple Complex",
                location: "Near Luxor",
                shortDesc: "The Karnak Temple Complex, commonly known as Karnak, comprises a vast mix of temples, pylons, chapels, and other buildings near Luxor, Egypt.",
                longDesc: "The Karnak Temple Complex, commonly known as Karnak, comprises a vast mix of temples, pylons, chapels, and other buildings near Luxor, Egypt. Construction at the complex began during the reign of Senusret I (reigned 1971–1926 BC) in the Middle Kingdom (c. 2000–1700 BC) and continued into the Ptolemaic Kingdom (305–30 BC), although most of the extant buildings date from the New Kingdom. The area around Karnak was the ancient Egyptian Ipet-isut (The Most Selected of Places) and the main place of worship of the 18th Dynastic Theban Triad, with the god Amun as its head. It is part of the monumental city of Thebes, and in 1979 it was added to the UNESCO World Heritage List along with the rest of the city. Karnak gets its name from the nearby, and partly surrounded, modern village of El-Karnak, 2.5 kilometres (1.6 miles) north of Luxor.",
                image: "images/karnak2.jpg",
                bestTime: "Oct-Apr (cooler months)",
                price: "600 EGP (about $12)",
                hours: "6:00 AM - 5:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 13,
                name: "Umm Kulthum Museum",
                location: "Al-Rawda Island, Cairo",
                shortDesc: "Umm Kulthum's Museum is considered a cultural and artistic beacon that preserves the great singer's legacy. The museum was built as a commemoration to the legendry Egyptian singer. The museum displays most of her remarkable musical history and her collections and belongings.",
                longDesc: "Umm Kulthum's Museum is considered a cultural and artistic beacon that preserves the great singer's legacy. The museum was built as a commemoration to the legendry Egyptian singer. The museum displays most of her remarkable musical history and her collections and belongings. The Ministry of Culture started to establish this museum in April 1998 in Al-Rawda Island on the Nile in the heart of Cairo.  The ministry then allocated one of the Monastery Palace's buildings for establishing Umm Kulthum's Museum. The museum is located in Al-Rawda Island and next to the famous Nilometre that attracts both foreigners and Egyptians.",
                image: "images/umm kulthum museum.jpg",
                bestTime: "Autumn/Spring",
                price: "150 EGP (about $3)",
                hours: "10:00 AM - 5:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 14,
                name: "Museum of Islamic Art",
                location: "Bab El-Khalk, Cairo",
                shortDesc: "The Museum of Islamic Art contains one of the largest and most extensive collections of Islamic artifacts in the world. The idea of collecting and display the grand collection of artifacts began in 1880 AD. Eventually the building was established and inaugurated in 1903 AD, during the region of Khedive Abbas Helmy ll. The building’s facade was made in the Mamluk style and is adjacent to the National Library of Egypt.",
                longDesc: "The Museum of Islamic Art displays some of the rarest exhibits including pottery, pieces of cloth, rocks with Islamic writings, colored windows, and many other displays. There is also the collection of Persian and Turkish pottery that the museum bought in 1945, A whole section in the Museum of Islamic Art was specified for different types of the copies of the Qur'an. Most of the displays of this section date back to the Ottoman period and they were made out of gold. There are many different styles of decorations on them and marvelous types of Arabic calligraphy.",
                image: "images/islamic art museum.jpg",
                bestTime: "Oct-Apr (cooler months)",
                price: "340 EGP (about $7)",
                hours: "9:00 AM - 5:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 15,
                name: "Mummification Museum",
                location: "Luxor",
                shortDesc: "Mummification museum in Luxor (ancient Thebes), intended to provide an understanding of the process to preserve the body. The ancient Egyptians not only applied embalming to dead humans but also to many animals (Cats, dogs, crocodiles…. etc.). God Anubis(the Jackal) was the god of embalming and mummification.",
                longDesc: "Housed in the former visitors centre on Luxor’s corniche, the Mummification Museum has well-presented exhibits explaining the art of mummification. The museum is small and some may find the entrance fee overpriced. Also, although it should be open throughout the day, a lack of visitors means that it sometimes closes for several hours after midday.",
                image: "images/mummification museum.jpg",
                bestTime: "Oct-Apr (cooler months)",
                price: "220 EGP (about $4)",
                hours: "9:00 AM - 2:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 16,
                name: "Bibliotheca Alexandrina",
                location: "Alexandria",
                shortDesc: "The Bibliotheca Alexandrina is a major library and cultural center on the shore of the Mediterranean Sea in Alexandria, Egypt. It is a commemoration of the Library of Alexandria, once one of the largest libraries worldwide, which was lost in antiquity. The Bibliotheca Alexandrina contains books in classical Arabic, English, and French.",
                longDesc: "Alexandria’s ancient library was one of the greatest of all classical institutions, and while replacing it might seem a Herculean task, the new Bibliotheca Alexandrina manages this with aplomb. Opened in 2002, this impressive piece of modern architecture is a deliberate attempt to rekindle the brilliance of the original centre of learning and culture. The complex has become one of Egypt’s major cultural venues and a stage for numerous international performers, and is home to a collection of brilliant museums.",
                image: "images/bibliotheca alexandrina.jpg",
                bestTime: "Spring/Autumn",
                price: "100 EGP (about $2)",
                hours: "10:00 AM - 7:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 17,
                name: "Sharm al-Sheikh Museum",
                location: "South Sinai",
                shortDesc: "The museum’s display scenario broadly reflects the different aspects of human civilization and culture in general, while shedding light specifically on ancient Egyptian civilization. This is done through a selection of historical objects that were carefully chosen from museum storage rooms.",
                longDesc: "The Sharm El-Sheikh Museum is the first museum of Egyptian antiquities in South Sinai Governorate, highlighting the role played by Egyptian civilization throughout the ages, the aspects of cultural integration between Egypt and other civilizations that flourished on its land, and the relationship of the ancient Egyptians with their surrounding environment. It also serves as a cultural center and a meeting point for human civilizations, standing as one of the governorate's main tourist attractions.",
                image: "images/sharm museum.jpeg",
                bestTime: "Oct-Apr (cooler months)",
                price: "200 EGP (about $4)",
                hours: "10:00 AM - 1:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 18,
                name: "Alexandria Ancient Roman Theater",
                location: "Alexandria",
                shortDesc: "The Roman Theater is an ancient Roman amphitheater located in the Kom El-Dikka area in the heart of Alexandria, Egypt. Built in the early 4th century AD, it is one of the most significant remnants of the Roman era in Egypt.",
                longDesc: "The Ancient Roman Theater in Alexandria is a renowned landmark and the second most significant city in Egypt, following the capital, Cairo. Although Roman arenas were widespread in various countries such as Greece, Italy, and Turkey during the Roman era, with numerous surviving examples in Europe and the Middle East, the Roman Amphitheatre in Alexandria stands as Egypt's sole representation of this architectural marvel.",
                image: "images/roman theater.jpg",
                bestTime: "Spring/Autumn",
                price: "200 EGP (about $4)",
                hours: "9:00 AM - 4:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 19,
                name: "Wadi Al-Hitan",
                location: "Fayouum",
                shortDesc: "Wadi El-Hitan (Valley of the Whales) is a natural reserve area located in the western desert, about 200 km west of Cairo. The area is of important paleontological interest due to the existence of wide variety of fossilized flora and fauna.",
                longDesc: "Wadi Al-Hitan, Whale Valley, in the Western Desert of Egypt, contains invaluable fossil remains of the earliest, and now extinct, suborder of whales, Archaeoceti. These fossils represent one of the major stories of evolution: the emergence of the whale as an ocean-going mammal from a previous life as a land-based animal. This is the most important site in the world for the demonstration of this stage of evolution. It portrays vividly the form and life of these whales during their transition. The number, concentration and quality of such fossils here is unique, as is their accessibility and setting in an attractive and protected landscape. The fossils of Al-Hitan show the youngest archaeocetes, in the last stages of losing their hind limbs. Other fossil material in the site makes it possible to reconstruct the surrounding environmental and ecological conditions of the time.",
                image: "images/wadi alhitan.jpg",
                bestTime: "Oct-Apr (cooler months)",
                price: "150 EGP (about $3)",
                hours: "8:00 AM - 4:00 PM",
                bookingUrl: "book.html"
            },
            {
                id: 20,
                name: "Africa Safari Park",
                location: "Alex-Cairo Desert Road",
                shortDesc: "Africa Safari Park is a thrilling wildlife destination near Cairo, offering an exciting open-air safari experience where visitors can see lions, giraffes, zebras, and other exotic animals up close in a naturalistic setting.",
                longDesc: "Nestled along the Cairo-Alexandria Desert Road, Africa Safari Park is Egypt’s premier open-air wildlife experience, bringing the majesty of an African safari just a short drive from the bustling capital. Spanning vast, carefully designed landscapes, the park allows visitors to observe lions, giraffes, zebras, ostriches, antelopes, and more roaming freely in habitats that mimic their natural environments. Unlike traditional zoos, the park emphasizes immersive encounters, with guided jeep safaris (often included in tickets) taking guests through expansive enclosures for up-close views of predators and herbivores alike. The park’s layout includes shaded rest areas, simple eateries (pack snacks for picky kids), and souvenir stalls. Though not as vast as savanna reserves, its accessibility—under an hour from Cairo—makes it a perfect half-day trip. Pro tips: Visit at opening for active animals, wear neutral colors to blend in, and check ahead for seasonal events like sunset safaris.",
                image: "images/africa safari park.jpg",
                bestTime: "Oct-Apr (cooler months)",
                price: "400 EGP (about $8)",
                hours: "9:00 AM - 5:00 PM",
                bookingUrl: "book.html"
            }
        ];
// Display attractions on page load
document.addEventListener('DOMContentLoaded', function() { 
          renderAttractions(attractions);
          // Search functionality
          document.getElementById('search-btn').addEventListener('click', searchAttractions);
          document.getElementById('search-input').addEventListener('keypress', function(e) {
              if (e.key === 'Enter') searchAttractions();
          });
          
          // Modal close button
          document.getElementById('close-modal').addEventListener('click', closeModal);
      });

      function renderAttractions(attractionsList) {
          const container = document.getElementById('attractions-container');
          container.innerHTML = '';
          
          if (attractionsList.length === 0) {
              container.innerHTML = '<p class="no-results">No attractions found. Try a different search term.</p>';
              return;
          }
          
          attractionsList.forEach(attraction => {
              const card = document.createElement('div');
              card.className = 'card';
              card.innerHTML = `
                  <img src="${attraction.image}" alt="${attraction.name}" class="card-img">
                  <div class="card-content">
                      <h3>${attraction.name}</h3>
                      <p class="location">${attraction.location}</p>
                      <p class="description">${attraction.shortDesc}</p>
                      <span class="read-more" data-id="${attraction.id}">Read more &raquo;</span>
                  </div>
              `;
              container.appendChild(card);
          });
          
          // Add event listeners to read more buttons
          document.querySelectorAll('.read-more').forEach(btn => {
              btn.addEventListener('click', function() {
                  const id = parseInt(this.getAttribute('data-id'));
                  showAttractionDetails(id);
              });
          });
      }

      function searchAttractions() {
          const term = document.getElementById('search-input').value.toLowerCase();
          if (!term) {
              renderAttractions(attractions);
              return;
          }
          
          const results = attractions.filter(attraction => 
              attraction.name.toLowerCase().includes(term) || 
              attraction.location.toLowerCase().includes(term) ||
              attraction.shortDesc.toLowerCase().includes(term)
          );
          
          renderAttractions(results);
      }

      function showAttractionDetails(id) {
          const attraction = attractions.find(a => a.id === id);
          if (!attraction) return;
          
          document.getElementById('modal-img').src = attraction.image;
          document.getElementById('modal-title').textContent = attraction.name;
          document.getElementById('modal-location').textContent = attraction.location;
          document.getElementById('modal-description').textContent = attraction.longDesc;
          document.getElementById('best-time').textContent = attraction.bestTime;
          document.getElementById('ticket-price').textContent = attraction.price;
          document.getElementById('opening-hours').textContent = attraction.hours;
          
          // Update booking link
          document.getElementById('book-btn').href = attraction.bookingUrl;
          
          document.getElementById('attraction-modal').classList.add('active');
      }

      function closeModal() {
          document.getElementById('attraction-modal').classList.remove('active');
      }
      
      // Close modal when clicking outside content
      window.addEventListener('click', function(e) {
          if (e.target === document.getElementById('attraction-modal')) {
              closeModal();
          }
      });

      //Gallery Scripts

      new Swiper('.card-wrapper', {
        loop: true,
        spaceBetween: 20,
      
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
    
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }
      });

  
