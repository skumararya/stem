from pathlib import Path
import re

root = Path(r'c:\Users\Administrator\Desktop\July\2026\2\ST\Portal\Index')
html_files = list(root.glob('*.html'))
updated = []

nav_replacement = '''<ul class="w-100 navbar-nav me-auto mb-2 mb-lg-0">
                                                <li class="nav-item">
                                                    <a class="nav-link home_menu_items" aria-current="page" href="index.html" role="button">Home</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link home_menu_items" aria-current="page" href="about-us.html" role="button">About Us</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link home_menu_items" aria-current="page" href="our-services.html" role="button">Our Services</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link home_menu_items" aria-current="page" href="events.html" role="button">Events</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link home_menu_items" aria-current="page" href="contact.html" role="button">Contact Us</a>
                                                </li>
                                            </ul>'''

for path in html_files:
    text = path.read_text(encoding='utf-8')
    original = text

    # Replace Government of India mentions with Stem Infinite
    text = re.sub(r'Government of India', 'Stem Infinite', text, flags=re.IGNORECASE)

    # Update email domains from digitalaiedu.org to steminfiniteinnovation.com
    text = re.sub(r'info\.ranchi@digitalaiedu\.org', 'info@steminfiniteinnovation.com', text, flags=re.IGNORECASE)
    text = re.sub(r'@digitalaiedu\.org', '@steminfiniteinnovation.com', text, flags=re.IGNORECASE)

    # Convert plain email references to mailto links (visible addresses)
    # Simple pattern: an email-like string not already wrapped
    def mailto_replace(m):
        email = m.group(0)
        return f'<a href="mailto:{email}">{email}</a>'
    text = re.sub(r'(?<!href=")([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)', mailto_replace, text)

    # Wrap phone numbers in tel: links where 'call' icon is used
    # Match pattern: <p ...><span ...>call</span> SOME PHONE TEXT</p>
    def phone_wrap(m):
        before = m.group(1)
        phone_text = m.group(2).strip()
        # Extract digits and plus
        digits = re.sub(r'[^+0-9]', '', phone_text)
        if not digits:
            return m.group(0)
        return f'{before}<a href="tel:{digits}">{phone_text}</a></p>'
    text = re.sub(r'(<p[^>]*>\s*<span[^>]*>\s*call\s*</span>\s*)([^<]+)\s*</p>', phone_wrap, text, flags=re.IGNORECASE)

    # Replace href="#" placeholders with javascript:void(0) to avoid broken anchors
    text = re.sub(r'href="#"', 'href="javascript:void(0)"', text)

    # Ensure consistent navigation: replace the main ul nav block if present
    text = re.sub(r'<ul class="w-100 navbar-nav[\s\S]*?</ul>', nav_replacement, text)

    if text != original:
        path.write_text(text, encoding='utf-8')
        updated.append(path.name)

print('Updated files:', updated)
