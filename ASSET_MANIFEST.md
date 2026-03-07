# ASSET MANIFEST

## Directory Structure
Все изображения должны сохраняться в `/public/assets/` (Next.js public folder).

## Hero & Product Renders
*Используйте формат .webp / .avif с качеством 85-90% для оптимизации.*
- `hero-main.webp` - Главный рендер (Термосы 600ml + 380ml). Максимальная ширина 2400px.
- `product-600.webp` - Одиночная изоляция модели 600 мл (прозрачный PNG или белый фон).
- `product-380.webp` - Одиночная изоляция модели 380 мл.
- `product-370.webp` - Модель (Кружка) 370 мл.

## Print Categories Renders
*Изображения-превью карточек, размер до 800px width.*
- `category-memes.webp`
- `category-themes.webp`
- `category-greeting.webp`
- `category-names.webp`
- `category-kids.webp`
- `category-collage.webp`

## Gallery & Lifestyle Renders
*Lazy-loaded lifestyle снимки.*
- `lifestyle-office.webp`
- `lifestyle-outdoor.webp`
- `lifestyle-gift.webp`

## UI Elements
- `logo-main.png` (Используйте предоставленный клиентом логотип `logo.png`).
- `favicon.ico`
- `apple-touch-icon.png`

## Export Rules
1. **Performance**: Используйте Next.js `<Image />` компонент, который автоматически конвертирует форматы.
2. **Backgrounds**: #F5F5F7 для секций, #FFFFFF для общих фонов. Рендеры термосов должны быть со слегка заметными тенями на полу (shadow catcher).
