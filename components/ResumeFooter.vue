<script setup lang="ts">
import me from '/me.json'
</script>

<template>
    <footer>
        <div class="footer-content">
            <div class="footer-section contact-info-footer">
                <h3>Connect with {{ me.name.split(' ')[0] }}</h3>
                <p v-if="me.email">
                    <a :href="`mailto:${me.email}`">{{ me.email }}</a>
                </p>
                <p v-if="me.phone">
                    <a :href="`tel:${me.phone}`">{{ me.phone }}</a>
                </p>
                <p v-if="me.location" class="text-muted">{{ me.location }}</p>
            </div>

            <div class="footer-section social-links">
                <div class="social-icons">
                    <a v-if="me.github" :href="me.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Icon name="ri:github-line" class="icon" />
                    </a>
                    <a v-if="me.linkedin" :href="me.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Icon name="ri:linkedin-box-line" class="icon" />
                    </a>
                    <a v-if="me.website" :href="me.website" target="_blank" rel="noopener noreferrer" aria-label="Personal Website">
                        <Icon name="ri:home-heart-line" class="icon" />
                    </a>
                </div>
            </div>

            <div class="footer-section quote-section">
                <p v-if="me.quote" class="quote">"{{ me.quote }}"</p>
            </div>
        </div>

        <div class="copyright">
            <p>&copy; {{ new Date().getFullYear() }} {{ me.name }}. All rights reserved.</p>
        </div>
    </footer>
</template>

<style lang="css" scoped>
footer {
    margin-top: 4rem;
    margin-block-end: 2rem;
    border-top: 1px solid #ccc;
    max-width: 100%;
    margin-inline: auto;
    padding: 2rem 0;
    text-align: center;
    background-color: #fcfcfc;
    color: #333;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    padding: 1rem 2rem;
    max-width: 960px;
    margin: 0 auto;
}

.footer-section {
    flex: 1;
    min-width: 250px;
    padding: 0 1rem;
    text-align: left;
}

.footer-section h3 {
    font-size: 1.1rem;
    color: #000;
    margin-top: 0;
    margin-bottom: 1rem;
    border-bottom: none;
    padding-bottom: 0;
}

.footer-section p {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    color: #555;
}

.footer-section a {
    color: #00b882;
    text-decoration: none;
}

.footer-section a:hover {    
    filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);
    text-decoration: underline;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;
}

.social-icons .icon {
    width: 28px;
    height: 28px;
    transition: filter 0.2s ease;
}

.social-icons .icon:hover {
    filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);
}

.quote-section {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.quote {
    font-size: 1rem;
    font-style: italic;
    color: #666;
    max-width: 400px;
    margin: 0 auto;
}

.copyright {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px dashed #e0e0e0;
    font-size: 0.85rem;
    color: #777;
}

@media (max-width: 768px) {
    .footer-section {
        flex-basis: 100%;
        text-align: center;
        padding: 0;
    }

    .social-icons {
        justify-content: center;
    }
}

@media print {
    footer {
        display: none;
    }
}
</style>