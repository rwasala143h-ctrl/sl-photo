
'''
const categories = [
    { id: 'all', name: 'All', icon: 'fa-layer-group', desc: 'Browse all photographers' },
    { id: 'wedding', name: 'Wedding', icon: 'fa-rings-wedding', desc: 'Capture your special day' },
    { id: 'preshoot', name: 'Pre-shoot', icon: 'fa-heart', desc: 'Romantic couple sessions' },
    { id: 'event', name: 'Event', icon: 'fa-calendar-star', desc: 'Corporate & social events' },
    { id: 'birthday', name: 'Birthday', icon: 'fa-birthday-cake', desc: 'Celebrate in style' },
    { id: 'portrait', name: 'Portrait', icon: 'fa-user', desc: 'Professional headshots' },
    { id: 'product', name: 'Product', icon: 'fa-box', desc: 'E-commerce photography' }
];

const photographers = [
    {
        id: 1,
        name: 'Elena Vasquez',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
        cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
        location: 'New York, NY',
        rating: 4.9,
        reviews: 127,
        categories: ['Wedding', 'Pre-shoot'],
        price: '$350',
        priceUnit: '/session',
        featured: true,
        about: 'Award-winning wedding photographer with over 8 years of experience capturing love stories across the globe. Specializing in candid moments and cinematic compositions that tell your unique story.',
        packages: [
            { name: 'Essential', price: '$350', desc: '2 hours, 50 edited photos', features: ['2-hour coverage', '50 edited photos', 'Online gallery', '1 photographer'] },
            { name: 'Premium', price: '$750', desc: '6 hours, 200 edited photos', features: ['6-hour coverage', '200 edited photos', 'Online gallery', '2 photographers', 'Engagement session', 'Photo album'] },
            { name: 'Luxury', price: '$1,500', desc: 'Full day, 500 edited photos', features: ['Full day coverage', '500 edited photos', 'Online gallery', '2 photographers', 'Engagement session', 'Premium album', 'Drone footage', 'Same-day edits'] }
        ],
        portfolio: [
            'https://images.unsplash.com/photo-1519741497674-611481863552?w=400',
            'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400',
            'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400',
            'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400',
            'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400',
            'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=400'
        ],
        reviews_list: [
            { name: 'Sarah M.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', date: '2 weeks ago', rating: 5, text: 'Elena captured our wedding day perfectly. Every photo tells a story. Absolutely stunning work!' },
            { name: 'James & Kate', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', date: '1 month ago', rating: 5, text: 'The pre-shoot session was so much fun. Elena made us feel comfortable and the results were breathtaking.' },
            { name: 'Michael R.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', date: '2 months ago', rating: 4, text: 'Great photographer, very professional. Delivered on time with beautiful edits.' }
        ],
        contact: { whatsapp: '+1234567890', phone: '+1234567890', email: 'elena@lensmarket.com' }
    },
    {
        id: 2,
        name: 'Marcus Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
        cover: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
        location: 'Los Angeles, CA',
        rating: 4.8,
        reviews: 89,
        categories: ['Event', 'Portrait'],
        price: '$280',
        priceUnit: '/hour',
        featured: true,
        about: 'Corporate event specialist and portrait photographer with a modern, editorial approach. Bringing magazine-quality imagery to business and personal branding.',
        packages: [
            { name: 'Event Basic', price: '$280', desc: '2 hours event coverage', features: ['2-hour coverage', '100 edited photos', '48-hour delivery', 'Digital gallery'] },
            { name: 'Event Pro', price: '$600', desc: 'Full event coverage', features: ['Full event coverage', '300 edited photos', '24-hour delivery', 'Digital gallery', 'Highlight reel'] },
            { name: 'Portrait Session', price: '$350', desc: '1.5 hour studio session', features: ['1.5-hour session', '30 edited photos', '2 outfit changes', 'Professional lighting', 'Retouching included'] }
        ],
        portfolio: [
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
            'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
            'https://images.unsplash.com/photo-1560472355-536de3962603?w=400',
            'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400',
            'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400',
            'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400'
        ],
        reviews_list: [
            { name: 'TechCorp Inc.', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100', date: '1 week ago', rating: 5, text: 'Marcus covered our annual conference flawlessly. The photos were magazine quality!' },
            { name: 'Lisa Wong', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100', date: '3 weeks ago', rating: 5, text: 'My LinkedIn headshots have never looked better. Marcus knows how to bring out confidence in portraits.' },
            { name: 'David K.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', date: '1 month ago', rating: 4, text: 'Professional and efficient. Great turnaround time on the edited photos.' }
        ],
        contact: { whatsapp: '+1987654321', phone: '+1987654321', email: 'marcus@lensmarket.com' }
    },
    {
        id: 3,
        name: 'Amara Okafor',
        avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200',
        cover: 'https://images.unsplash.com/photo-1530103862676-de3c9a59aa38?w=800',
        location: 'Chicago, IL',
        rating: 4.7,
        reviews: 64,
        categories: ['Birthday', 'Event', 'Portrait'],
        price: '$200',
        priceUnit: '/hour',
        featured: false,
        about: 'Passionate about capturing joy and celebration. Specializing in birthday parties, milestone events, and creative portraits that showcase personality.',
        packages: [
            { name: 'Birthday Bash', price: '$400', desc: '3 hours party coverage', features: ['3-hour coverage', '150 edited photos', 'Candid & posed shots', 'Digital gallery'] },
            { name: 'Milestone Event', price: '$600', desc: '5 hours full coverage', features: ['5-hour coverage', '250 edited photos', 'Setup & breakdown', 'Highlight video', 'Digital gallery'] },
            { name: 'Creative Portrait', price: '$250', desc: '2 hour creative session', features: ['2-hour session', '40 edited photos', 'Multiple locations', 'Props included', 'Creative direction'] }
        ],
        portfolio: [
            'https://images.unsplash.com/photo-1530103862676-de3c9a59aa38?w=400',
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400',
            'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400',
            'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=400',
            'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400',
            'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=400'
        ],
        reviews_list: [
            { name: 'The Johnson Family', avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=100', date: '3 days ago', rating: 5, text: 'Amara made my daughter\'s 16th birthday unforgettable. The photos are absolutely magical!' },
            { name: 'Robert P.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', date: '2 weeks ago', rating: 4, text: 'Great energy and very creative with poses. Loved the final results.' }
        ],
        contact: { whatsapp: '+1555123456', phone: '+1555123456', email: 'amara@lensmarket.com' }
    },
    {
        id: 4,
        name: 'James Whitfield',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
        cover: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800',
        location: 'Miami, FL',
        rating: 5.0,
        reviews: 203,
        categories: ['Wedding', 'Pre-shoot', 'Portrait'],
        price: '$500',
        priceUnit: '/session',
        featured: true,
        about: 'Luxury wedding photographer with a fine art approach. Creating timeless images that become family heirlooms. Based in Miami, available worldwide.',
        packages: [
            { name: 'Intimate', price: '$500', desc: '3 hours, 100 photos', features: ['3-hour coverage', '100 edited photos', 'Online gallery', '1 photographer'] },
            { name: 'Signature', price: '$1,200', desc: '8 hours, 400 photos', features: ['8-hour coverage', '400 edited photos', 'Online gallery', '2 photographers', 'Engagement session'] },
            { name: 'Destination', price: '$3,500', desc: 'Full weekend coverage', features: ['Weekend coverage', '800 edited photos', 'Online gallery', '2 photographers', 'Engagement session', 'Premium album', 'Travel included'] }
        ],
        portfolio: [
            'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400',
            'https://images.unsplash.com/photo-1519741497674-611481863552?w=400',
            'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400',
            'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400',
            'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400',
            'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400'
        ],
        reviews_list: [
            { name: 'Emily & Thomas', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', date: '5 days ago', rating: 5, text: 'James flew to Tuscany for our wedding and the results were beyond anything we imagined. True art.' },
            { name: 'Victoria S.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', date: '2 weeks ago', rating: 5, text: 'The pre-shoot on the beach was a dream. James has an incredible eye for light and composition.' },
            { name: 'Carlos M.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', date: '1 month ago', rating: 5, text: 'Worth every penny. Our wedding album is the most treasured possession we own.' }
        ],
        contact: { whatsapp: '+13055551234', phone: '+13055551234', email: 'james@lensmarket.com' }
    },
    {
        id: 5,
        name: 'Sofia Andersson',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
        cover: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
        location: 'Seattle, WA',
        rating: 4.6,
        reviews: 45,
        categories: ['Product', 'Portrait'],
        price: '$180',
        priceUnit: '/hour',
        featured: false,
        about: 'Product photography specialist helping e-commerce brands and small businesses showcase their products with stunning, sales-driving imagery.',
        packages: [
            { name: 'Product Basic', price: '$180', desc: '10 product shots', features: ['10 product photos', 'White background', 'Basic retouching', '48-hour delivery'] },
            { name: 'Product Pro', price: '$350', desc: '25 product shots', features: ['25 product photos', 'Styled backgrounds', 'Advanced retouching', 'Lifestyle shots', '24-hour delivery'] },
            { name: 'Brand Package', price: '$600', desc: 'Full brand imagery', features: ['50 product photos', 'Lifestyle & flat lay', 'Advanced retouching', 'Social media crops', 'Rush delivery'] }
        ],
        portfolio: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
            'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400'
        ],
        reviews_list: [
            { name: 'Brew & Bean Co.', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100', date: '1 week ago', rating: 5, text: 'Sofia transformed our product line. Sales increased 40% after updating our photos!' },
            { name: 'Nina L.', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100', date: '3 weeks ago', rating: 4, text: 'Very professional and detail-oriented. The product shots were crisp and beautiful.' }
        ],
        contact: { whatsapp: '+12065556789', phone: '+12065556789', email: 'sofia@lensmarket.com' }
    },
    {
        id: 6,
        name: 'Raj Patel',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
        cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
        location: 'Austin, TX',
        rating: 4.9,
        reviews: 156,
        categories: ['Event', 'Birthday', 'Wedding'],
        price: '$320',
        priceUnit: '/hour',
        featured: true,
        about: 'Versatile event photographer with a documentary style. From intimate birthdays to grand weddings, I capture the authentic emotions of your celebration.',
        packages: [
            { name: 'Party Coverage', price: '$320', desc: '3 hours event coverage', features: ['3-hour coverage', '200 edited photos', 'Candid focus', 'Digital gallery'] },
            { name: 'Wedding Story', price: '$900', desc: 'Full day coverage', features: ['Full day coverage', '400 edited photos', '2 photographers', 'Engagement session', 'Photo album'] },
            { name: 'Weekend Celebration', price: '$2,000', desc: 'Multi-day coverage', features: ['2-day coverage', '600 edited photos', '2 photographers', 'Rehearsal dinner', 'Photo album', 'Video highlights'] }
        ],
        portfolio: [
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400',
            'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400',
            'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=400',
            'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400',
            'https://images.unsplash.com/photo-1519741497674-611481863552?w=400'
        ],
        reviews_list: [
            { name: 'The Martinez Family', avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=100', date: '4 days ago', rating: 5, text: 'Raj captured our 50th anniversary party beautifully. Every smile, every tear - all preserved perfectly.' },
            { name: 'Aisha & Omar', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100', date: '2 weeks ago', rating: 5, text: 'Our wedding photos are breathtaking. Raj has an incredible ability to be everywhere at once.' },
            { name: 'Tom H.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', date: '1 month ago', rating: 5, text: 'Best event photographer in Austin. Period.' }
        ],
        contact: { whatsapp: '+15125559876', phone: '+15125559876', email: 'raj@lensmarket.com' }
    }
];

const portfolioItems = [
    { img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600', title: 'Eternal Vows', author: 'Elena Vasquez', category: 'Wedding' },
    { img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600', title: 'Golden Hour', author: 'Marcus Chen', category: 'Portrait' },
    { img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600', title: 'First Dance', author: 'Elena Vasquez', category: 'Wedding' },
    { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600', title: 'Corporate Summit', author: 'Marcus Chen', category: 'Event' },
    { img: 'https://images.unsplash.com/photo-1530103862676-de3c9a59aa38?w=600', title: 'Sweet Sixteen', author: 'Amara Okafor', category: 'Birthday' },
    { img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600', title: 'Tuscan Dreams', author: 'James Whitfield', category: 'Wedding' },
    { img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', title: 'Minimalist Watch', author: 'Sofia Andersson', category: 'Product' },
    { img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600', title: 'Festival Lights', author: 'Raj Patel', category: 'Event' },
    { img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600', title: 'Birthday Joy', author: 'Amara Okafor', category: 'Birthday' }
];

const revenuePlans = [
    {
        name: 'Starter',
        icon: 'fa-seedling',
        price: '$0',
        period: '/month',
        desc: 'Perfect for hobbyists getting started',
        features: ['Basic profile listing', '5 portfolio uploads', 'Standard search placement', 'Client messaging', 'Basic analytics'],
        popular: false
    },
    {
        name: 'Pro',
        icon: 'fa-star',
        price: '$29',
        period: '/month',
        desc: 'For serious photographers',
        features: ['Featured profile badge', 'Unlimited portfolio uploads', 'Priority search placement', 'Instant booking', 'Advanced analytics', 'Custom portfolio URL', 'Review management'],
        popular: true
    },
    {
        name: 'Elite',
        icon: 'fa-crown',
        price: '$79',
        period: '/month',
        desc: 'Maximum exposure & tools',
        features: ['Everything in Pro', 'Homepage featured spot', 'Ad-free experience', 'Commission-free bookings', 'Dedicated support', 'Marketing toolkit', 'API access', 'White-label options'],
        popular: false
    }
];

let currentFilter = 'all';
let currentSearch = '';
let currentPhotographer = null;

const app = {
    init() {
        this.renderCategories();
        this.renderFilters();
        this.renderPhotographers();
        this.renderPortfolio();
        this.renderRevenue();
        this.setupScrollEffects();
        this.setupNavbar();
    },

    renderCategories() {
        const grid = document.getElementById('categoriesGrid');
        grid.innerHTML = categories.slice(1).map(cat => `
            <div class="category-card" onclick="app.filterByCategory('${cat.id}')">
                <div class="category-icon"><i class="fas ${cat.icon}"></i></div>
                <h3>${cat.name}</h3>
                <p>${cat.desc}</p>
            </div>
        `).join('');
    },

    renderFilters() {
        const bar = document.getElementById('filtersBar');
        bar.innerHTML = categories.map(cat => `
            <button class="filter-chip ${cat.id === currentFilter ? 'active' : ''}" onclick="app.filterByCategory('${cat.id}')">
                ${cat.name}
            </button>
        `).join('');
    },

    renderPhotographers() {
        const grid = document.getElementById('photographersGrid');
        let filtered = photographers;
        
        if (currentFilter !== 'all') {
            const catName = categories.find(c => c.id === currentFilter)?.name;
            filtered = photographers.filter(p => p.categories.some(c => c.toLowerCase() === catName?.toLowerCase()));
        }
        
        if (currentSearch) {
            const q = currentSearch.toLowerCase();
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(q) || 
                p.categories.some(c => c.toLowerCase().includes(q)) ||
                p.location.toLowerCase().includes(q)
            );
        }
        
        if (filtered.length === 0) {
            grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);"><i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>No photographers found matching your criteria.</div>';
            return;
        }
        
        grid.innerHTML = filtered.map(p => `
            <div class="photographer-card ${p.featured ? 'featured' : ''}">
                ${p.featured ? '<div class="featured-badge"><i class="fas fa-crown"></i> Featured</div>' : ''}
                <div class="card-cover">
                    <img src="${p.cover}" alt="${p.name}">
                    <div class="card-cover-overlay"></div>
                    <div class="card-avatar">
                        <img src="${p.avatar}" alt="${p.name}">
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-header">
                        <div class="card-name">${p.name}</div>
                        <div class="card-rating">
                            <i class="fas fa-star"></i>
                            <span>${p.rating}</span>
                        </div>
                    </div>
                    <div class="card-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${p.location}
                    </div>
                    <div class="card-categories">
                        ${p.categories.map(c => `<span class="cat-tag">${c}</span>`).join('')}
                    </div>
                    <div class="card-price">${p.price} <span>${p.priceUnit}</span></div>
                    <div class="card-actions">
                        <button class="btn btn-outline" onclick="app.openProfile(${p.id})">
                            <i class="fas fa-user"></i> Profile
                        </button>
                        <button class="btn btn-primary" onclick="app.openBooking(${p.id})">
                            <i class="fas fa-calendar-check"></i> Book
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    },

    renderPortfolio() {
        const grid = document.getElementById('portfolioGrid');
        grid.innerHTML = portfolioItems.map(item => `
            <div class="portfolio-item" onclick="app.showImage('${item.img}')">
                <img src="${item.img}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <h4>${item.title}</h4>
                    <p>${item.author} · ${item.category}</p>
                </div>
            </div>
        `).join('');
    },

    renderRevenue() {
        const grid = document.getElementById('revenueGrid');
        grid.innerHTML = revenuePlans.map(plan => `
            <div class="revenue-card ${plan.popular ? 'popular' : ''}">
                ${plan.popular ? '<div class="popular-tag">Most Popular</div>' : ''}
                <div class="revenue-icon"><i class="fas ${plan.icon}"></i></div>
                <h3>${plan.name}</h3>
                <div class="price">${plan.price}<span>${plan.period}</span></div>
                <p style="color: var(--text-muted); font-size: 0.9rem;">${plan.desc}</p>
                <ul class="revenue-features">
                    ${plan.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                </ul>
                <button class="btn ${plan.popular ? 'btn-primary' : 'btn-outline'}" style="width: 100%;" onclick="app.showToast('Coming soon! Plan selection will be available shortly.', 'info')">
                    ${plan.popular ? '<i class="fas fa-rocket"></i> Get Started' : '<i class="fas fa-arrow-right"></i> Choose Plan'}
                </button>
            </div>
        `).join('');
    },

    filterByCategory(catId) {
        currentFilter = catId;
        this.renderFilters();
        this.renderPhotographers();
        document.getElementById('photographers').scrollIntoView({ behavior: 'smooth' });
    },

    searchFromHero() {
        currentSearch = document.getElementById('heroSearch').value.trim();
        this.renderPhotographers();
        document.getElementById('photographers').scrollIntoView({ behavior: 'smooth' });
    },

    openProfile(id) {
        const p = photographers.find(ph => ph.id === id);
        if (!p) return;
        currentPhotographer = p;
        
        const content = document.getElementById('profileContent');
        content.innerHTML = `
            <div class="profile-cover">
                <img src="${p.cover}" alt="${p.name}">
                <div class="profile-cover-overlay"></div>
            </div>
            <div class="profile-header-info">
                <div class="profile-avatar-large">
                    <img src="${p.avatar}" alt="${p.name}">
                </div>
                <div class="profile-title-section">
                    <h2>${p.name}</h2>
                    <div class="profile-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${p.location}</span>
                        <span><i class="fas fa-star"></i> ${p.rating} (${p.reviews} reviews)</span>
                        <span><i class="fas fa-camera"></i> ${p.categories.join(', ')}</span>
                    </div>
                </div>
            </div>
            <div class="profile-body">
                <div class="profile-tabs">
                    <button class="profile-tab active" onclick="app.switchProfileTab('about')">About</button>
                    <button class="profile-tab" onclick="app.switchProfileTab('portfolio')">Portfolio</button>
                    <button class="profile-tab" onclick="app.switchProfileTab('packages')">Packages</button>
                    <button class="profile-tab" onclick="app.switchProfileTab('reviews')">Reviews</button>
                    <button class="profile-tab" onclick="app.switchProfileTab('contact')">Contact</button>
                </div>
                
                <div class="tab-content active" id="tab-about">
                    <p class="about-text">${p.about}</p>
                    <div class="contact-buttons" style="margin-top: 1.5rem;">
                        <button class="contact-btn whatsapp" onclick="window.open('https://wa.me/${p.contact.whatsapp}', '_blank')">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </button>
                        <button class="contact-btn call" onclick="window.location.href='tel:${p.contact.phone}'">
                            <i class="fas fa-phone"></i> Call
                        </button>
                        <button class="contact-btn email" onclick="window.location.href='mailto:${p.contact.email}'">
                            <i class="fas fa-envelope"></i> Email
                        </button>
                    </div>
                    <button class="btn btn-primary" style="width: 100%; margin-top: 1rem; padding: 1rem;" onclick="app.openBooking(${p.id})">
                        <i class="fas fa-calendar-check"></i> Book a Session
                    </button>
                </div>
                
                <div class="tab-content" id="tab-portfolio">
                    <div class="profile-gallery">
                        ${p.portfolio.map(img => `
                            <div class="gallery-item" onclick="app.showImage('${img}')">
                                <img src="${img}" alt="Portfolio">
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="tab-content" id="tab-packages">
                    ${p.packages.map(pkg => `
                        <div class="package-card">
                            <div class="package-header">
                                <div class="package-name">${pkg.name}</div>
                                <div class="package-price">${pkg.price}</div>
                            </div>
                            <div class="package-desc">${pkg.desc}</div>
                            <ul class="package-features">
                                ${pkg.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                    <button class="btn btn-primary" style="width: 100%; padding: 1rem;" onclick="app.openBooking(${p.id})">
                        <i class="fas fa-calendar-check"></i> Book Now
                    </button>
                </div>
                
                <div class="tab-content" id="tab-reviews">
                    ${p.reviews_list.map(r => `
                        <div class="review-card">
                            <div class="review-header">
                                <div class="reviewer">
                                    <div class="reviewer-avatar">
                                        <img src="${r.avatar}" alt="${r.name}">
                                    </div>
                                    <div>
                                        <div class="reviewer-name">${r.name}</div>
                                        <div class="review-date">${r.date}</div>
                                    </div>
                                </div>
                                <div class="review-stars">
                                    ${Array(5).fill(0).map((_, i) => `<i class="fas fa-star${i < r.rating ? '' : ' far'}"></i>`).join('')}
                                </div>
                            </div>
                            <p class="review-text">${r.text}</p>
                        </div>
                    `).join('')}
                </div>
                
                <div class="tab-content" id="tab-contact">
                    <div class="contact-buttons">
                        <button class="contact-btn whatsapp" onclick="window.open('https://wa.me/${p.contact.whatsapp}', '_blank')">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </button>
                        <button class="contact-btn call" onclick="window.location.href='tel:${p.contact.phone}'">
                            <i class="fas fa-phone"></i> Call Now
                        </button>
                        <button class="contact-btn email" onclick="window.location.href='mailto:${p.contact.email}'">
                            <i class="fas fa-envelope"></i> Send Email
                        </button>
                    </div>
                    <button class="btn btn-primary" style="width: 100%; margin-top: 1.5rem; padding: 1rem;" onclick="app.openBooking(${p.id})">
                        <i class="fas fa-calendar-check"></i> Request Booking
                    </button>
                </div>
            </div>
        `;
        
        document.getElementById('profileModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    switchProfileTab(tab) {
        document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        event.target.classList.add('active');
        document.getElementById('tab-' + tab).classList.add('active');
    },

    openBooking(id) {
        const p = photographers.find(ph => ph.id === id);
        if (!p) return;
        currentPhotographer = p;
        
        const select = document.getElementById('bookingPackage');
        select.innerHTML = '<option value="">Select a package</option>' +
            p.packages.map(pkg => `<option value="${pkg.name}">${pkg.name} - ${pkg.price}</option>`).join('');
        
        this.closeModal('profileModal');
        document.getElementById('bookingModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    submitBooking(e) {
        e.preventDefault();
        this.closeModal('bookingModal');
        this.showToast('Booking request sent successfully! The photographer will contact you shortly.', 'success');
        e.target.reset();
    },

    openAuth() {
        document.getElementById('authModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    switchAuthTab(tab) {
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
        event.target.classList.add('active');
        document.getElementById(tab + 'Form').classList.add('active');
    },

    handleLogin(e) {
        e.preventDefault();
        this.closeModal('authModal');
        this.showToast('Welcome back! You are now signed in.', 'success');
    },

    handleRegister(e) {
        e.preventDefault();
        this.closeModal('authModal');
        this.showToast('Account created successfully! Welcome to LensMarket.', 'success');
    },

    closeModal(id) {
        document.getElementById(id).classList.remove('active');
        document.body.style.overflow = '';
    },

    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast ' + type;
        const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
        toast.innerHTML = `<i class="fas ${icon}"></i><span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.animation = 'fadeOut 0.4s ease forwards';
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    },

    showImage(src) {
        this.showToast('Image viewer coming soon!', 'info');
    },

    goHome() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    toggleMobileMenu() {
        this.showToast('Mobile menu coming soon!', 'info');
    },

    setupScrollEffects() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    },

    setupNavbar() {
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());

document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(m => {
            m.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});
</script>
</body>
</html>
'''

with open('/mnt/agents/output/lensmarket.html', 'a', encoding='utf-8') as f:
    f.write(part3)

print("Part 3 written successfully")
print(f"Length: {len(part3)} characters")

# Verify the file
import os
file_size = os.path.getsize('/mnt/agents/output/lensmarket.html')
print(f"\nTotal file size: {file_size} bytes ({file_size/1024:.1f} KB)")
