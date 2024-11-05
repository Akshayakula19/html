const services = [
    {
        id: 'web-development',
        title: 'Web Development',
        description: 'Blending Aesthetic and Innovation, My UX/UI gives you a Top Notch Client.',
        startingCost: 2000,
        features: [
            'Portfolio Highlights',
            'Client Testimonials',
            'Design Process',
        ],
        imageUrl: 'https://via.placeholder.com/400x300',
    },
    {
        id: 'web-design',
        title: 'Web Design',
        description: 'Creating visually stunning and user-friendly websites that leave a lasting impression.',
        startingCost: 1500,
        features: [
            'Custom Layouts',
            'Responsive Design',
            'UI/UX Optimization',
        ],
        imageUrl: 'https://via.placeholder.com/400x300',
    },
    {
        id: 'graphics-design',
        title: 'Graphics Design',
        description: 'Crafting eye-catching visuals that communicate your brand message effectively.',
        startingCost: 1000,
        features: [
            'Logo Design',
            'Brand Identity',
            'Marketing Materials',
        ],
        imageUrl: 'https://via.placeholder.com/400x300',
    },
];

function createAccordionItem(service, index) {
    return `
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse${index}">
                    ${service.title}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${index}" data-bs-parent="#services-accordion">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col-md-6">
                            <p>${service.description}</p>
                            <p>Starts At <u>Cost® — $${service.startingCost}</u></p>
                            <p class="fw-bold">[ KEY FEATURES ]</p>
                            <ul class="list-unstyled">
                                ${service.features.map(feature => `<li><i class="fas fa-check me-2"></i>${feature}</li>`).join('')}
                            </ul>
                            <a href="#contact" class="theme-btn">Get Started</a>
                        </div>
                        <div class="col-md-6 mt-3 mt-md-0">
                            <img src="${service.imageUrl}" alt="${service.title}" class="service-image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initAccordion() {
    const accordionContainer = document.getElementById('services-accordion');
    accordionContainer.className = 'accordion';

    services.forEach((service, index) => {
        const accordionItem = createAccordionItem(service, index);
        accordionContainer.innerHTML += accordionItem;
    });
}

document.addEventListener('DOMContentLoaded', initAccordion);